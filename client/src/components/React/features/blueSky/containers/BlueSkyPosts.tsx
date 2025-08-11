import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import ErrorBoundary from "../../../Shared/ErrorBoundaries/ErrorBoundary";
import { variants } from "@/motion/variants";
import Posts from "../Components/Posts";
import SearchBlueSky from "../Components/SearchBlueSky";
import BlueSkyHeader from "../Components/BlueSkyHeader";
import CloseBlueSky from "../Components/buttons/CloseBlueSky";

export default function BlueSkyPosts({ context }) {
  const posts = useSelector((state: RootState) => state.bluesky.posts);
  const status = useSelector((state: RootState) => state.bluesky.status);

  useLayoutEffect(() => {
    if (posts) {
      const storeThese = { bsPosts: posts };
      localStorage.setItem('bsPosts', JSON.stringify(storeThese));
    };

  }, [status, posts]);


  return (
    <motion.div
      key="BlueSkyModal"
      variants={variants}
      initial='hidden'
      animate='open'
      exit='hidden'
      transition={{ type: "tween", duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
      className="lg:p-8 w-full relative"
    >
      <div className='mt-12 md:mt-6 p-4 w-full py-6 mx-auto md:px-12 lg:px-0 xl:px-6  2xl:max-w-7xl h-full'
      >
        <div className="bg-gradientup mx-auto flex flex-col p-6 lg:p-0 shrink-0 
        grow rounded-4xl w-full h-auto md:max-w-xl lg:max-w-5xl 2xl:min-w-6xl 
        2xl:max-w-7xl relative overflow-hidden"
        >
          {context === 'investigate' &&
            <CloseBlueSky />
          }
          <BlueSkyHeader
          >
            <SearchBlueSky
            />
          </BlueSkyHeader>

          <ErrorBoundary fallback={'Error occured'}
          >
            <Posts
              key={'postsfetched'}
              context={context}
              posts={posts}
            />
          </ErrorBoundary>
        </div>
      </div>
    </motion.div>
  )

}








