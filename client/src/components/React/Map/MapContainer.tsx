import MindMap from "./MindMap"

export default function MapContainer({ }) {

    return (
        <section className="w-fit h-fit flex justify-end box-border hidden md:block">
            <div className="xl:min-w-128 lg:w-96 md:w-72 h-full justify-self-end">
                <MindMap />
            </div>
        </section>
    )
}


