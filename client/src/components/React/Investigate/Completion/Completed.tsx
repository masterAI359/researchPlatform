import Lottie from "lottie-react"
import blueCheck from '../../../../lotties/blueCheck.json'


export default function Completed() {

    return (
        <article className="2xl:min-w-[60rem] h-full mx-auto flex flex-col items-center md:gap-y-0">
            <header className="h-fit w-full flex justify-center">
                <h1 className="md:text-4xl text-white font-light tracking-tight">
                    All Done
                </h1>
            </header>
            <main className="w-full h-full flex items-center justify-center">
                <div className="w-1/3 h-fit">
                    <Lottie animationData={blueCheck} loop={true} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} />
                </div>
            </main>
        </article>
    )
}