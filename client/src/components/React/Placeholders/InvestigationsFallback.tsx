import { Link } from 'react-router-dom';

export default function InvestigationsFallback() {
    return (
        <div className="flex flex-col md:w-128 mt-24 mx-auto items-center justify-center h-full p-8 bg-gradientdown rounded-3xl text-center space-y-4">
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
                Dive into the details of an online debate or a burning question you have, and save your research to build a timeline of how your research evolves
            </p>

            <Link
                to="/investigate"
                className="inline-block px-5 py-2 bg-ebony/80 text-white rounded-full font-medium hover:bg-ebony/60 transition-all duration-300 ease-in-out"
            >
                Start Investigating
            </Link>
        </div>
    )
};
