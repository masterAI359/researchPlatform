import ChecksButton from "../../Buttons/SelectionButtons/ChecksButton"

const answerButtons: boolean[] = [true, false];

export default function Checks({ setterFunction, answer }: any) {

    return (
        <div
            className="xs:w-full flex items-center gap-x-2">

            {answerButtons.map((button, index) => (
                <ChecksButton
                    key={index}
                    button={button}
                    index={index}
                    answer={answer}
                    setterFunction={setterFunction}
                />
            ))}

        </div>
    )
}