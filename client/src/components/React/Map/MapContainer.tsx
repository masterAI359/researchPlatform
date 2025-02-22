import MindMap from "./MindMap"

export default function MapContainer({ }) {

    return (
        <section className="w-fit h-fit flex flex-col items-center box-border hidden md:block">
            <div className="xl:min-w-128 h-full mx-auto rounded-4xl">
                <MindMap />
            </div>
        </section>
    )
}


