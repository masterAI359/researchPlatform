import type { LoaderFunctionArgs } from "react-router-dom";
import type { CurrentUser } from "@/env";
import { User } from "@supabase/supabase-js";
import type { SavedArticleRes } from "@/env";

export interface RootPayload {
    user: User | null,
    articles: SavedArticleRes | null,
    investigations: Investigation[] | null
};

export async function rootLoader({ request }: LoaderFunctionArgs): Promise<RootPayload> {

    const res = await fetch("/getCurrentUser", {
        method: "POST",
        headers: { "Accept": "application/json" },
        credentials: "include",
    });
    if (res.status === 401) return {
        user: null,
        articles: null,
        investigations: null

    };
    if (!res.ok) throw new Response("Failed session check", { status: res.status });

    const payload: CurrentUser = await res.json();
    const user = payload?.user ?? null;
    const articles = payload?.data?.userArticles ?? null;
    const investigations = payload?.data?.userResearch ?? null;

    return { user, articles, investigations };

};
