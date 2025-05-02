import HeroImage from '@/components/React/HomeComponents/HeroImage';
import ArticlesResult from '@/components/React/HomeComponents/ArticlesResult';
import Challenge from '../HomeComponents/Challenge';
import BlueSkyPosts from '../BlueSky/BlueSkyPosts';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/ReduxToolKit/store';
import { getFeed } from '@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice';


export default function HomeContainer({ }) {
    const signingOut = useSelector((state: RootState) => state.auth.signOut)
    const posts = useSelector((state: RootState) => state.bluesky.posts)
    const blueSkyStatus = useSelector((state: RootState) => state.bluesky.status)
    const dispatch = useDispatch<AppDispatch>()
    const [windowWidth, setWindowWidth] = useState<number>(null)
    const windowRef = useRef(null)

    useEffect(() => {

        if(posts === null && blueSkyStatus === 'idle') {
            dispatch(getFeed())
        }

    }, [posts, blueSkyStatus])

    return (
        <section className={`flex h-auto flex-col w-full grow transition-opacity duration-200 delay-200 ease-in-out scroll-smooth thin-gray-scrollbar
         ${signingOut ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
            <HeroImage />
            <Challenge />
           {/* <ArticlesResult /> */}
            <BlueSkyPosts context = {'home'}/>
        </section>
    )
}