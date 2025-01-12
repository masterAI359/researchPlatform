import WindowContainer from "./WindowContainer"
import MapContainer from "../Map/MapContainer"

export default function ContentWrapper({ setCanProceed, notifyRequired, setNotifyRequired, canProceed }) {

    return (
        <main
            className="flex mx-auto items-center my-auto box-border w-full h-fit justify-start">
            <WindowContainer
                setCanProceed={setCanProceed}
                notifyRequired={notifyRequired}
                setNotifyRequired={setNotifyRequired}
                canProceed={canProceed}
            />
            <div className="xs:hidden md:block w-fit h-fit flex items-center">
                <MapContainer />

            </div>
        </main>
    )
}