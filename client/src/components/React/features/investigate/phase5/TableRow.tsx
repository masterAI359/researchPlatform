
export default function TableRow({ truthyValue }) {
    return (
        <>
            <td className="py-4 px-6 xl:px-8">
                <svg xmlns="http://www.w3.org/2000/svg" className={`${truthyValue === false ? 'opacity-100' : 'opacity-0'} icon icon-tabler icon-tabler-check text-green-500 mx-auto`} width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                </svg>
            </td>
            <td className="px-6 py-4 xl:px-8">
                <svg xmlns="http://www.w3.org/2000/svg" className={`${truthyValue === true ? 'opacity-100' : 'opacity-0'} icon icon-tabler icon-tabler-check text-green-500 mx-auto`} width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                </svg>
            </td>
            <td className="px-6 py-4 xl:px-8">
                <svg xmlns="http://www.w3.org/2000/svg" className={`${truthyValue === null ? 'opacity-100' : 'opacity-0'} icon icon-tabler icon-tabler-check text-green-500 mx-auto`} width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                </svg>
            </td>

        </>

    )


}