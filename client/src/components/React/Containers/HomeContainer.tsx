import HeroImage from '@/components/React/HomeComponents/HeroImage';
import ArticlesResult from '@/components/React/HomeComponents/ArticlesResult';
import Challenge from '../HomeComponents/Challenge';
import { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/ReduxToolKit/store';



export default function HomeContainer({ }) {
    const signingOut = useSelector((state: RootState) => state.auth.signOut)
    const dispatch = useDispatch()
    const [windowWidth, setWindowWidth] = useState<number>(null)
    const windowRef = useRef(null)



    return (
        <section className={`flex h-auto flex-col w-full grow transition-opacity duration-200 delay-200 ease-in-out
         ${signingOut ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
            <HeroImage />
            <Challenge />
            <ArticlesResult />

        </section>
    )
}