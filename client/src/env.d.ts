/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />



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

  interface ArticleType {
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

  interface SelectedArticle {
    url: string,
    source: string,
    date: string,
    logo: string,
    title: string
  }


  interface Help {
    heading: string,
    explanation: string

  }

  interface SavedArticle {
    title: string,
    provider: string,
    authors: string[],
    url: string,
    image_url: string,
    date: string,
    fallbackDate: string | null,
    summary: any,
    text: string,
    id: string,
  }

}

export { ArticleType, OptionsTypes, SelectedArticle, Perspectives, State, PremiseProps, Help, SavedArticle };
