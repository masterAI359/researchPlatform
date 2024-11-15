import { createPortal } from "react-dom"
import { motion } from "framer-motion"

export default function Notes({ notePosition, setNotePosition, constraints, notesRef }) {

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
            style={{ position: 'absolute', left: notePosition.x, top: notePosition.y, width: 500, height: 350 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="bg-mirage z-50 
            shadow shadow-black p-3 rounded-3xl inset cursor-pointer
            flex flex-col justify-between">
            <div className="h-full w-full box-border flex flex-col justify-between">
                <h1 className="text-white font-light tracking-tight font-serif text-lg ">Testing notes function</h1>
                <textarea className="h-3/4 w-full mx-auto bg-white/5 text-white resize-none rounded-md" ></textarea>
            </div>

        </motion.div>
    )



}