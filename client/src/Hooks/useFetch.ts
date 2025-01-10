import { Articles } from "@/env";
import { useState } from "react";
import { loading } from "@/ReduxToolKit/Reducers/UserPOV";
import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";


const options: OptionsTypes = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
}


export const useFetch = () => {
    const [fetchedArticles, setFetchedArticles] = useState<Articles[]>([])
    const [fetchedSummaries, setFetchedSummaries] = useState<object[]>([])
    const [loadingSummaries, setLoadingSummaries] = useState<boolean>(false)
    const [readyToSelect, setReadyToSelect] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>(null)
    const dispatch = useDispatch<AppDispatch>()



    const fetchArticles = async (query: string) => {
        dispatch(loading(true))
        setFetchedArticles([])
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
            setFetchedArticles(jsonResponse.data)

        } catch (err) {

            console.log({ "Fetch Failed": err })
        } finally {
            setReadyToSelect(true)
            dispatch(loading(false))
        }
    };

    const fetchSummaries = async (articlesToSummarize: any) => {
        setFetchedArticles([])
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
        } catch (err) {
            console.error('Error: ' + err)
        } finally {

        }
    }


    return { fetchedArticles, fetchedSummaries, fetchArticles, fetchSummaries, loadingSummaries, readyToSelect, errorMessage }


}

