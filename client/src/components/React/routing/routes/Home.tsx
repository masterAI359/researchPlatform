import HeroImage from '@/components/React/features/LandingPage/Components/HeroImage';
import Challenge from '../../features/LandingPage/Components/Challenge';
import ChartingFeatures from '../../features/LandingPage/Components/ChartingFeatures';
import WikiAndNotes from '../../features/LandingPage/Components/WikiAndNotes';
import ToolsForResearch from '../../features/LandingPage/Components/Keyboard';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/ReduxToolKit/store';
import { getStoredPosts, searchBlueSky } from '@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice';
import { ScrollUp } from '@/helpers/ScrollToTop';
import SignOutModal from '../../Session/forms/AuthForms/SignOutModal';
import BlueSkyLoader from '../../features/blueSky/Loaders/BlueSkyLoader';
import BlueSkySkeleton from '../../features/blueSky/skeletons/BlueSkySkeleton';
const BlueSkyPosts = lazy(() => import('@/components/React/features/blueSky/Containers/BlueSkyPosts'));

export default function Home({ }) {
    const [showBlueSky, setShowBlueSky] = useState<boolean>(false);
    const signingOut = useSelector((state: RootState) => state.auth.signOut)
    const posts = useSelector((state: RootState) => state.bluesky.posts)
    const dispatch = useDispatch<AppDispatch>();
    const sentinelRef = useRef(null);

    useLayoutEffect(() => {
        const stored = localStorage.getItem('bsPosts');

        if (stored && !posts) {
            const parsed = JSON.parse(stored);
            dispatch(getStoredPosts(parsed))
        } else if (!stored && !posts) {
            dispatch(searchBlueSky("morning"));
        };

        ScrollUp();

    }, []);


    useEffect(() => {

        if ((showBlueSky) || (!sentinelRef.current)) return;

        const observer = new IntersectionObserver(([entry]) => {

            if (entry.isIntersecting) {
                setShowBlueSky(prev => !prev);
                observer.disconnect();
            }
        },
            { rootMargin: '100px' }
        );

        observer.observe(sentinelRef.current);

        return () => {
            observer.disconnect();
        };

    }, [showBlueSky]);

    return (
        <section className={`flex h-auto flex-col w-full grow transition-opacity duration-200 delay-200 ease-in-out scroll-smooth thin-gray-scrollbar
         ${signingOut ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
            {signingOut && <SignOutModal />}

            <HeroImage />
            <Challenge />
            <ChartingFeatures />
            <ToolsForResearch />
            <WikiAndNotes />

            <div ref={sentinelRef} className='h-1 w-full' />

            <Suspense fallback={<BlueSkySkeleton />}>
                {showBlueSky && <BlueSkyPosts context={'home'} />}
            </Suspense>

        </section>
    );
};