import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useState } from "react"


export default function NewPassword({ acceptedInput, canSubmit, handlePassword, first_pw_valid }) {
    const passwordLengthRequired = useSelector((state: RootState) => state.newUser.passWordLengthRequired)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
        <div className="col-span-full">
            <div>
                <label htmlFor="password" className="block mb-2 md:mb-3 text-sm font-medium text-white">
                    <div className="flex justify-between pr-2 gap-x-6 items-center">
                        <div className="text-xs sm:text-sm font-medium text-white">
                            Password
                        </div>
                        {passwordLengthRequired && first_pw_valid === false && <p className="text-xs sm:text-sm font-light text-red-500">{passwordLengthRequired}</p>}
                        <div className="w-fit">
                            {first_pw_valid === true && canSubmit !== false && <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-check text-green-500 mx-auto`} width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>}
                            {first_pw_valid === false && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline text-red-500 icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                            }
                        </div>
                    </div>
                </label>
                <div className="relative w-full h-auto">
                    <input onChange={(e) => handlePassword(e)} id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Type password here..." autoComplete="current-password"
                        className={`block w-full px-3 py-3 border-2 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 focus:border-white/5
            focus:bg-transparent focus:outline-none focus:ring-black text-xs sm:text-sm placeholder-zinc-500 h-10 relative
            ${first_pw_valid === false && 'border-red-500'}
            ${canSubmit === true && first_pw_valid === true && 'border-green-500'}
            `} required />

                    <button onClick={() => setShowPassword(prev => !prev)} className="w-fit h-fit absolute right-2 bottom-2 z-30 group">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler text-white opacity-60 group-hover:opacity-100 transition-opacity duration-200 ease-in-out icons-tabler-outline icon-tabler-eye">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>

                    </button>
                </div>

            </div>

        </div>
    )
}