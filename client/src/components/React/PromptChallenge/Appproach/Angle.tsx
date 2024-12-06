import { useState } from "react"
import Perspective from "../Steps/Step2"
import Expertise from "./expertise"

export default function Angle({ setApproach }) {
    const [origin, setOrigin] = useState<string>(null)

    return (
        <div className="w-full h-full box-border">

            <Perspective origin={origin} setOrigin={setOrigin} />

        </div>
    )
}