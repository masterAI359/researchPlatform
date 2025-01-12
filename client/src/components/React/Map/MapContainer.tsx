import MindMap from "./MindMap"

export default function MapContainer({ }) {

    return (
        <section className="w-fit h-fit flex items-center box-border">
            <div className="xl:min-w-128 xl:h-full mx-auto rounded-4xl">
                <MindMap />
            </div>
        </section>
    )
}


