


export default function FinishLineButtons() {


    return (
        <section className="w-full flex items-center justify-center xs:px-6  xs:gap-x-6 absolute xs:bottom-2 2xl:bottom-6">

            <button className="rounded-md bg-white/10 xs:w-24 xs:p-2 2xl:w-52 2xl:text-xl 2xl:p-3 xs:text-sm hover:scale-110 hover:bg-white/20 transition-all duration-200 ease-in-out text-white font-light">
                Previous
            </button>

            <button className="rounded-md bg-white/10 xs:w-24 xs:p-2 2xl:w-52 xs:text-sm 2xl:text-xl 2xl:p-3 hover:scale-110 hover:bg-white/20 transition-all duration-200 ease-in-out text-white font-light">
                Next
            </button>

        </section>
    )
}