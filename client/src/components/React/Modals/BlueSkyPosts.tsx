import { searchBlueSky } from "@/ReduxToolKit/Reducers/Investigate/BlueSkySlice";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../Loaders/Loader";
import { useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { AppDispatch } from "@/ReduxToolKit/store";
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary";
import { resetBlueSkyState } from "@/ReduxToolKit/Reducers/Investigate/BlueSkySlice";

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

export default function BlueSkyPosts () {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { bluesky } = investigateState;
    const { status, posts } = bluesky;
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
      className="bg-gradientup my-20 overflow-y-hidden flex flex-col grow rounded-3xl w-full h-auto xl:max-w-5xl 2xl:max-w-7xl"
      >
         <div className="block box-border min-w-full max-w-full mx-auto xs:px-0 md:px-2 2xl:h-full no-scrollbar">
        
              <div
                className="w-full justify-end py-6">
                <div
                  className="w-full h-fit px-12 flex justify-end">
                     <div className="w-fit flex">
                </div>
                  <div
                    className="w-fullr">
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
                          className="bg-transparent text-white w-full h-fit 
                       border-none h-12 xs:p-3  md:p-2 rounded-full relative focus:ring-0
                       transition-colors text-base md:text-lg font-light flex items-center placeholder-slate-200"
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
            <ErrorBoundary >
            <AnimatePresence>
            {posts !== null &&  <Posts posts ={posts} />}
            </AnimatePresence>
            </ErrorBoundary>

      </motion.div>
    )
    
}




function Posts ({ posts }) {
    const [firstHalf, setFirstHalf] = useState<any>(null);
    const [secondHalf, setSecondHalf] = useState<any>(null);
    const [clicked, setClicked]= useState<boolean>(false);
    const [selected, setSelected] = useState<any>(null);
    const dispatch = useDispatch()

 useLayoutEffect(() => {

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
    console.log(firstHalf)
  }

  return () => window.removeEventListener('newSearch', handleNew);
     
  }, [posts, dispatch])

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
							<div className='border-b items-end border-white/10 py-12'>
								<div>
									<span className='text-white'>BlueSky feed</span>
									<h2 className='text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white'>
										What people are saying
										<span className='block text-zinc-400'>

										</span>
									</h2>
								</div>
								<p className='text-white mt-6'>
								</p>
							</div>
						</div>
            <ErrorBoundary>
            <div className='relative mx-auto lg:px-16 overflow-y-hidden'>
							<div className='items-center space-x-6 pb-12 lg:pb-0 lg:space-x-8 animate-scroller2 md:animate-none overflow-y-hidden relative lg:px-4 mx-auto grid grid-cols-2'>
									<div className={`relative flex-shrink-0 h-full items-center ${clicked ? '' : 'lg:animate-scroller2'} `}>
										{firstHalf !== null && firstHalf.map((post: any) => (
                      <BSPost post={post} setClicked={setClicked}/>
										))}
									</div>
									<div className={`relative flex-shrink-0 h-full items-center ${clicked ? 'animate-none' : 'lg:animate-scroller'} `}>
										{secondHalf !== null && secondHalf.map((post: any) => (
										<BSPost post={post} setClicked={setClicked}/>
										))}
									</div>
							</div>
						</div>
            </ErrorBoundary>
						
            
    </motion.div>
   
  )
}



function BSPost ({ post, setClicked }) {

  return (
    <div
    onClick={() => setClicked(prev => !prev)}
    key={post}
    className='relative rounded-3xl shadow-inset lg:opacity-90 my-8 lg:hover:opacity-100 p-4 bg-white/5 lg:p-8 ring-1 ring-white/5'
  >
    <a href='#'>
      <figcaption className='relative flex flex-row items-center gap-4 pb-6 border-b border-white/10'>
        <div className='overflow-hidden shrink-0'>
          <img
            src={
              post.author.avatar 
              
            }
            className='object-cover rounded-full h-16 w-16 shrink-0'
          />
        </div>
        <div className="flex flex-col items-center h-full">
          <div className="text-base font-light leading-6 text-white w-full h-auto">
            {post.author.displayName}
          </div>
          <div className='text-xs font-light leading-6 text-white w-full h-auto'>
            <em>
            @{post.author.handle}
            </em>
          </div>
          
        </div>
      </figcaption>
      <figure>
        <div className='h-full group mt-2 pt-2'>
          <blockquote className='relative'>
            <p className='text-sm text-white'>
              {post.record.text}
            </p>
          </blockquote>
        </div>
      </figure>
    </a>
  </div>
  )
}