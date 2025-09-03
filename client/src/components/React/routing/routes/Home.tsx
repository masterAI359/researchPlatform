import HeroImage from '@/components/React/features/LandingPage/Components/HeroImage';
import Challenge from '../../features/LandingPage/Components/Challenge';
import ChartingFeatures from '../../features/LandingPage/Components/ChartingFeatures';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/ReduxToolKit/store';
import SignOutModal from '../../Session/forms/AuthForms/SignOutModal';
import AnimationWrapper from '../../features/LandingPage/containers/AnimationWrapper';
import { getStoredPosts, searchBlueSky } from '@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ScrollUp } from '@/helpers/ScrollToTop';
import { useBodyLock } from '@/Hooks/useBodyLock';

export default function Home({ }) {
    const signingOut = useSelector((state: RootState) => state.auth.signOut);
    const popoverPost = useSelector((state: RootState) => state.bluesky.popoverPost);
    const posts = useSelector((state: RootState) => state.bluesky.posts);
    const dispatch = useDispatch<AppDispatch>();
    useBodyLock();

    useEffect(() => {
        const stored = localStorage.getItem('bsPosts');

        if (stored && !posts) {
            const parsed = JSON.parse(stored);
            dispatch(getStoredPosts(parsed))
        } else if (!stored && !posts) {
            dispatch(searchBlueSky("morning"));
        };

        ScrollUp();

    }, []);


    return (
        <section className={`flex h-auto flex-col w-full grow transition-opacity duration-200 delay-200 ease-in-out scroll-smooth thin-gray-scrollbar
         ${signingOut || popoverPost ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'}
         `}>
            {signingOut &&
                <SignOutModal />
            }

            <HeroImage />
            <Challenge />
            <ChartingFeatures />
            <AnimationWrapper />
        </section>
    );
};