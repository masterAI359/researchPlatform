import { motion } from "framer-motion";
import { useEffect, useLayoutEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import ErrorBoundary from "../../../Shared/ErrorBoundaries/ErrorBoundary";
import { variants } from "@/motion/variants";
import Posts from "../Components/Posts";
import SearchBlueSky from "../Components/SearchBlueSky";
import BlueSkyHeader from "../Components/BlueSkyHeader";
import CloseBlueSky from "../Components/buttons/CloseBlueSky";
import { useNavigate } from "react-router-dom";
import { preselected } from "@/ReduxToolKit/Reducers/Investigate/UserPOV";
import { displayBlueSkySearch } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer";

interface BlueSkyProps {
  context: 'home' | 'investigate'
};

export default function BlueSkyPosts({ context }: BlueSkyProps) {
  const { posts } = useSelector((state: RootState) => state.bluesky, shallowEqual);
  const researchState = useSelector((state: RootState) => state.investigation);
  const navigate = useNavigate();
  const { idea } = researchState.pov;
  const shouldRedirect: boolean = context === 'home';
  const dispatch = useDispatch();


  useLayoutEffect(() => {
    if (posts) {
      const storeThese = { bsPosts: posts };
      localStorage.setItem('bsPosts', JSON.stringify(storeThese));
    };

  }, [posts]);

  useEffect(() => {
    if (!idea) return

    const timer = window.setTimeout(() => {
      if (idea && shouldRedirect) {
        navigate('/investigate');
      }
      dispatch(displayBlueSkySearch(false));

    }, 500);

    return () => clearTimeout(timer);

  }, [idea, shouldRedirect]);


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
        grow rounded-4xl w-full h-auto md:max-w-5xl 2xl:min-w-6xl 
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
              shouldRedirect={shouldRedirect}
            />
          </ErrorBoundary>
        </div>
      </div>
    </motion.div>
  )

}








