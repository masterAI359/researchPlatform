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
    title: string,
    image: string,

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
    factual_reporting?: string | null,
    bias?: string | null,
    country?: string | null
  }

  interface Calculations {
    change: number | null,
    valid: number | null,
    neutral: number | null,
    needMore: number | null
  }

  interface PostsProps {
    posts: any[] | null,
    context: string
  }




  interface SupabaseUser {
    id: string;
    aud: string;
    role: string;
    email: string;
    created_at: string;
    confirmed_at: string | null;
    last_sign_in_at: string | null;
    app_metadata: {
      provider: string;
      providers: string[];
    };
    user_metadata: Record<string, any>;
    identities: Array<{
      id: string;
      user_id: string;
      identity_data: {
        email: string;
        sub: string;
      };
      provider: string;
      last_sign_in_at: string | null;
      created_at: string;
      updated_at: string;
    }>;
    phone: string;
    email_confirmed_at: string | null;
    is_anonymous: boolean;
  }

  interface ResetPW {
    message: string,
    data: SupabaseUser | null
  }

  interface Investigation {
    idea: string;
    premises: string | null;
    initial_perspective: string | null;
    biases: string | null;
    ending_perspective: string | null;
    new_concepts: any;
    changed_opinion: any;
    takeaway: string | null;
    had_merit: boolean | null;
    user_id: string;
    sources: string[];
    wikipedia_extracts: any;
  }

  interface SignOutResponse {
    loggedOut: boolean,
    data: any
  }
}


export { ArticleType, OptionsTypes, SelectedArticle, Perspectives, State, PremiseProps, Help, SavedArticle, Calculations, PostsProps, SupabaseUser, ResetPW, Investigation };
