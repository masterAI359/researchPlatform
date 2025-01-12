import { useState } from "react";
import { loading } from "@/ReduxToolKit/Reducers/UserPOV";
import { searchResults, resetResults, startSearch } from "@/ReduxToolKit/Reducers/SearchResults";
import { loadContent, articleData, isReading } from "@/ReduxToolKit/Reducers/Reading";
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



    const fetchArticles = async (query: string) => {
        dispatch(resetResults())
        dispatch(startSearch(true))
        dispatch(loading(true))
        setFetchedSummaries([])
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
        dispatch(resetResults())
        dispatch(startSearch(false))
        dispatch(loadContent(true))
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
            dispatch(loadContent(false))
            dispatch((isReading(true)))

        } catch (err) {
            console.error('Error: ' + err)
        }
    }


    return { fetchedSummaries, fetchArticles, fetchSummaries, loadingSummaries, readyToSelect, errorMessage }


}

