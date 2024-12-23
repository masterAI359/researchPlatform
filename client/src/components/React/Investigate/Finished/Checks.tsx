import ChecksButton from "../../Buttons/ChecksButton"

const truthiness: boolean[] = [true, false]


//TODO: Control the animation play here at the Checks top level

export default function Checks({ setterFunction, answer }: any) {

    return (
        <div
            className="xs:w-full flex items-center justify-between">
            <ChecksButton
                index={0}
                buttonValue={truthiness[0]}
                setterFunction={setterFunction}
                answer={answer}
            />
            <ChecksButton
                index={1}
                buttonValue={truthiness[1]}
                setterFunction={setterFunction}
                answer={answer}
            />

        </div>
    )
}