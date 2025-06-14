import { searchBlueSky } from "@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice";
import { motion } from "framer-motion";
import Loader from "../Loaders/Loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { AppDispatch } from "@/ReduxToolKit/store";
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary";
import { displayBlueSkySearch } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer";
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

export default function BlueSkyPosts({ context }) {
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

  const submitForPosts = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.dispatchEvent(queried);
    if (encodedQuery) {
      dispatch(searchBlueSky(encodedQuery));
    } else {
      window.alert('You need to type a query to search!');
    }
  }


  useEffect(() => {
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
      transition={{ type: "spring", stiffness: 600, damping: 25, duration: 0.05 }}
      className="lg:p-8 w-full relative"
    >
      <div className='mt-12 md:mt-6 p-4 w-full py-6 mx-auto md:px-12 lg:px-0 xl:px-0  2xl:max-w-7xl h-full'>
        <div className="bg-gradientup mx-auto flex flex-col p-6 lg:p-0 shrink-0 grow rounded-4xl w-full h-auto md:max-w-xl lg:max-w-5xl 2xl:min-w-6xl 2xl:max-w-7xl relative overflow-hidden">
          {context === 'investigate' && <div onClick={() => dispatch(displayBlueSkySearch(false))} className="absolute top-1.5 right-1.5 z-50 max-h-8 max-w-8 p-1 cursor-pointer rounded-full hover:bg-white/20 transition-all duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
              className="icon icon-tabler text-white icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>

          </div>}
          <div
            className='lg:px-20 lg:pb-0 relative'>
            <div className='border-b px-2 md:px-0 items-end border-white/10 py-4 lg:py-16'>
              <div className="px-2">

                <div className='flex items-center gap-x-2 w-fit'>
                  <div className="lg:w-7 lg:h-7 h-6 w-6 mx-auto text-white/90">
                    <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" /></svg>
                  </div>
                  <div className="text-zinc-300 text-xs">BlueSky feed</div>
                </div>
              </div>
              <p className='text-white mt-6'>
              </p>
              <div
                className="relative flex w-fit items-center px-1">
                <form
                  className="bg-white/10 text-white w-full h-fit
                 border-none md:h-10 md:p-0 2xl:px-0 rounded-full relative
                 transition-colors xs:text-sm md:text-lg flex items-center prose"
                >
                  <input
                    onChange={(e) => retrieveInput(e)}
                    autoComplete="off"
                    type="text"
                    name="q"
                    className="bg-transparent text-white max-w-44 lg:max-w-52 lg:w-full h-fit 
                 border-none md:h-12 p-2 rounded-full relative focus:ring-0
                 transition-colors text-base md:text-lg font-light flex items-center placeholder-slate-300"
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
          <ErrorBoundary fallback={'Error occured'}>
            <Posts key={'postsfetched'} context={context} posts={posts} />
          </ErrorBoundary>
        </div>
      </div>



    </motion.div>
  )

}








