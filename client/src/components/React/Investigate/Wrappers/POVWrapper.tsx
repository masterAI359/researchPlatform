import WindowContainer from "../../Containers/WindowContainer"
import MapContainer from "../../Map/MapContainer"

export default function POVWrapper({ }) {

    return (
        <main
            className="flex items-center justify-start lg:px-4 xl:px-0 w-full h-full">
            <WindowContainer
            />
            <MapContainer />
        </main>
    )
}