import HeroImage from '@/components/React/HomeComponents/HeroImage';
import Challenge from '../../HomeComponents/Challenge';
import ChartingFeatures from '../../HomeComponents/Features/ChartingFeatures';
import WikiAndNotes from '../../HomeComponents/Features/WikiAndNotes';
import BlueSkyPosts from '../../Features/blueSky/containers/BlueSkyPosts';
import ToolsForResearch from '../../HomeComponents/Features/Keyboard';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/ReduxToolKit/store';
import { getStoredPosts, searchBlueSky } from '@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice';
import { ScrollUp } from '@/helpers/ScrollToTop';
import SignOutModal from '../../Session/Forms/AuthForms/SignOutModal';

export default function HomeContainer({ }) {
    const signingOut = useSelector((state: RootState) => state.auth.signOut)
    const posts = useSelector((state: RootState) => state.bluesky.posts)
    const dispatch = useDispatch<AppDispatch>()

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

    return (
        <section className={`flex h-auto flex-col w-full grow transition-opacity duration-200 delay-200 ease-in-out scroll-smooth thin-gray-scrollbar
         ${signingOut ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
            {signingOut && <SignOutModal />}

            <HeroImage />
            <Challenge />
            <ChartingFeatures />
            <ToolsForResearch />
            <WikiAndNotes />
            <BlueSkyPosts context={'home'} />

        </section>
    )
}