import { AppError } from "@/helpers/errors/normalizeError"

interface ErrMessageInterface {
    message: AppError,
    onRetry: Function
}

export default function ErrMessage({ message, onRetry }: ErrMessageInterface) {



    return (
        <div className="w-full h-full mt-16 md:mt-24 flex flex-col gap-y-6 justify-center items-center mx-auto relative">
            <h1 className="w-fit h-fit text-zinc-400 text-center font-light tracking-tight text-base 2xl:text-3xl">
                {message.kind === 'network' && 'No network connection'
                }
                {message.kind === 'parse' && 'The results format looks different than we expected :/'}
                {message.kind === 'unknown' && 'Unknown error occured, please try again.'}
            </h1>

            <div className="w-full h-auto flex items-center justify-center">
                <button
                    onClick={() => onRetry()}
                    className="w-36 h-8 text-black bg-white rounded-4xl flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in-out"
                    type="button"
                >
                    Retry
                </button>
            </div>
        </div>
    )
};