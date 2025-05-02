import { searchBlueSky } from "@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../Loaders/Loader";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { AppDispatch } from "@/ReduxToolKit/store";
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary";
import Posts from "./Posts";

const variants = {
    hidden: {
        opacity: 0,
        scale: 0.9
    },
    open: {
        opacity: 1,
        scale: 1
    }
}

export default function BlueSkyPosts ({ context }) {
    const posts = useSelector((state: RootState) => state.bluesky.posts);
    const status = useSelector((state: RootState) => state.bluesky.status);
    const [postQuery, setPostQuery] = useState<string>(null);
    const encodedQuery = encodeURIComponent(postQuery);
    const dispatch = useDispatch<AppDispatch>();
    const queried = new CustomEvent('newSearch');

    const retrieveInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setPostQuery(target)
    }

    const submitForPosts = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.dispatchEvent(queried);
        if(encodedQuery) {
          dispatch(searchBlueSky(encodedQuery));
        } else {
            window.alert('You need to type a query to search!');
        }
    }

    return (
      <motion.div 
      key="BlueSkyModal"
      variants={variants}
      initial='hidden'
      animate='open'
      exit='hidden'
      transition={{ type: "spring", stiffness: 600, damping: 25, duration: 0.05 }}
      className="lg:p-8 w-full"
      >
        <div  className='p-4 md:px-8 w-full py-12 mx-auto md:px-12 lg:px-0 xl:px-0  2xl:max-w-7xl'>
        <div className="bg-gradientup mx-auto overflow-y-hidden flex flex-col shrink-0 grow rounded-3xl w-full h-auto xl:max-w-5xl 2xl:min-w-7xl 2xl:max-w-7xl">
        <div className="block box-border min-w-full max-w-full mx-auto xs:px-0 md:px-2 2xl:h-full no-scrollbar">
        
        <div
          className="w-full justify-end py-1.5 pr-1 lg:py-6">
          <div
            className="w-full h-fit lg:px-12 flex justify-end">
            <div
              className="w-fit">
              <div
                className="relative xs:p-1 mx-auto flex w-fit items-center">
                <form
                  className="bg-white/10 text-white w-full h-fit
                 border-none md:h-10 md:p-0 2xl:px-1 rounded-full relative
                 transition-colors xs:text-sm md:text-lg flex items-center prose"
                >
                  <input
                    onChange={(e) => retrieveInput(e)}
                    autoComplete="off"
                    type="text"
                    name="q"
                    className="bg-transparent text-white max-w-44 lg:w-full h-fit 
                 border-none h-12 xs:p-3  md:p-2 rounded-full relative focus:ring-0
                 transition-colors text-base md:text-lg font-light flex items-center placeholder-zinc-400"
                    placeholder="search BlueSky" />
                  <button 
                  onClick={(e) => submitForPosts(e)}
                  type="submit"
                    className="relative"
                  >
                    {
                      status === 'pending' ? <Loader />
                        : <svg
                          className="text-white h-4 w-4 relative
                         bottom-0 right-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966"
                          xmlSpace="preserve">
                          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
             s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
             c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
             s-17-7.626-17-17S14.61,6,23.984,6z">
                          </path>
                        </svg>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ErrorBoundary fallback={'Error occured'}>
      <AnimatePresence>
        <Posts context={context} posts={posts} />
      </AnimatePresence>
      </ErrorBoundary>
        </div>
        </div>
       
        

      </motion.div>
    )
    
}








