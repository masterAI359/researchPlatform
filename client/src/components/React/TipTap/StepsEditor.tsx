import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import Placeholder from "@tiptap/extension-placeholder";
import { TipTapProps } from "@/env";
import EditorControls from "./EditorControls";

export default function StepsEditor({ setterFunction, context }: TipTapProps) {
    const dispatch = useDispatch<AppDispatch>();

    const handleContent = () => {
        let input = editor.getText()
        dispatch(setterFunction(input))
    }


    const editor: Editor = useEditor({
        content: context && context.trim().length > 0 ? context : null,
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2]
                }
            }),
            Placeholder.configure({
                placeholder: 'Type here...',
            }),
        ],

    });


    if (!editor) {
        return null
    };

    editor.on('update', handleContent)

    const handleContainerClick = () => {
        if (editor && !editor.isFocused) {
            editor.commands.focus('end', null)
        }
    }

    return (
        <div className="w-full max-w-168 h-full box-border mx-auto">
            <EditorControls editor={editor} />
            <div onClick={handleContainerClick} className="h-full w-full box-border max-w-80 md:max-w-full overflow-hidden">
                <EditorContent style={{ textAlign: 'left', verticalAlign: 'top', minHeight: '90%', height: '100%', color: '#ffffff', maxWidth: '100%' }} editor={editor}
                    className={`
                    text-white whitespace-pre-wrap break-words text-xs 
                    sm:text-sm xl:text-lg focus:outline-none px-2 focus:border-none 
                    font-light font-serif tracking-tight cursor-text
                    w-full overflow-y-scroll no-scrollbar h-full prose`}
                />
            </div>
        </div>
    )
};