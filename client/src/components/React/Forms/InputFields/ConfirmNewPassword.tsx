import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"




export default function ConfirmNewPassword({ acceptedInput, canSubmit, handleSecondEntry }) {
    const mustMatchPasswords = useSelector((state: RootState) => state.newUser.mustMatchFirstPassword)

    return (
        <div className="col-span-full">
            <div>
                <label htmlFor="confirm_password" className="block mb-2 md:mb-3 text-sm font-medium text-white">
                    <div className="flex justify-between pr-2 gap-x-6 items-center">
                        <div className="text-xs sm:text-sm font-medium text-white">
                            Confirm Password
                        </div>
                        {mustMatchPasswords && <p className="text-xs sm:text-sm font-light text-red-500">{mustMatchPasswords}</p>}
                        <div className="w-fit">
                            {canSubmit && canSubmit !== null && <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-check text-green-500 mx-auto`} width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>}
                            {acceptedInput === false || canSubmit === false && <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline text-red-500 icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>

                            }
                        </div>
                    </div>
                </label>
                <input onChange={(e) => handleSecondEntry(e)} id="confirm_password" name="password" type="password" placeholder="Retype password here..." autoComplete="current-password"
                    className={`block w-full px-3 py-3 border-2 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 focus:border-black 
        focus:bg-transparent focus:outline-none focus:ring-black text-xs sm:text-sm placeholder-zinc-500 h-10
        ${canSubmit === false && 'border-red-500'}
        ${canSubmit === true && 'border-green-500'}
         ${canSubmit === true && acceptedInput === true && 'border-green-500'}
        ${acceptedInput === true && 'border-green-500'}
        ${acceptedInput === false && 'border-red-500'}
        `} required />
            </div>

        </div>
    )
}