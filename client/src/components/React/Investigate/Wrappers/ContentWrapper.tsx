import WindowContainer from "../../Containers/WindowContainer"
import MapContainer from "../../Map/MapContainer"

export default function ContentWrapper({ }) {

    return (
        <main
            className="flex mx-auto items-center my-auto box-border w-full h-fit justify-start">
            <WindowContainer
            />
            <div className="xs:hidden md:block w-fit h-fit flex items-center">
                <MapContainer />

            </div>
        </main>
    )
}