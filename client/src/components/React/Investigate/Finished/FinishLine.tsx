import NewKnowledge from "./NewKnowledge"
import FinishLineButtons from "../../Buttons/ButtonWrappers/FinishLineButtons"

export default function FinishLine() {


    return (
        <article
            className="relative flex flex-col items-center mx-auto xs:w-full 
            xs:min-h-96 xs:px-6 xs:py-20 bg-gradientdown rounded-4xl ">
            <NewKnowledge />
            <FinishLineButtons />
        </article>
    )
}