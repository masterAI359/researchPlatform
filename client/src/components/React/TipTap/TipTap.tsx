import { useEditor, EditorContent, FloatingMenu } from "@tiptap/react"
import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import ListItem from '@tiptap/extension-list-item'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { useEffect, useState } from "react"




export default function TipTap({ setContent }) {


    const editor = useEditor({
        extensions: [Document, Paragraph, Text, BulletList, ListItem],
        content: `
          `,
    })

    if (!editor) {
        return null
    }

    const handleNote = () => {

        setContent(editor.getText())
    }

    editor.on('update', handleNote)




    return (<div className="w-full h-full box-border flex flex-col justify-between">
        <div className="control-group w-full flex px-1 bg-ebony/90 border-b border-zinc-700">
            <div className="button-group w-full mx-auto text-white flex gap-x-2 py-2">
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    <div className="max-h-8 max-w-8 p-1 hover:bg-white/10 transition-all duration-200 ease-in-out rounded-md cursor-pointer">
                        <svg className="text-white box-border" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                            <path d="M 7 11 A 3 3 0 0 0 7 17 A 3 3 0 0 0 7 11 z M 16 12 A 2.0002 2.0002 0 1 0 16 16 L 42 16 A 2.0002 2.0002 0 1 0 42 12 L 16 12 z M 7 21 A 3 3 0 0 0 7 27 A 3 3 0 0 0 7 21 z M 16 22 A 2.0002 2.0002 0 1 0 16 26 L 42 26 A 2.0002 2.0002 0 1 0 42 22 L 16 22 z M 7 31 A 3 3 0 0 0 7 37 A 3 3 0 0 0 7 31 z M 16 32 A 2.0002 2.0002 0 1 0 16 36 L 42 36 A 2.0002 2.0002 0 1 0 42 32 L 16 32 z" fill="currentColor" />
                        </svg>
                    </div>
                </button>
                <button
                    onClick={() => editor.chain().focus().splitListItem('listItem').run()}
                    disabled={!editor.can().splitListItem('listItem')}
                >
                    <div className="max-h-8 max-w-8 p-1 hover:bg-white/10 transition-all duration-200 ease-in-out rounded-md cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="translate(255.88654,256) rotate(180) scale(5.33333,5.33333)"><path d="M18.5,6c-3.01977,0 -5.5,2.48023 -5.5,5.5v6c-0.00765,0.54095 0.27656,1.04412 0.74381,1.31683c0.46725,0.27271 1.04514,0.27271 1.51238,0c0.46725,-0.27271 0.75146,-0.77588 0.74381,-1.31683v-6c0,-1.39823 1.10177,-2.5 2.5,-2.5h18c1.39823,0 2.5,1.10177 2.5,2.5v25c0,1.39823 -1.10177,2.5 -2.5,2.5h-18c-1.39823,0 -2.5,-1.10177 -2.5,-2.5v-5.98047c0.00765,-0.54095 -0.27656,-1.04412 -0.74381,-1.31683c-0.46725,-0.27271 -1.04514,-0.27271 -1.51238,0c-0.46725,0.27271 -0.75146,0.77588 -0.74381,1.31683v5.98047c0,3.01977 2.48023,5.5 5.5,5.5h18c3.01977,0 5.5,-2.48023 5.5,-5.5v-25c0,-3.01977 -2.48023,-5.5 -5.5,-5.5zM24.48438,16.50391c-0.61065,0.00015 -1.16026,0.37042 -1.38978,0.93629c-0.22952,0.56587 -0.09314,1.21439 0.34486,1.63988l3.4375,3.4375l-19.375,-0.01758c-0.54092,-0.00832 -1.04443,0.27524 -1.31772,0.74212c-0.2733,0.46688 -0.27405,1.04474 -0.00197,1.51233c0.27208,0.46759 0.77484,0.75246 1.31579,0.74555l19.38281,0.01758l-3.44141,3.44141c-0.39185,0.37623 -0.54969,0.9349 -0.41265,1.46055c0.13704,0.52565 0.54754,0.93616 1.07319,1.07319c0.52565,0.13704 1.08432,-0.0208 1.46055,-0.41265l6,-6c0.58555,-0.58579 0.58555,-1.5353 0,-2.12109l-6,-6c-0.28248,-0.2909 -0.67069,-0.45506 -1.07617,-0.45508z" /></g></g></svg>

                    </div>
                </button>
                <button
                    onClick={() => editor.chain().focus().sinkListItem('listItem').run()}
                    disabled={!editor.can().sinkListItem('listItem')}
                >
                    <div className="max-h-8 max-w-8 p-1 hover:bg-white/10 transition-all duration-200 ease-in-out rounded-md cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M13,11h-2c-0.552,0 -1,0.448 -1,1v0c0,0.552 0.448,1 1,1h2v1.793c0,0.445 0.539,0.669 0.854,0.354l2.793,-2.793c0.195,-0.195 0.195,-0.512 0,-0.707l-2.793,-2.793c-0.315,-0.315 -0.854,-0.092 -0.854,0.353zM23,3h-3c-0.552,0 -1,-0.448 -1,-1v0c0,-0.552 0.448,-1 1,-1h3c0.552,0 1,0.448 1,1v0c0,0.552 -0.448,1 -1,1zM23,7h-3c-0.552,0 -1,-0.448 -1,-1v0c0,-0.552 0.448,-1 1,-1h3c0.552,0 1,0.448 1,1v0c0,0.552 -0.448,1 -1,1zM1.2,4.805v0c0.663,0 1.2,0.537 1.2,1.2v0c0,0.663 -0.537,1.2 -1.2,1.2v0c-0.663,0 -1.2,-0.537 -1.2,-1.2v0c0,-0.663 0.537,-1.2 1.2,-1.2zM16,1v0c0.663,0 1.2,0.537 1.2,1.2v0c0,0.663 -0.537,1.2 -1.2,1.2v0c-0.663,0 -1.2,-0.537 -1.2,-1.2v0c0,-0.663 0.537,-1.2 1.2,-1.2zM16,4.8v0c0.663,0 1.2,0.537 1.2,1.2v0c0,0.663 -0.537,1.2 -1.2,1.2v0c-0.663,0 -1.2,-0.537 -1.2,-1.2v0c0,-0.663 0.537,-1.2 1.2,-1.2zM16,16.8v0c0.663,0 1.2,0.537 1.2,1.2v0c0,0.663 -0.537,1.2 -1.2,1.2v0c-0.663,0 -1.2,-0.537 -1.2,-1.2v0c0,-0.663 0.537,-1.2 1.2,-1.2zM16,20.6v0c0.663,0 1.2,0.537 1.2,1.2v0c0,0.663 -0.537,1.2 -1.2,1.2v0c-0.663,0 -1.2,-0.537 -1.2,-1.2v0c0,-0.663 0.537,-1.2 1.2,-1.2zM1.2,8.8v0c0.663,0 1.2,0.537 1.2,1.2v0c0,0.663 -0.537,1.2 -1.2,1.2v0c-0.663,0 -1.2,-0.537 -1.2,-1.2v0c0,-0.662 0.537,-1.2 1.2,-1.2zM1.2,12.796v0c0.663,0 1.2,0.537 1.2,1.2v0c0,0.663 -0.537,1.2 -1.2,1.2v0c-0.663,0 -1.2,-0.537 -1.2,-1.2v0c0,-0.663 0.537,-1.2 1.2,-1.2zM1.2,16.791v0c0.663,0 1.2,0.537 1.2,1.2v0c0,0.663 -0.537,1.2 -1.2,1.2v0c-0.663,0 -1.2,-0.537 -1.2,-1.2v0c0,-0.663 0.537,-1.2 1.2,-1.2zM5,5h3c0.552,0 1,0.448 1,1v0c0,0.552 -0.448,1 -1,1h-3c-0.552,0 -1,-0.448 -1,-1v0c0,-0.552 0.448,-1 1,-1zM5,9h3c0.552,0 1,0.448 1,1v0c0,0.552 -0.448,1 -1,1h-3c-0.552,0 -1,-0.448 -1,-1v0c0,-0.552 0.448,-1 1,-1zM5,13h3c0.552,0 1,0.448 1,1v0c0,0.552 -0.448,1 -1,1h-3c-0.552,0 -1,-0.448 -1,-1v0c0,-0.552 0.448,-1 1,-1zM5,17h3c0.552,0 1,0.448 1,1v0c0,0.552 -0.448,1 -1,1h-3c-0.552,0 -1,-0.448 -1,-1v0c0,-0.552 0.448,-1 1,-1zM23,21h-3c-0.552,0 -1,0.448 -1,1v0c0,0.552 0.448,1 1,1h3c0.552,0 1,-0.448 1,-1v0c0,-0.552 -0.448,-1 -1,-1zM23,17h-3c-0.552,0 -1,0.448 -1,1v0c0,0.552 0.448,1 1,1h3c0.552,0 1,-0.448 1,-1v0c0,-0.552 -0.448,-1 -1,-1z" /></g></g></svg>

                    </div>
                </button>
                <button
                    className="self-end w-fit"
                    onClick={() => editor.chain().focus().liftListItem('listItem').run()}
                    disabled={!editor.can().liftListItem('listItem')}
                >
                    <div className="max-h-8 max-w-8 p-1 hover:bg-white/10 transition-all duration-200 ease-in-out rounded-md cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                            <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 10.238281 10 A 1.50015 1.50015 0 0 0 9.9804688 9.9785156 A 1.50015 1.50015 0 0 0 9.7578125 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6386719 13 L 11.15625 39.029297 C 11.427329 41.835926 13.811782 44 16.630859 44 L 31.367188 44 C 34.186411 44 36.570826 41.836168 36.841797 39.029297 L 39.361328 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 38.244141 10 A 1.50015 1.50015 0 0 0 37.763672 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 11.650391 13 L 36.347656 13 L 33.855469 38.740234 C 33.730439 40.035363 32.667963 41 31.367188 41 L 16.630859 41 C 15.331937 41 14.267499 40.033606 14.142578 38.740234 L 11.650391 13 z M 20.476562 17.978516 A 1.50015 1.50015 0 0 0 19 19.5 L 19 34.5 A 1.50015 1.50015 0 1 0 22 34.5 L 22 19.5 A 1.50015 1.50015 0 0 0 20.476562 17.978516 z M 27.476562 17.978516 A 1.50015 1.50015 0 0 0 26 19.5 L 26 34.5 A 1.50015 1.50015 0 1 0 29 34.5 L 29 19.5 A 1.50015 1.50015 0 0 0 27.476562 17.978516 z" fill="currentColor" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>

        <EditorContent className="text-white text-lg focus:outline-none px-1 focus:border-none font-light tracking-tight cursor-text
             font-serif w-full mx-auto h-full box-border prose"
            editor={editor} />
    </div>)
}







