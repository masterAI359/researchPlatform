import { useState, useLayoutEffect, useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetBlueSkyState } from "@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice";
import { motion } from "framer-motion";
import { BSPost } from "./BSPost";
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary";

export default function Posts ({ posts, context }) {
    const [firstHalf, setFirstHalf] = useState<any>(null);
    const [secondHalf, setSecondHalf] = useState<any>(null);
    const [clicked, setClicked]= useState<boolean>(false);
    const dispatch = useDispatch()

 useEffect(() => {
  const handleNew = () => {
    setFirstHalf(null);
    setSecondHalf(null);
    dispatch(resetBlueSkyState());
  };
  window.addEventListener('newSearch', handleNew);

  if (posts) {
    const postsUsed = posts.slice(0, Math.min(16, posts.length));
    const mid = Math.floor(postsUsed.length / 2);

    setFirstHalf(postsUsed.slice(0, mid));
    setSecondHalf(postsUsed.slice(mid));
  }

  return () => window.removeEventListener('newSearch', handleNew);
     
  }, [posts])

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
  }

  

  return (
    <motion.div
    key='postfeed'
    variants={variants}
    initial='closed'
    animate='open'
    exit='closed' 
    className="h-full"
    >
     <div
     className='lg:px-20 lg:pb-0 relative'>
							<div className='border-b items-end border-white/10 py-8 lg:py-12'>
								<div className="px-2">
              
									<div className='flex items-center gap-x-2 w-fit'>
                  <div className="lg:w-7 lg:h-7 h-6 w-6 mx-auto text-white/90">
        <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" /></svg>
        </div>
                     <div className="text-zinc-300 text-xs">BlueSky feed</div>
                      </div>
									<h2 className='text-lg lg:text-3xl mt-2 lg:mt-6 tracking-tight font-light lg:text-4xl text-white'>
										A peak into public discourse
										<span className='block text-zinc-400'>

										</span>
									</h2>
								</div>
								<p className='text-white mt-6'>
								</p>
							</div>
						</div>
            <ErrorBoundary>
            <div className='relative mx-auto px-4 lg:px-16 overflow-y-hidden'>
							<div style={{
                    animationPlayState: clicked ? 'paused' : 'running'
                   }}  className='items-center space-x-6 pb-12 lg:pb-0 lg:space-x-8 animate-scroller2 md:animate-none relative lg:px-4 mx-auto grid grid-cols-1 lg:grid-cols-2'>
									 <div style={{
                    animationPlayState: clicked ? 'paused' : 'running'
                   }} className={`relative flex-shrink-0 h-full items-center animate-scroller2`}>
										{firstHalf !== null && firstHalf.map((post: any) => (
                      <BSPost context={context} key={post.record.text} post={post} setClicked={setClicked}/>
										))}
									</div>
									<div style={{
                    animationPlayState: clicked ? 'paused' : 'running'
                   }} className={`relative flex-shrink-0 h-full items-center animate-scroller`}>
										{secondHalf !== null && secondHalf.map((post: any) => (
										<BSPost context={context} key={post.record.text} post={post} setClicked={setClicked}/>
										))}
									</div>
							</div>
						</div>
            </ErrorBoundary>
						
            
    </motion.div>
   
  )
}