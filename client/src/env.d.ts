/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import { Session } from "@supabase/supabase-js";
import { Extracts } from "./ReduxToolKit/Reducers/Investigate/Review";
import { ReactEventHandler, ReactNode } from "react";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

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

  type Bias = | "Left"
    | "Left-Center"
    | "Center"
    | "Right-Center"
    | "Right"
    | "Conspiracy-Pseudoscience"
    | "Questionable"
    | "LeastBiased"
    | "Satire"
    | "Pro-Science"
    | null;

  interface BiasCounts {
    Left: number | null,
    Right: number | null,
    Center: number | null,
    Conspiracy: number | null,
    Questionable: number | null,
    Satire: number | null,
    Scientific: number | null,
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
    bias?: Bias,
    country?: string | null
  }

  interface SaveArticleButton {
    article: any,
    showNotification: boolean,
    setShowNotification: (showNotification: boolean) => void,
    open: boolean,
    reviewing?: boolean
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


  interface Tooltips {
    readingTooltip: boolean,
    selectingTooltip: boolean
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

  interface ScrapedArticle {
    article_abstract: string | null;
    article_authors: string[];
    article_html: string;
    article_image: string;
    article_pub_date: string;
    article_text: string;
    article_title: string;
    article_url: string;
    bias: string;
    cleanedAuthors: string[][];
    country: string;
    date: string;
    factual_reporting: string;
    logo: string;
    source: string;
    summary: {
      heading: string;
      text: string;
    }[];
  }

  interface SignOutResponse {
    loggedOut: boolean,
    data: any
  }

  interface TipTapProps {
    context: string | null,
    setterFunction: any
  }

  interface AuthStatus {
    pending: string,
    successful: string,
    failed: string
  }

  interface AuthNotificationProps {
    complete: boolean | null,
    setterFunction: any,
    status: AuthStatus,
    redirect?: Function,
  }



  interface SidebarItemData {
    title: string,
    step: number,
    data: string | null,
    titleTwo?: string,
    dataTwo?: string | null
  }

  interface LinkProps {
    article: ArticleType,
    index: number
  }

  interface SaveArticleResponse {
    success: boolean,
    message: string
  }

  interface WikiTerm {
    article_url?: string,
    data?: Extracts
  }

  interface LoadedArticle {
    handleArticleSelection: VoidFunction,
    handleImageLoad: ReactEventHandler<HTMLImageElement>,
    article: any
  }

  interface ChartFallbackProps {
    message: string
    actionText?: string
    direction?: string
    children?: ReactNode
  }

  interface SupabaseLoginResponse {
    sess: Session;
    userContent: UserContent;
  }

  interface UserContent {
    userArticles: SavedArticle[] | null;
    userResearch: Investigation[] | null;
  }

  interface LoginResponse {
    message: string,
    session: SupabaseLoginResponse | null
  }

  interface LoginFormProps {
    successfull: boolean | null,
    acceptedInput: boolean | null,
    setUserPassword: (userPassword: string) => void,
    setUserEmail: (userEmail: string) => void,
    validEmail: boolean | null,
    submitAuth: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
  }

  interface DashboardOption {
    name: string,
    actionCreator: ActionCreatorWithoutPayload,
    activeCondition?: boolean,
    children: ReactNode
  }

  interface HelpModal {
    info: Help[],
    handleExpand: Function,
    isOpen: boolean,
    activeTab: Help,
    setActiveTab: (activeTab: Help) => void,
  }

  type NotificationState = {
    articleExists: boolean,
    message: string | null,
    anonUser: boolean,
  }

  interface NotifySaved {
    setNotification: React.Dispatch<React.SetStateAction<NotificationState>>,
    showNotification: boolean,
    setShowNotification: (showNotification: boolean) => void,
    message: string | null
  }

  interface WikiTypes {
    gettingSelection: boolean,
    selectedText: string | null,
    status: string
  }

  interface ArticleSavedComponent {
    article: SavedArticle;
    handleArticleSelection: (article: SavedArticle) => () => void;
    deleteHandler: (article: SavedArticle) => Promise<void>;
  }

}


export {
  ArticleType, OptionsTypes, SelectedArticle, Perspectives, State, PremiseProps, Help, SavedArticle,
  Calculations, PostsProps, SupabaseUser, ResetPW, Investigation, ScrapedArticle, TipTapProps, AuthStatus, AuthNotificationProps,
  Tooltips, SidebarItemData, LinkProps, SaveArticleResponse, WikiTerm, Bias, BiasCounts, LoadedArticle, ChartFallbackProps,
  UserContent, LoginResponse, LoginFormProps, DashboardOption, HelpModal, NotificationState, NotifySaved, SaveArticleButton,
  WikiTypes, ArticleSavedComponent
};
