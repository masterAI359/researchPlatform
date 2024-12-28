import NewKnowledge from "./NewKnowledge"
import FinishLineButtons from "../../Buttons/ButtonWrappers/FinishLineButtons"

export default function FinishLine() {


    return (
        <main className="w-full h-full flex flex-col items-center xs:px-4">
            <article
                className="relative flex flex-col items-center mx-auto xs:w-full 
            xs:min-h-96 xs:px-6 xs:py-20 md:py-28 lg:py-36 md:max-w-2xl lg:max-w-3xl 2xl:max-w-5xl  bg-gradientdown rounded-4xl ">
                <NewKnowledge />
                <FinishLineButtons />
            </article>
        </main>

    )
}