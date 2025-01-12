import Step1 from "../../Steps/Step1"


export default function Slide1({
    containerWidth,
    setNotifyRequired,
    setCanProceed,
    notifyRequired,
    setOrigin,
    origin,
}) {

    return (
        <div style={{ flexShrink: 0, maxWidth: containerWidth }}
            className='xs:w-full
        text-center mx-auto xs:h-full box-border flex xs:px-2 basis-full'>
            <Step1
                setNotifyRequired={setNotifyRequired}
                setCanProceed={setCanProceed}
                notifyRequired={notifyRequired}
                containerWidth={containerWidth}
                origin={origin}
                setOrigin={setOrigin}
            />
        </div>
    )
}