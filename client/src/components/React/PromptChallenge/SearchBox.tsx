import { useState, useEffect, FormEvent } from "react"
import Loader from "../Loader";

interface Articles {
  obj: any
}

interface OptionsTypes {
  method: string,
  headers: HeadersInit,
}

type Query = string;
type SubmitType = boolean;

export default function SearchBox ({ dispatch, isLoading, setIsLoading }) {
const [query, setQuery] = useState<Query>()
const [isSubmitted, setIsSubmitted] = useState<SubmitType>(false)
const [articles, setArticles] = useState<Articles[]>([])
console.log(query)
console.log(articles)

const options: OptionsTypes =  {
  method: 'GET',
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  }
}
//Why is my isLoading state not updating here?
const fetchBingApi = async () => {
  try {
    setIsLoading(true)
    const response = await fetch(`/search/articles?q=${query}`,
      options
    )
    if(!response.ok) {
      throw new Error("There was a network response issue!")
    } 
    const jsonResponse = await response.json()
    setArticles(jsonResponse)
    console.log(jsonResponse) // Logging successful JSON Response from endpoint
    
  } catch(err) {

    console.log({"Fetch Failed": err})
  } finally {
    setIsLoading(false)
    console.log(isLoading)
  }
};

  useEffect(() => {
   
    if(isSubmitted) {
      fetchBingApi()  
    }

  }, [isSubmitted])

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
       // dispatch({type:"articles", payload: articles})
  }

  console.log(isSubmitted)
  console.log(isLoading)

    return (
   <section className="p-8">
  <div className="mx-auto 2xl:max-w-7xl py-24 items-center lg:py-24 relative w-full 
  bg-gradientup rounded-[3rem]">
    <div className="text-center max-w-xl md:mx-auto">
      <h2 className="text-3xl tracking-tight font-light lg:text-4xl text-white">
        Let's investigate <span className="block text-zinc-400">We never lose by learning</span>
      </h2>
      <p className="mt-5 text-white">
       Feel free to write your own search terms,
       or kick back and leverage the power of AI and use one of 
       our suggested queries, just for you
      </p>
      <div className="inline-flex flex-wrap items-center mt-8 w-full">
  <div className="max-w-[480px] w-full m-auto px-4">
    <div className="relative">
      <form
      action = "post"
      onSubmit={handleSubmit}
      >
      <input 
      onChange={handleQuery}
      type="text" 
      name="q" 
      className="bg-transparent text-white w-full border h-12 shadow p-4 rounded-full" 
      placeholder="search" />
      <button type="submit"
      >
        {
        isLoading ? <Loader />
         :<svg className="text-white h-5 w-5 absolute top-3.5 right-3 fill-current"
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
</section>
    )
}