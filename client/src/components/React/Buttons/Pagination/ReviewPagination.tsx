import { useEffect } from "react"



export default function ReviewPagination({ setStep, step }) {


    const handleBackStep = () => {


        if (step > 1) {
            setStep(step - 1)
        } else {
            ;
        }
    }

    const handleForwardStep = () => {

        if (step < 3) {
            setStep(step + 1)
        }
    }

    useEffect(() => { }, [step, setStep])

    return (
        <section className="w-full flex items-center mx-auto justify-center gap-x-2 md:gap-x-6">

            <button
                type="button"
                onClick={handleBackStep}
                className="rounded-xl md:rounded-2xl group bg-white w-12 h-10 p-2 2xl:h-12 2xl:w-16
                 2xl:p-3 xs:text-sm hover:bg-white/20 transition-all duration-200
                ease-in-out text-white font-light">
                <svg className="p-1 text-black group-hover:text-white transition-all duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                    <path d="M 33.960938 2.9804688 A 2.0002 2.0002 0 0 0 32.585938 3.5859375 L 13.585938 22.585938 A 2.0002 2.0002 0 0 0 13.585938 25.414062 L 32.585938 44.414062 A 2.0002 2.0002 0 1 0 35.414062 41.585938 L 17.828125 24 L 35.414062 6.4140625 A 2.0002 2.0002 0 0 0 33.960938 2.9804688 z" fill="currentColor" />
                </svg>

            </button>

            <button
                type="button"
                onClick={handleForwardStep}
                className="rounded-xl md:rounded-2xl group bg-white p-2 w-12 h-10 2xl:h-12 2xl:w-16 xs:text-sm 2xl:p-3 hover:bg-white/20 transition-all duration-200 ease-in-out text-white font-light">
                <svg className="text-black group-hover:text-white transition-all duration-200 ease-in-out p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                    <path d="M17.586,44.414C17.977,44.805,18.488,45,19,45s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828l-19-19 c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L35.172,24L17.586,41.586C16.805,42.367,16.805,43.633,17.586,44.414z" fill="currentColor" />
                </svg>

            </button>

        </section>
    )
}