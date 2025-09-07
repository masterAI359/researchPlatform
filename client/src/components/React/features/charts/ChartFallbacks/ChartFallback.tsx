import { Link } from "react-router-dom";
import { ChartFallbackProps } from "@/env";

export default function ChartFallback({
    message,
    actionText,
    direction,
    children
}: ChartFallbackProps) {

    return (

        <div className="flex flex-col items-center justify-center h-full py-12 px-6 bg-zinc-900 rounded-2xl">
            {children}
            <p className="text-zinc-400 text-center mb-6 max-w-xs">{message}</p>
            <Link
                to={direction}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-all duration-300 ease-in-out"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                <span>{actionText}</span>
            </Link>
        </div>
    )
};