import WindowContainer from "../../Containers/WindowContainer"
import MapContainer from "../../Map/MapContainer"

export default function POVWrapper({ }) {

    return (
        <main
            className="flex items-center mx-auto box-border w-full h-full">
            <WindowContainer
            />
            <MapContainer />
        </main>
    )
}