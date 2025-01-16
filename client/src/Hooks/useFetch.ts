import { useState } from "react";
import { loading } from "@/ReduxToolKit/Reducers/UserPOV";
import { searchResults, resetResults, startSearch } from "@/ReduxToolKit/Reducers/SearchResults";
import { loadContent, articleData, isReading, resetData, rejected } from "@/ReduxToolKit/Reducers/Reading";
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
    const [loadingSummaries, setLoadingSummaries] = useState<boolean>(false)
    const [readyToSelect, setReadyToSelect] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>(null)
    const dispatch = useDispatch<AppDispatch>()


    const fetchArticles = async (query: string) => {
        dispatch(resetResults())
        dispatch(startSearch(true))
        dispatch(loading(true))
        try {

            const response = await fetch(`/search/articles?q=${query}`,
                options
            )
            if (!response.ok) {
                setErrorMessage(`${response.status}`)
                console.log(errorMessage)
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
        dispatch(resetData())
        dispatch(startSearch(false))
        dispatch(loadContent(true))
        try {
            const tldrResponse = await fetch(`/summarize?q=${articlesToSummarize}`,
                options
            )
            if (!tldrResponse.ok) {
                throw new Error('There was an issue with TLDR API')
            }
            const tldrJSON = await tldrResponse.json()
            console.log({ 'test 1': tldrJSON.retrieved, 'test2': tldrJSON })
            setLoadingSummaries(false)
            dispatch(articleData(tldrJSON.retrieved))
            dispatch(rejected(tldrJSON.rejected))
            dispatch(loadContent(false))
            dispatch((isReading(true)))

        } catch (err) {
            console.error('Error: ' + err)
        }
    }


    return { fetchArticles, fetchSummaries, loadingSummaries, readyToSelect, errorMessage }


}

