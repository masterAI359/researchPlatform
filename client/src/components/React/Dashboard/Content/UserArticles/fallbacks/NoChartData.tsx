import { Link } from "react-router-dom"


export default function NoChartData() {

    return (
        <div className="w-fit h-fit flex items-center xl:justify-start justify-center py-16">
            <div className="w-fit flex flex-col items-center justify-start text-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-zinc-500 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v16l7-5l7 5V5z" />
                </svg>

                <h2 className="text-2xl text-white mb-2">
                    No saved articles yet
                </h2>

                <p className="text-zinc-400 mb-6 font-light max-w-sm">
                    You haven't saved any articles. When you do, we can give you a snapshot of the biases and journalistic integrity of your choices of information.
                </p>

                <Link
                    to="/investigate"
                    className="inline-flex items-center space-x-2 px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-full text-white transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                    <span>Start Investigating</span>
                </Link>
            </div>
        </div>
    )
}