export default function PromptContainer({ children }) {

    return (
        <div className="grid grid-cols-1 w-full h-auto mx-auto items-center">
            {children}
        </div>
    )
}