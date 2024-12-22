import Step2 from "../../Steps/Step2"


export default function Slide2({
    containerWidth,
    setGettingHelp,
    setOrigin
}) {

    return (
        <div
            style={{ flexShrink: 0, maxHeight: 'fit', maxWidth: containerWidth }}
            className='xs:w-full text-center flex content-center xs:px-2'>
            <Step2 setGettingHelp={setGettingHelp} origin={origin}
                setOrigin={setOrigin} />
        </div>
    )
}