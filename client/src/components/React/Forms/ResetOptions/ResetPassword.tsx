import { supabase } from "@/SupaBase/supaBaseClient"
import { useEffect, useState } from "react"
import { confirmPassword, confirmFirstPassword } from "@/helpers/validation"
import { useNavigate } from "react-router-dom"
import ConfirmNewPassword from "../InputFields/ConfirmNewPassword"
import NewPassword from "../InputFields/NewPassword"
import { getFirstPassword, getSecondPassword, showLengthRequirement, showSpecialCharsWarning, matchPasswords, clearNewUser } from "@/ReduxToolKit/Reducers/Athentication/NewUserSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { Link } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Resetting from "../AuthNotifications/ResettingPassword"

export default function ResetPassword({ }) {
    
    const [validEntries, setValidEntries] = useState<boolean>(null)
    const [first_pw_valid, setValidFirstPassword] = useState<boolean>(null)
    const [needSpecialChar, setNeedSpecialChar] = useState<string>(null)
    const [canSubmit, setCanSubmit] = useState<boolean>()
    const secondPassword = useSelector((state: RootState) => state.newUser.secondPassword)
    const firstPassword = useSelector((state: RootState) => state.newUser.firstPassword)
    const [successfullyChanged, setSuccessFullyChanged] = useState<boolean>(null)
    const [resetting, setResetting] = useState<boolean>(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

 

    const handlePassword = (e: any) => {
        const password = e.target.value
        dispatch(getFirstPassword(password))
    }

    const handleSecondEntry = (e: any) => {
        const secondEntry = e.target.value
        dispatch(getSecondPassword(secondEntry))
        console.log('dispatching')
        console.log(secondPassword)
    }

    const resetPassword = async (e: any) => {

        e.preventDefault()
        setResetting(true)

        if (canSubmit) {

            const { data, error } = await supabase.auth.updateUser({
                password: secondPassword
            })

            console.log(data, error)

            if (error) {
                console.log(error.message)
                setSuccessFullyChanged(false)
            } else if(data) {
                setSuccessFullyChanged(true)
            }

        } else {
            console.log("Passwords must match")
        }

    }

    useEffect(() => {

        if(firstPassword) {
            confirmFirstPassword(firstPassword, setValidFirstPassword)
        }

        if(firstPassword && secondPassword) {
            confirmPassword(firstPassword, secondPassword, setCanSubmit, setNeedSpecialChar)
        }

        if (canSubmit === false) {
            dispatch(matchPasswords("Password entered must match the entry above"))
        } else if (canSubmit === true) {
            dispatch(matchPasswords(''))
        }

        


    }, [firstPassword, secondPassword, validEntries])



    return (
        <div className="w-full max-w-md md:max-w-sm mx-auto">
            <AnimatePresence>
                {resetting && <Resetting setResetting={setResetting} successfullyChanged={successfullyChanged} />}
            </AnimatePresence>
            <div className="flex flex-col">
                <div className="border-b pb-12">
                    <p className="text-3xl tracking-tight font-light lg:text-4xl text-white">
                        Reset password
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">
                        Enter your new password below
                    </p>
                </div>
            </div>
            <form className="mt-12">
                <div className="space-y-6">
                    <NewPassword handlePassword={handlePassword} canSubmit={canSubmit} first_pw_valid={first_pw_valid} needSpecialChar={needSpecialChar} />
                    <ConfirmNewPassword canSubmit={canSubmit} setCanSubmit={setCanSubmit} handleSecondEntry={handleSecondEntry} setNeedSpecialChar={setNeedSpecialChar}/>
                    <div className="col-span-full">
                        <button onClick={(e) => resetPassword(e)} type="button" className="text-sm py-2 px-4 border focus:ring-2 h-10 rounded-full border-zinc-100 
                        bg-white hover:bg-black/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white w-full inline-flex items-center 
                        justify-center ring-1 ring-transparent">
                            Submit
                        </button>
                    </div>
                    <div>
                        <Link to={'/login'} >
                        <p className="font-medium text-sm leading-tight text-white mx-auto">
                            Already have a password? <a className="text-white underline hover:text-blue-400 ml-3" href="#">Log in instead</a>
                        </p>
                        </Link>
                       
                    </div>
                </div>
            </form>
        </div>
    )
}




