import { useEffect, useState } from "react";
import AsyncFailure from "../fallbacks/AsyncFailure";
import type { AppError } from "@/helpers/errors/normalizeError";

export default function AsyncListener(): JSX.Element | null {
    const [error, setError] = useState<AppError | null>(null);

    return
}