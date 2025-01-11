import Loader from "../../Loaders/Loader";
import { useFetch } from "@/Hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { getQuery, searching } from "@/ReduxToolKit/Reducers/UserPOV";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { useEffect } from "react";

//TODO: move the fetch for summaries into this component as well

export default function SearchBox({ }) {
  const { fetchArticles, fetchSummaries } = useFetch()
  const query = useSelector((state: RootState) => state.pov.query)
  const searched = useSelector((state: RootState) => state.pov.searching)
  const loading = useSelector((state: RootState) => state.pov.loading)
  const dispatch = useDispatch<AppDispatch>()


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(searching(true))
  }

  useEffect(() => {

    if (searched) {
      fetchArticles(query)
      dispatch(searching(false))
    }

  }, [searched])

  return (
    <div className="block box-border min-w-full max-w-full mx-auto xs:px-0 md:px-2 2xl:h-full no-scrollbar">

      <div
        className="text-center w-full md:mx-auto">
        <div className="w-full flex justify-center">
          <h2
            className="xs:text-lg md:text-xl lg:text-2xl tracking-tight font-light  text-white">
            Search for articles
          </h2>
        </div>

        <div
          className="inline-flex flex-wrap items-center w-full">
          <div
            className="w-full">
            <div
              className="relative mt-4 xs:p-1">
              <form
                onSubmit={handleSubmit}
              >
                <input
                  onChange={(e) => dispatch(getQuery(e.target.value))}
                  autoComplete="off"
                  type="text"
                  name="q"
                  className="bg-white/10 text-white w-full h-fit 
                  border-none focus:ring-white h-12 xs:p-3  md:p-4 rounded-full 
		              transition-colors xs:text-sm md:text-lg flex items-center"
                  placeholder="search" />
                <button type="submit"
                >
                  {
                    loading ? <Loader />
                      : <svg
                        className="text-white xs:h-5 xs:w-5 md:h-6 md:w-6 absolute 
                        xs:top-4 xs:right-4 md:top-5 md:right-5 fill-current"
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




  )
}