import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
//TODO: create component to gauge whether the premises held up under scrutiny or not

export default function Validity() {
    const premises = useSelector((state: RootState) => state.pov.premises)

    return (
        <div>
            {premises}
        </div>
    )
}