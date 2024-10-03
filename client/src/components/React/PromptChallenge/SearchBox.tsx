import { useState, useEffect, FormEvent } from "react"
import Loader from "../Loaders/Loader";




interface OptionsTypes {
  method: string,
  headers: HeadersInit,
}

export default function SearchBox({ isLoading, setIsSubmitted, setQuery }) {


  const options: OptionsTypes = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }



  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {

    setTimeout(() => {

      if (e.target.value !== '') {
        setQuery(e.target.value)
      }

    }, 2000)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
  }



  return (
    <div className="block box-border w-full mt-24 2xl:h-full md:max-h-11/12">

      <div
        className="text-center w-full md:mx-auto">
        <h2
          className="text-3xl tracking-tight font-light lg:text-4xl text-white">
          Search for articles<span className="block text-zinc-400">what relevant information is available?</span>
        </h2>
        <div
          className="inline-flex flex-wrap items-center mt-8 w-full">
          <div
            className="2xl:w-5/6 w-full m-auto px-4">
            <div
              className="relative mt-14">
              <form
                action="post"
                onSubmit={handleSubmit}
              >
                <input
                  onChange={handleQuery}
                  autoComplete="off"
                  type="text"
                  name="q"
                  className="bg-black text-white w-full border-black h-12 shadow  p-4 rounded-full 
								 focus:border-white transition-colors"
                  placeholder="search" />
                <button type="submit"
                >
                  {
                    isLoading ? <Loader />
                      : <svg
                        className="text-white h-5 w-5 absolute top-3.5 right-3 fill-current"
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