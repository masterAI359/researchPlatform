import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"


export default function NewPassword({ acceptedInput, canSubmit, handlePassword, first_pw_valid }) {
    const passwordLengthRequired = useSelector((state: RootState) => state.newUser.passWordLengthRequired)

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
                <input onChange={(e) => handlePassword(e)} id="password" name="password" type="password" placeholder="Type password here..." autoComplete="current-password"
                    className={`block w-full px-3 py-3 border-2 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 focus:border-black 
            focus:bg-transparent focus:outline-none focus:ring-black text-xs sm:text-sm placeholder-zinc-500 h-10
            ${first_pw_valid === false && 'border-red-500'}
            ${canSubmit === true && first_pw_valid === true && 'border-green-500'}
            `} required />
            </div>

        </div>
    )
}