import { useState, useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetBlueSkyState } from "@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice";
import { motion } from "framer-motion";
import { BSPost } from "./BSPost";
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary";
import { RootState } from "@/ReduxToolKit/store";

export default function Posts ({ posts, context }) {
    const [firstHalf, setFirstHalf] = useState<any>(null);
    const [secondHalf, setSecondHalf] = useState<any>(null);
    const [clicked, setClicked]= useState<boolean>(false);
    const selected = useSelector((state: RootState) => state.bluesky.selected);
    const dispatch = useDispatch();

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
     
            <ErrorBoundary>
            <div className='relative mx-auto px-4 lg:px-16 overflow-y-hidden'>
							<div style={{
                    animationPlayState: selected ? 'paused' : 'running'
                   }}  className='items-center space-x-6 pb-12 lg:pb-0 lg:space-x-8 animate-scroller2 md:animate-none relative lg:px-4 mx-auto grid grid-cols-1 lg:grid-cols-2'>
									 <div style={{
                    animationPlayState: selected ? 'paused' : 'running'
                   }} className={`relative flex-shrink-0 h-full items-center animate-scroller2`}>
										{firstHalf !== null && firstHalf.map((post: any) => (
                      <BSPost context={context} key={post.record.text} post={post} setClicked={setClicked}/>
										))}
									</div>
									<div style={{
                    animationPlayState: selected ? 'paused' : 'running'
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