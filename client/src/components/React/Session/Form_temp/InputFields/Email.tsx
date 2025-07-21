import { useEffect } from "react"

interface EmailInput {
    validEmail: boolean | null,
    setUserEmail: (userEmail: string) => void
};

export default function Email({ validEmail, setUserEmail }: EmailInput) {

    const handleEmail = (e: any) => {
        setUserEmail(e.target.value)
    };

    useEffect(() => { }, [validEmail]);


    return (
        <div className="col-span-full">
            <label htmlFor="email" className="block mb-3 text-sm font-medium text-white">
                Email
            </label>
            <input onChange={(e) => handleEmail(e)} id="email" name="email" type="email" autoComplete="off" placeholder="email@example.com"
                className={`block w-full px-3 py-3 border-2 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 
                                 focus:bg-transparent focus:outline-none focus:ring-black text-base sm:text-sm placeholder-zinc-500 h-10
                                transition-all duration-200 ease-in-out
                                ${validEmail === false && 'border-red-500 focus:border-red-500'}
                                ${validEmail === null && 'focus:border-white border-white/5'}
                                ${validEmail === true && 'border-green-500 focus:border-green-500'}
                                `} required />
        </div>
    )
};