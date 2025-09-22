export type AppError =
    | { kind: "network", message?: string }
    | { kind: "parse"; detail?: string }
    | { kind: "unknown"; message?: string };

export function normalizeError(err: unknown): AppError {
    if (err instanceof TypeError) {
        const msg = String(err.message || "");

        if (!navigator.onLine || /Failed to fetch|NetworkError/i.test(msg)) {
            return { kind: "network", message: 'No internet connection' };
        }
        if (/reading|undefined|not an object|property/i.test(msg)) {
            return { kind: "parse", detail: msg };
        }
        return { kind: "unknown", message: msg };
    }
    if (err instanceof ReferenceError) {
        return { kind: "parse", detail: String(err.message || "") };
    }
    return { kind: "unknown", message: String((err as any)?.message || "") };
}
