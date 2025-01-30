import HeroImage from '@/components/React/HomeComponents/HeroImage';
import ArticlesResult from '@/components/React/HomeComponents/ArticlesResult';
import Challenge from '../HomeComponents/Challenge';
import { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';



export default function HomeContainer({ }) {
    const dispatch = useDispatch()
    const [windowWidth, setWindowWidth] = useState<number>(null)
    const windowRef = useRef(null)



    return (
        <section className='flex h-auto flex-col w-full grow'>
            <HeroImage />
            <Challenge />
            <ArticlesResult />

        </section>
    )
}