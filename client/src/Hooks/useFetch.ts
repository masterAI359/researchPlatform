import { useState } from "react";
import { loading } from "@/ReduxToolKit/Reducers/UserPOV";
import { searchResults, resetResults } from "@/ReduxToolKit/Reducers/SearchResults";
import { loadContent, articleData } from "@/ReduxToolKit/Reducers/Reading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { AppDispatch } from "@/ReduxToolKit/store";


const options: OptionsTypes = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
}


export const useFetch = () => {
    const articles = useSelector((state: RootState) => state.search.articles)
    const summaries = useSelector((state: RootState) => state.read.summaries)
    const [fetchedSummaries, setFetchedSummaries] = useState<object[]>([])
    const [loadingSummaries, setLoadingSummaries] = useState<boolean>(false)
    const [readyToSelect, setReadyToSelect] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>(null)
    const dispatch = useDispatch<AppDispatch>()

    console.log(summaries)


    const fetchArticles = async (query: string) => {
        dispatch(loading(true))
        console.log(articles)
        dispatch(resetResults())
        setFetchedSummaries([])
        console.log(query)
        try {

            const response = await fetch(`/search/articles?q=${query}`,
                options
            )
            if (!response.ok) {
                setErrorMessage(`${response.status}`)
                throw new Error("There was a network response issue!")
            }
            const jsonResponse = await response.json()
            dispatch(searchResults(jsonResponse.data))


        } catch (err) {

            console.log({ "Fetch Failed": err })
        } finally {
            console.log(articles)
            setReadyToSelect(true)
            dispatch(loading(false))
        }
    };

    const fetchSummaries = async (articlesToSummarize: any) => {
        console.log("This API is being called")
        dispatch(loadContent(true))
        dispatch(resetResults())
        setLoadingSummaries(true)
        setReadyToSelect(false)
        try {
            const tldrResponse = await fetch(`/summarize?q=${articlesToSummarize}`,
                options
            )
            if (!tldrResponse.ok) {
                throw new Error('There was an issue with TLDR API')
            }
            const tlderJSON = await tldrResponse.json()
            setFetchedSummaries(tlderJSON)
            setLoadingSummaries(false)
            dispatch(articleData(tlderJSON))
        } catch (err) {
            console.error('Error: ' + err)
        } finally {
            dispatch(loadContent(false))
        }
    }


    return { fetchedSummaries, fetchArticles, fetchSummaries, loadingSummaries, readyToSelect, errorMessage }


}

