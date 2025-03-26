import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { emailValidation } from "@/helpers/validation"
import { getNewEmail } from "@/ReduxToolKit/Reducers/Athentication/NewUserSlice"

export default function NewEmail({ emailValid, enterValidEmail, setEmailValid }) {
    const newEmail = useSelector((state: RootState) => state.newUser.emailInput)
    const dispatch = useDispatch()

    const checkEmail = () => {

        emailValidation(newEmail, setEmailValid)
    }


    const handleEmail = (e: any) => {

        const email = e.target.value
        dispatch(getNewEmail(email))
    }

    useEffect(() => {

        if (newEmail) {
            checkEmail()
        }

    }, [emailValid, enterValidEmail, handleEmail])

    return (
        <div className="col-span-full">
            <label htmlFor="email" className="block mb-2 md:mb-3 text-sm font-medium text-white">
                <div className="flex justify-between pr-2 gap-x-6 items-center">
                    <div className="text-xs sm:text-sm font-medium text-white">
                        Email
                    </div>
                    {emailValid === false && enterValidEmail && <div className="w-auto">
                        <p className="text-red-500 text-xs sm:text-sm font-light">{enterValidEmail}</p>
                    </div>}
                    <div className="w-fit">
                        {emailValid === true && <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-check text-green-500 mx-auto`} width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>}
                        {emailValid === false && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline text-red-500 icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                        }
                    </div>
                </div>
            </label>
            <input onChange={(e) => handleEmail(e)} id="email" name="email" type="email" autoComplete="email" placeholder="email@example.com"
                className={`block w-full px-3 py-3 border-2 rounded-xl appearance-none bg-black text-white bg-white/5 focus:bg-black placeholder-black/50 focus:border-white/5 
                                     focus:outline-none focus:ring-black text-base placeholder-zinc-500 h-10
                                    ${emailValid === false && 'border-red-500 focus:border-green-500'} 
                                    ${emailValid === true && 'border-green-500 focus:border-green-500'}
                                    ${emailValid === null && 'border-white/5 focus:border-white'}
                                    `}
                required />
        </div>
    )
}