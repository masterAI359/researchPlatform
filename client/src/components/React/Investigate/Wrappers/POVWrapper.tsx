import WindowContainer from "../../Containers/WindowContainer"
import MapContainer from "../../Map/MapContainer"

export default function POVWrapper({ }) {

    return (
        <main
            className="flex mx-auto my-auto box-border w-full h-fit">
            <WindowContainer
            />
            <div className="hidden 2xl:mt-8 md:block w-fit h-fit flex items-center">
                <MapContainer />

            </div>
        </main>
    )
}