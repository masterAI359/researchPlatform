import { Link } from 'react-router-dom';

export default function StatsFallback() {
    return (
        <div className="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-t from-blue-500 to-blue-900 rounded-3xl text-center space-y-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-zinc-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
            >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <path d="M12 12v-7a9 9 0 0 1 7 7h-7" />
                <path d="M12 12h9a9 9 0 0 1-9 9v-9" />
                <line x1="3" y1="3" x2="21" y2="21" />
            </svg>

            <h3 className="text-2xl font-semibold text-white">
                No investigations yet
            </h3>

            <p className="text-zinc-300 max-w-sm">
                Once you run an investigation, you'll see how your opinions changed, stayed the same, or needed more info—right here.
            </p>

            <Link
                to="/investigate"
                className="inline-block px-5 py-2 bg-white text-blue-700 rounded-full font-medium hover:bg-zinc-100 transition"
            >
                Start Investigating
            </Link>
        </div>
    )
};
