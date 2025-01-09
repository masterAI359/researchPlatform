import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import StepsEditor from "../../TipTap/StepsEditor"
import { RootState } from "@/ReduxToolKit/store"
import { useDispatch, useSelector } from "react-redux"
import { writingNote } from "@/ReduxToolKit/Reducers/NoteTaking"

export default function Notes({ notePosition, setNotePosition, constraints, notesRef }) {
    const takingNotes = useSelector((state: RootState) => state.notes.takingNotes)
    const [content, setContent] = useState(null)
    const dispatch = useDispatch()

    return (
        <motion.div
            ref={notesRef}
            drag
            dragConstraints={constraints}
            dragMomentum={false}
            onDragEnd={(e, info) => {
                setNotePosition((prev) => ({

                    x: prev.x + info.delta.x,
                    y: prev.y + info.delta.y
                }))
            }}
            style={{ position: 'absolute', left: notePosition.x, top: notePosition.y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="bg-ebony z-50 2xl:w-[29rem] 2xl:h-96 xs:h-60 xs:w-72
            shadow shadow-black rounded-lg inset cursor-pointer
            flex flex-col">
            <div className="h-full w-full box-border flex flex-col justify-start">
                <div className="w-full max-h-fit flex justify-between rounded-t-lg">
                    <div className="max-w-8 max-h-8 p-1 box-border rounded-md hover:bg-white/20 transition-all duration-200 ease-in-out">
                        <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                            <path d="M 23.976562 4.9785156 A 1.50015 1.50015 0 0 0 22.5 6.5 L 22.5 22.5 L 6.5 22.5 A 1.50015 1.50015 0 1 0 6.5 25.5 L 22.5 25.5 L 22.5 41.5 A 1.50015 1.50015 0 1 0 25.5 41.5 L 25.5 25.5 L 41.5 25.5 A 1.50015 1.50015 0 1 0 41.5 22.5 L 25.5 22.5 L 25.5 6.5 A 1.50015 1.50015 0 0 0 23.976562 4.9785156 z" fill="currentColor" />
                        </svg>
                    </div>
                    <div
                        onClick={() => dispatch(writingNote(false))}
                        className="max-w-8 max-h-8 p-1 box-border rounded-md hover:bg-white/20 transition-all duration-200 ease-in-out">
                        <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                            <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
                <div className=" h-full w-full pb-1 mx-auto bg-ebony/70 rounded-b-md">
                    <StepsEditor setterFunction={setContent} />
                </div>

            </div>

        </motion.div>
    )



}