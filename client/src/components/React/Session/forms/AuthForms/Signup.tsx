import { requiredInput } from "@/helpers/validation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/ReduxToolKit/store"
import { Link, useNavigate } from "react-router-dom"
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary"
import { confirmPassword, emailValidation } from "@/helpers/validation"
import { getFirstPassword, getSecondPassword, requestValidEmail, matchPasswords } from "@/ReduxToolKit/Reducers/Athentication/NewUserSlice"
import { useDispatch } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"
import NewEmail from "../InputFields/NewEmail"
import NewPassword from "../InputFields/NewPassword"
import ConfirmNewPassword from "../InputFields/ConfirmNewPassword"
import OAuthLogins from "../InputFields/OauthLogins"
import NewPasswordGuide from "../InputGuides/NewPasswordGuide"
import { newUser } from "@/services/SupabaseData"
import { fetchUserCredentials } from "@/ReduxToolKit/Reducers/Athentication/Authentication"
import { newAccStatus } from "@/components/React/Session/notifications/AuthStatus"
import AuthNotification from "../../notifications/AuthNotification";


export default function Signup() {
    const id = useSelector((state: RootState) => state.auth.user_id);
    const [acceptedInput, setAcceptedInput] = useState<boolean>(null)
    const [first_pw_valid, setValidFirstPassword] = useState<boolean>(null)
    const [canSubmit, setCanSubmit] = useState<boolean>(null)
    const [creating, setCreating] = useState<boolean>(false)
    const [createdUser, setCreatedUser] = useState<boolean>(null)
    const [emailValid, setEmailValid] = useState<boolean>(null)
    const [errorMessage, setErrorMessage] = useState<string>(null)
    const [needSpecialChar, setNeedSpecialChar] = useState<string>(null)
    const newEmail = useSelector((state: RootState) => state.newUser.emailInput)
    const firstPassword = useSelector((state: RootState) => state.newUser.firstPassword)
    const secondPassword = useSelector((state: RootState) => state.newUser.secondPassword)
    const enterValidEmail = useSelector((state: RootState) => state.newUser.enterValidEmail)
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();


    const handlePassword = (e: any) => {
        const password = e.target.value
        dispatch(getFirstPassword(password))
    }

    const handleSecondEntry = (e: any) => {
        const secondEntry = e.target.value
        dispatch(getSecondPassword(secondEntry))
    }


    const checkInput = () => {
        requiredInput(newEmail, firstPassword, setValidFirstPassword)
    }

    const createUser = async () => {
        setCreating(true)
        if (canSubmit) {
            try {
                const data = await newUser(newEmail, firstPassword, setCreatedUser, setCanSubmit, setAcceptedInput, setErrorMessage, setValidFirstPassword);
                if (data) {
                    dispatch(fetchUserCredentials(data));
                };
            } catch (error) {
                console.log(error)
            }
        } else {
            setAcceptedInput(false)
        };
    };


    const submitAccountCreation = (e: any) => {

        e.preventDefault()


        if (emailValid && canSubmit) {
            createUser()
        } else {
        }
    }


    useEffect(() => {


        if (emailValid === false) {
            dispatch(requestValidEmail('please enter a valid email address'))
        } else if (emailValid === true) {
            dispatch(requestValidEmail(null))
        }

        if (firstPassword && newEmail) {
            checkInput()
        }

        if (firstPassword && secondPassword) {
            confirmPassword(firstPassword, secondPassword, setCanSubmit, setNeedSpecialChar)
        }

        if (canSubmit === false) {
            dispatch(matchPasswords("Password entered must match the entry above"))
        } else if (canSubmit === true) {
            dispatch(matchPasswords(''))
        }


    }, [firstPassword, secondPassword, acceptedInput, canSubmit, dispatch, newEmail, confirmPassword]);


    useEffect(() => {
        if (!id) return;

        const timer = setTimeout(() => {
            navigate('/Profile')
        }, 1000);

        return () => clearTimeout(timer);
    }, [id]);

    return (

        <ErrorBoundary>
            <section className="lg:p-8 min-h-dvh overflow-hidden bg-black animate-fade-in relative">
                <AnimatePresence>
                    {creating && <AuthNotification setterFunction={setCreating} complete={createdUser} status={newAccStatus} />}
                </AnimatePresence>
                <div className="mx-auto 2xl:max-w-7xl py-12 sm:py-24 lg:px-16 md:px-12 px-8 xl:px-36">
                    <div className="border-b pb-4 sm:pb-12">
                        <p className="text-2xl tracking-tight font-light lg:text-4xl text-white">
                            Sign up.
                        </p>
                        <p className="mt-2 text-sm text-zinc-400">Create an account with us.</p>
                    </div>
                    {errorMessage && <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                        className="text-white flex flex-nowrap lg:text-xl font-light translate-y-6 justify-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor"
                                className="icon icon-tabler text-yellow-500 icons-tabler-filled icon-tabler-alert-triangle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>
                        </span>

                        {errorMessage} Please <Link className="mx-2 underline hover:no-underline hover:text-blue-500 transition-all duration-200 ease-in-out" to='/Login'>Log in</Link>
                        instead
                    </motion.div>}
                    <motion.div
                        className="w-full gap-6 sm:gap-24 mx-auto grid grid-cols-1 mt-12 lg:grid-cols-2 items-start relative">
                        <form>
                            <div className="space-y-4">
                                <NewEmail emailValid={emailValid} enterValidEmail={enterValidEmail} setEmailValid={setEmailValid} />
                                <NewPassword needSpecialChar={needSpecialChar} first_pw_valid={first_pw_valid} acceptedInput={acceptedInput} canSubmit={canSubmit} handlePassword={handlePassword} />
                                <ConfirmNewPassword acceptedInput={acceptedInput} canSubmit={canSubmit} handleSecondEntry={handleSecondEntry} setCanSubmit={setCanSubmit} setNeedSpecialChar={setNeedSpecialChar} />
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
                            <AnimatePresence>
                                {canSubmit !== true && <NewPasswordGuide />}

                            </AnimatePresence>
                        </form>

                        <OAuthLogins />
                    </motion.div>
                </div>

            </section>
        </ErrorBoundary>


    )
}


