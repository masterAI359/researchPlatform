import Step4 from "../../Steps/Step4";


export default function Slide4({
    containerWidth,
    setGettingHelp
}) {


    return (
        <div
            style={{ flexShrink: 0, maxHeight: 'fit', maxWidth: containerWidth }}
            className='xs:w-full text-center h-fit xs:px-2'>
            <Step4 containerWidth={containerWidth} setGettingHelp={setGettingHelp} />
        </div>
    )
}