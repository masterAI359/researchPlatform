export interface WikiDisambigCandidate {
    pageid: number;
    title: string;
    extract: string;
    thumbnail: string | null;
    url: string;
    lastUpdated: string | null; // ISO 8601
}

export interface WikiDisambigResponse {
    kind: "disambiguation";
    title: string;
    pageUrl: string;
    candidates: WikiDisambigCandidate[];
    lastUpdated: string; // ISO 8601 (the disambig page itself, from REST summary)
}

export interface WikiSummaryResponse {
    kind: "summary";
    title: string;
    extract: string;
    description: string;
    thumbnail: string | null;
    pageUrl: string;
    lastUpdated: string; // ISO 8601 (from REST summary)
}

export interface WikiErrorResponse {
    kind: "error";
    message: string;
}

export type WikiResponse =
    | WikiSummaryResponse
    | WikiDisambigResponse
    | WikiErrorResponse;

//---- Action API types -----

interface ActionApiThumbnail {
    source: string;
    width?: number;
    height?: number;
}

interface ActionApiRevision {
    timestamp: string;
}

interface ActionApiPage {
    pageid: number;
    ns: number;
    title: string;
    index?: number;
    missing?: boolean;
    extract?: string;
    thumbnail?: ActionApiThumbnail;
    revisions?: ActionApiRevision[]; // only if you add &prop=revisions
}

interface ActionApiQueryResponse {
    query?: {
        pages?: Record<string, ActionApiPage>;
    };
}


async function fetchDisambigCandidates(title: string): Promise<WikiDisambigCandidate[]> {
    const base = 'https://en.wikipedia.org/w/api.php';
    const params = new URLSearchParams({
        action: 'query',
        format: 'json',
        redirects: '1',
        titles: title,
        generator: 'links',
        gplnamespace: '0',
        gpllimit: '50',
        prop: 'extracts|pageimages',
        exintro: '1',
        explaintext: '1',
        exchars: '200',
        exlimit: 'max',
        piprop: 'thumbnail',
        pithumbsize: '160',
        pilimit: 'max',
        origin: '*'
    });

    const res = await fetch(`${base}?${params.toString()}`, {
        headers: { 'Api-User-Agent': 'Elenchus/1.0 (mailto:you@example.com)' }
    });
    if (!res.ok) throw new Error(`Action API failed: ${res.status}`);

    const data: ActionApiQueryResponse = await res.json();

    const pages: ActionApiPage[] = Object.values(data?.query?.pages || {});
    pages.sort((a, b) => (a.index ?? 0) - (b.index ?? 0));

    return pages
        .filter((p) => !p.missing)
        .map<WikiDisambigCandidate>(p => ({
            pageid: p.pageid,
            title: p.title,
            extract: p.extract ?? '',
            thumbnail: p.thumbnail?.source ?? null,
            url: `https://en.wikipedia.org/?curid=${p.pageid}`,
            lastUpdated: null
        }));
}

export async function extractFromWiki(term: string): Promise<WikiResponse> {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`;

    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Api-User-Agent': 'Elenchus/1.0 (mailto:you@example.com)'
            }
        });
        if (!res.ok) throw new Error(`REST summary failed: ${res.status}`);

        const data = await res.json();

        if (data.type === 'disambiguation') {
            let candidates: WikiDisambigCandidate[] = [];
            try {
                candidates = await fetchDisambigCandidates(term);
            } catch {

            }

            return {
                kind: 'disambiguation' as const,
                title: data.title,
                pageUrl: data?.content_urls?.desktop?.page ?? `https://en.wikipedia.org/wiki/${encodeURIComponent(term)}`,
                candidates,
                lastUpdated: data?.timestamp ?? ''
            };
        }

        return {
            kind: 'summary' as const,
            title: data.title,
            extract: data.extract ?? '',
            description: data.description ?? '',
            thumbnail: data.thumbnail?.source ?? null,
            pageUrl: data.content_urls?.desktop?.page ?? null,
            lastUpdated: data?.timestamp
        };

    } catch (err) {
        console.error(err);
        return { kind: 'error' as const, message: (err as Error).message };
    }
};
