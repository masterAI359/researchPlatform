import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetBlueSkyState } from "@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice";
import { motion } from "framer-motion";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import Scroller from "../../Containers/Scroller";
import { splitPosts } from "@/helpers/Presentation";
import { variants } from "@/motion/variants";


type FeedProps = {
  posts: any
};

export default function Feed({ posts }: FeedProps): React.ReactNode {
  const selected = useSelector((state: RootState) => state.bluesky.selected);
  const [firstHalf, setFirstHalf] = useState<any>(null);
  const [secondHalf, setSecondHalf] = useState<any>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleNew = () => {
      setFirstHalf(null);
      setSecondHalf(null);
      dispatch(resetBlueSkyState());
    };
    window.addEventListener('newSearch', handleNew);

    try {
      const stored = localStorage.getItem('bsPosts');

      if (stored) {
        splitPosts(stored, setFirstHalf, setSecondHalf);
      };

    } catch (error) {
      console.log(error);
    }
    return () => window.removeEventListener('newSearch', handleNew);

  }, [posts]);

  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate="open"
      exit="closed"
      transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}
      className='relative mx-auto px-4 lg:px-16 overflow-y-hidden'>
      <div

        style={{
          animationPlayState: selected ? 'paused' : 'running'
        }}
        className='items-center space-x-6 pb-12 lg:pb-0 lg:space-x-8 animate-scroller2 
          md:animate-none relative lg:px-4 mx-auto grid grid-cols-1 lg:grid-cols-2'>
        <div
          style={{
            animationPlayState: selected ? 'paused' : 'running'
          }}
          className={`relative flex-shrink-0 h-full items-center animate-scroller2`}>

          {firstHalf !== null &&
            <Scroller

              posts={firstHalf}
            />
          }
        </div>
        <div
          style={{
            animationPlayState: selected ? 'paused' : 'running'
          }}
          className={`relative flex-shrink-0 h-full items-center animate-scroller`}>

          {secondHalf !== null &&
            <Scroller
              posts={secondHalf}
            />
          }
        </div>
      </div>
    </motion.div>
  )
}