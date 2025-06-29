import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import Placeholder from "@tiptap/extension-placeholder";
import { TipTapProps } from "@/env";


export default ({ context, setterFunction }: TipTapProps) => {

    const dispatch = useDispatch<AppDispatch>();

    const handleContent = () => {
        let input = editor.getText()
        dispatch(setterFunction(input))
    }


    console.log(context)

    const editor = useEditor({
        content: context ? context : null,
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2]
                }
            }),
            Placeholder.configure({
                placeholder: 'Type here...',
                emptyEditorClass: 'text-white/50', // makes the placeholder subtle
            }),
        ],

    })


    if (!editor) {
        return null
    }

    editor.on('update', handleContent)

    const handleContainerClick = () => {
        if (editor && !editor.isFocused) {
            editor.commands.focus('end', null)
        }
    }


    return (
        <div onClick={handleContainerClick} className="h-full w-full box-border max-w-80 md:max-w-full overflow-hidden">
            <EditorContent style={{ textAlign: 'left', verticalAlign: 'top', minHeight: '90%', height: '100%', color: '#ffffff', maxWidth: '100%' }} editor={editor}
                className="text-white whitespace-pre-wrap break-words text-xs sm:text-sm xl:text-lg focus:outline-none px-2 focus:border-none font-light font-serif tracking-tight cursor-text
             w-full overflow-y-scroll no-scrollbar h-full prose"
            />
        </div>

    )
} 