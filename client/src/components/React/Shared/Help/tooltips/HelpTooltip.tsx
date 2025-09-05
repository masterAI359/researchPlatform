export default function HelpTooltip() {

    return (
        <div
            className="absolute rounded-md h-fit xl:w-16 md:w-14 mx-auto z-30 opacity-0
            md:right-0 md:bottom-7 lg:bottom-9 lg:-right-9 xl:bottom-9 xl:-right-10 2xl:bottom-9 2xl:-right-11
            bg-white md:group-hover:opacity-100
            transition-opacity duration-200 delay-300 ease-in-out text-black text-center"
        >
            <h1 className="text-xs xl:text-sm tracking-tight w-full">
                Click for help
            </h1>

            <div
                className="absolute -bottom-1 left-2 w-0 h-0
     border-l-4 border-l-transparent
     border-r-4 border-r-transparent
     border-t-4 border-t-white"
            />
        </div>
    )
}


