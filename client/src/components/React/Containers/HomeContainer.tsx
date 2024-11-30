import Navigation from '@/components/Astro/global/Navigation';
import HeroImage from '@/components/React/HomeComponents/HeroImage';
import ArticlesResult from '@/components/React/HomeComponents/ArticlesResult';
import Challenge from '../HomeComponents/Challenge';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';


export default function HomeContainer({ }) {
    const [windowWidth, setWindowWidth] = useState<number>(null)
    const windowRef = useRef(null)


    const resize = () => {

        if (windowRef.current) {
            setWindowWidth(windowRef.current.offsetWidth)
        }
    }



    useLayoutEffect(() => {

        if (windowRef.current) {
            setWindowWidth(windowRef.current.offsetWidth)
        }

        window.addEventListener('resize', resize)

    }, [windowRef])


    return (
        <section ref={windowRef} className='flex h-auto flex-col w-full grow'>
            <Navigation width={windowWidth} />
            <HeroImage />
            <Challenge />
            <ArticlesResult />
        </section>
    )
}