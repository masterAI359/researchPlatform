import Step3 from "../../Steps/Step3"


export default function Slide3({
    containerWidth,
    setGettingHelp
}) {

    return (
        <div style={{ flexShrink: 0, maxHeight: 'fit', maxWidth: containerWidth }} className='xl:w-168 xs:w-full text-center max-h-fit xs:px-2'>
            <Step3 containerWidth={containerWidth}
                setGettingHelp={setGettingHelp} />
        </div>
    )
}