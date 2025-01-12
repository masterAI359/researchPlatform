import ChecksButton from "../../Buttons/ChecksButton"

const answerButtons: boolean[] = [true, false];

export default function Checks({ setterFunction, answer }: any) {

    return (
        <div
            className="xs:w-full flex items-center justify-between">

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