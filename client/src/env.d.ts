/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import SelectArticles from "./components/React/ArticleComponents/SelectArticles";


declare global {
  interface ImportMetaEnv {
    readonly PUBLIC_SERVER_PORT: string;
    // Add other public environment variables here as needed
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  interface State {
    statement: string,
    status: string,
    identifier: string,
    biases: string,
    premise: string,
  }

  interface PremiseProps {
    biases: string,
    statement: string,
    identifier: string,
    dispatch: any,
    status: string
  }

  interface Image {
    img: string,
    width: number,
    height: number
  }

  interface Perspectives {
    perspective: string
  }

  interface Articles {
    datePublished: string,
    description: string,
    image: Image
    keywords: string[]
    name: string,
    provider: string,
    url: string,
    logo: string
  }

  interface OptionsTypes {
    method: string,
    headers: HeadersInit,
  }

  interface ForSummaryData {
    url: string,
    source: string,
    date: string,
    logo: string
  }

  interface SelectedArticles {
    url: string,
    source: string,
    date: string,
    logo: string,
    title: string
  }

  interface WindowProps {
    currentStep: number,
    setCurrentStep: Function
    setStartSearch: Function,
    query: string,
    setIsSubmitted: Function,
    setQuery: Function,
    isLoading: boolean,
    setCanProceed: Function,
    notifyRequired: boolean,
    setNotifyRequired: Function,
    setGettingHelp: Function
  }
  interface Help {
    heading: string,
    explanation: string
  }

}

export { Articles, OptionsTypes, SelectedArticles, WindowProps, Perspectives, State, PremiseProps, Help };
