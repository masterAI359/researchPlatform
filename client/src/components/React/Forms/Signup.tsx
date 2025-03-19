import { supabase } from "@/SupaBase/supaBaseClient"
import { requiredInput } from "@/helpers/validation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { Link } from "react-router-dom"
import CreatingUser from "./AuthNotifications/CreatingUser"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"
import { confirmPassword, emailValidation } from "@/helpers/validation"
import { getNewEmail, getFirstPassword, getSecondPassword, showLengthRequirement, showSpecialCharsWarning, requestValidEmail, matchPasswords } from "@/ReduxToolKit/Reducers/Athentication/NewUserSlice"
import { useDispatch } from "react-redux"
import { AnimatePresence } from "framer-motion"
import NewEmail from "./InputFields/NewEmail"
import NewPassword from "./InputFields/NewPassword"
import ConfirmNewPassword from "./InputFields/ConfirmNewPassword"
import OAuthLogins from "./InputFields/OauthLogins"
import NewPasswordGuide from "./InputGuides/NewPasswordGuide"
//TODO: add messages for password validation

export default function Signup() {
    const [acceptedInput, setAcceptedInput] = useState<boolean>(null)
    const [first_pw_valid, setValidFirstPassword] = useState<boolean>(null)
    const [canSubmit, setCanSubmit] = useState<boolean>(null)
    const [creating, setCreating] = useState<boolean>(false)
    const [createdUser, setCreatedUser] = useState<boolean>(null)
    const [emailValid, setEmailValid] = useState<boolean>(null)
    const newEmail = useSelector((state: RootState) => state.newUser.emailInput)
    const firstPassword = useSelector((state: RootState) => state.newUser.firstPassword)
    const secondPassword = useSelector((state: RootState) => state.newUser.secondPassword)
    const enterValidEmail = useSelector((state: RootState) => state.newUser.enterValidEmail)
    const dispatch = useDispatch()

    const handleEmail = (e: any) => {

        const email = e.target.value
        dispatch(getNewEmail(email))
    }

    const handlePassword = (e: any) => {
        const password = e.target.value
        dispatch(getFirstPassword(password))
    }

    const handleSecondEntry = (e: any) => {
        const secondEntry = e.target.value
        dispatch(getSecondPassword(secondEntry))
        if (firstPassword) {

            const confirmation = confirmPassword(firstPassword, secondEntry, setCanSubmit)

            if (confirmation === false) {

                dispatch(matchPasswords("Password entered must match the entry above"))
            } else if (confirmation === true) {
                dispatch(matchPasswords(null))
            }
        }
    }


    const checkInput = () => {

        requiredInput(newEmail, firstPassword, setValidFirstPassword)



        console.log(first_pw_valid)
    }



    const createUser = async () => {
        setCreating(true)

        if (canSubmit) {

            try {
                const { data, error } = await supabase.auth.signUp({
                    email: newEmail,
                    password: secondPassword,
                })

                if (error) {
                    console.log(error)
                    setCreatedUser(false)
                } else if (data) {
                    setCreatedUser(true)
                }

            } catch (error) {
                console.log(error)
            } finally {
                if (createdUser) {

                }
            }

        } else {
            setAcceptedInput(false)
        }
    }


    const submitAccountCreation = (e: any) => {

        e.preventDefault()

        if (emailValid && first_pw_valid && canSubmit) {
            createUser()
        } else {
            setCanSubmit(false)
        }
    }


    useEffect(() => {


        if (newEmail !== null && newEmail !== '') {
            setTimeout(() => {
                emailValidation(newEmail, setEmailValid)

            }, 3000)
            console.log(emailValid)

        }

        if (emailValid === false) {
            dispatch(requestValidEmail('please enter a valid email address'))
        } else if (emailValid === true) {
            dispatch(requestValidEmail(null))
        }

        if (first_pw_valid === false) {
            dispatch(showLengthRequirement('password must be at least 8 characters'))
        } else if (first_pw_valid === true) {
            dispatch(showLengthRequirement(null))
        }

        if (firstPassword && secondPassword && newEmail) {
            checkInput()
        }

    }, [firstPassword, secondPassword, acceptedInput, canSubmit, dispatch, newEmail])

    return (

        <ErrorBoundary>
            <section className="lg:p-8 overflow-hidden bg-black animate-fade-in">
                {creating && <CreatingUser creating={creating} setCreating={setCreating} createdUser={createdUser} />}
                <div className="mx-auto 2xl:max-w-7xl py-24 lg:px-16 md:px-12 px-8 xl:px-36">
                    <div className="border-b pb-12">
                        <p className="text-3xl tracking-tight font-light lg:text-4xl text-white">
                            Sign up.
                        </p>
                        <p className="mt-2 text-sm text-zinc-400">Create an account with us.</p>
                    </div>
                    <div className="w-full gap-6 sm:gap-24 mx-auto grid grid-cols-1 mt-12 lg:grid-cols-2 items-end relative">
                        <form>
                            <div className="space-y-4">
                                <NewEmail emailValid={emailValid} enterValidEmail={enterValidEmail} handleEmail={handleEmail} />
                                <NewPassword first_pw_valid={first_pw_valid} acceptedInput={acceptedInput} canSubmit={canSubmit} handlePassword={handlePassword} />
                                <ConfirmNewPassword handleSecondEntry={handleSecondEntry} acceptedInput={acceptedInput} canSubmit={canSubmit} />
                                <div className="col-span-full">
                                    <button onClick={(e) => submitAccountCreation(e)} type="submit" className="text-sm py-2 px-4 border focus:ring-2 h-10 rounded-full border-zinc-100 
                                bg-white hover:bg-black text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white
                                 w-full inline-flex items-center justify-center ring-1 ring-transparent">
                                        Submit
                                    </button>
                                </div>
                                <div>
                                    <p className="font-medium text-sm leading-tight text-white mx-auto"> Already a member?

                                        <Link className="text-white underline hover:text-blue-400 ml-3" to={'/Login'}>

                                            Log in now
                                        </Link>

                                    </p>
                                </div>
                            </div>
                        </form>
                        <AnimatePresence>
                            {canSubmit !== true && <NewPasswordGuide />}

                        </AnimatePresence>
                        <OAuthLogins />
                    </div>
                </div>
            </section>
        </ErrorBoundary>


    )
}


