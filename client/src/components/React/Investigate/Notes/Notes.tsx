import { useState } from "react"
import { motion } from "framer-motion"
import { RootState } from "@/ReduxToolKit/store"
import { useDispatch, useSelector } from "react-redux"
import { writingNote, saveNote } from "@/ReduxToolKit/Reducers/Investigate/NoteTaking"
import NotesEditor from "../../TipTap/NotesEditor"

export default function Notes({ notePosition, setNotePosition, constraints, notesRef }) {
    const note = useSelector((state: RootState) => state.notes.noteTaken)
    const [content, setContent] = useState(null)
    const dispatch = useDispatch()

    console.log(note)


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
            className="bg-mirage z-50 2xl:w-[29rem] 2xl:h-96 xs:h-60 xs:w-72
            shadow shadow-thick rounded-lg inset cursor-pointer
            flex flex-col overflow-hidden">
            <div className="h-full w-full box-border flex flex-col justify-start">
                <div className="w-full max-h-fit flex justify-end rounded-t-lg">
                    <div
                        onClick={() => dispatch(writingNote(false))}
                        className="max-w-8 max-h-8 p-1.5 box-border hover:bg-white/20 transition-all duration-200 ease-in-out">
                        <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                            <path d="M 7 22 A 2.0002 2.0002 0 1 0 7 26 L 41 26 A 2.0002 2.0002 0 1 0 41 22 L 7 22 z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
                <div className=" h-full w-full pb-1 mx-auto bg-mirage rounded-b-md">
                    <NotesEditor context={note} setterFunction={saveNote} />
                </div>

            </div>

        </motion.div>
    )



}