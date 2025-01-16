import ChecksButton from "../../Buttons/ChecksButton"

const answerButtons: boolean[] = [true, false];

export default function Checks({ setterFunction, answer }: any) {

    return (
        <div
            className="xs:w-full flex flex-col items-start 2xl:gap-y-2">

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