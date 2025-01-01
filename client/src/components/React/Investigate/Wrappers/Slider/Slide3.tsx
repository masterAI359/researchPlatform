import Step3 from "../../Steps/Step3"


export default function Slide3({
    containerWidth,
    setGettingHelp
}) {

    return (
        <div style={{ flexShrink: 0, maxHeight: 'fit', maxWidth: containerWidth }}
            className='xs:w-full text-center max-h-fit xs:px-2 basis-full box-border'>
            <Step3 containerWidth={containerWidth}
                setGettingHelp={setGettingHelp} />
        </div>
    )
}