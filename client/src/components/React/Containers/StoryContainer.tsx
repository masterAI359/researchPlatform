interface Props {
    children: React.ReactNode
}


export default function StoryContainer ({ children }:Props ) {

   

    return (
            <div className="relative w-full h-auto left-1/2 transform -translate-x-1/2">
            {children}
            </div>
    )
}