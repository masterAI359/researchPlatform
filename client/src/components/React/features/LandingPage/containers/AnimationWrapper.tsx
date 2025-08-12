import { lazy, Suspense, useEffect } from 'react'
import { useState, useRef } from 'react';
import ToolsForResearch from '../Components/Keyboard';
import BlueSkySkeleton from '../../blueSky/skeletons/BlueSkySkeleton';
import WikiAndNotes from '../Components/WikiAndNotes';
const BlueSkyPosts = lazy(() => import('@/components/React/features/blueSky/Containers/BlueSkyPosts'));

export default function AnimationWrapper() {
    const [showBlueSky, setShowBlueSky] = useState<boolean>(false);
    const [playAnimation, setPlayAnimation] = useState<boolean>(false);
    const sentinelRef = useRef(null);
    const animationTriggerRef = useRef(null);


    useEffect(() => {
        if ((showBlueSky) || (!sentinelRef.current)) return;

        const observer = new IntersectionObserver(([entry]) => {

            if (entry.isIntersecting) {
                setShowBlueSky(prev => !prev);
                observer.disconnect();
            }
        },
            { rootMargin: '400px' }
        );
        observer.observe(sentinelRef.current);

        return () => {
            observer.disconnect();
        };
    }, [showBlueSky]);


    useEffect(() => {
        if ((playAnimation) || (!animationTriggerRef.current)) return;

        const animationObserver = new IntersectionObserver(([entry]) => {

            if (entry.isIntersecting) {
                setPlayAnimation(prev => !prev);
                animationObserver.disconnect();
            }
        },
            { rootMargin: '400px' }
        );
        animationObserver.observe(animationTriggerRef.current);

        return () => {
            animationObserver.disconnect();
        }
    }, [playAnimation])

    return (
        <section aria-label='animated components' className='w-full h-auto'>
            <div
                ref={animationTriggerRef}
                className='h-1 w-full' />

            <ToolsForResearch playAnimation={playAnimation} />

            <WikiAndNotes />

            <div ref={sentinelRef} className='h-1 w-full' />

            {showBlueSky &&
                <Suspense fallback={<BlueSkySkeleton context={'home'} />}>
                    {showBlueSky && <BlueSkyPosts context={'home'} />}
                </Suspense>
            }


        </section>
    )
}