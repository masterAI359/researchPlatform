import MindMap from "./MindMap"

export default function MapContainer({ }) {

    return (
        <section className="md:w-fit h-fit flex justify-end box-border hidden lg:block">
            <div className="xl:min-w-128 lg:w-96 lg:mx-2 xl:mx-0 h-full justify-self-end">
                <MindMap />
            </div>
        </section>
    )
}


