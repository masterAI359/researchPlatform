
interface ErrMessageInterface {
    message: string
}

export default function ErrMessage ({ message}: ErrMessageInterface) {


    return (
         <div className="w-full h-full mt-16 md:mt-24 flex flex-col justify-center items-center mx-auto relative">
            <h1 className="w-fit h-fit text-zinc-400 text-center font-light tracking-tight 2xl:text-3xl">
                {message}
            </h1>
        </div>
    )
}