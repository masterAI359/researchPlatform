import { supabase } from "@/SupaBase/supaBaseClient"
import { useEffect, useState } from "react"
import { requiredInput, emailValidation } from "@/helpers/validation"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import LoggingIn from "./AuthNotifications/LoggingIn"
import { AnimatePresence } from "framer-motion"
import { googleAuth } from "@/helpers/OauthLogin"
import Password from "./InputFields/Password"
import SessionManager from "../AppRouting/SessionManager"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { supabaseSignIn } from "@/helpers/FetchRequests"
import { useAppdispatch } from "@/Hooks/appDispatch"
import { AppDispatch } from "@/ReduxToolKit/store"
import { fetchUserCredentials } from "@/ReduxToolKit/Reducers/Athentication/Authentication"

export default function Login() {
    const id = useSelector((state: RootState) => state.auth.user_id);
    const [userEmail, setUserEmail] = useState<string>(null)
    const [userPassword, setUserPassword] = useState<string>(null)
    const [validEmail, setValidEmail] = useState<boolean>(null)
    const [acceptedInput, setAcceptedInput] = useState<boolean>(null)
    const [loggingIn, setLoggingIn] = useState<boolean>(false)
    const [successfull, setSuccessful] = useState<boolean>(null)
    const [errorMessage, setErrorMessage] = useState<string>(null)
    const navigate = useNavigate()
    const dispatch = useAppdispatch();

    const redirectUser = () => {
        setTimeout(() => {
            navigate('/Profile')
        }, 1500)
    }

    const handleEmail = (e: any) => {
        setUserEmail(e.target.value)

    }

    const handlePassword = (e: any) => {
        setUserPassword(e.target.value)

    }


    const logInUser = async () => {


        const signin = await supabaseSignIn(userEmail, userPassword, setLoggingIn, setSuccessful, dispatch, fetchUserCredentials);
        if (signin) {
            console.log(signin)
            setSuccessful(true);
            redirectUser();
        }

        if (signin === false) {
            console.log(signin)
            setSuccessful(false)
        }
    }


    const submitAuth = async (e: any) => {
        e.preventDefault()

        logInUser()

    }

    useEffect(() => {

        console.log(id)

        if (userEmail) {
            emailValidation(userEmail, setValidEmail)
        }

        if (userEmail && userPassword) {
            requiredInput(userEmail, userPassword, setAcceptedInput)
        }

    }, [userEmail, userPassword, id])

    return (
        <section className={`lg:p-8 overflow-hidden bg-black animate-fade-in`}>
            {!id && <SessionManager />}
            <AnimatePresence>
                {loggingIn && <LoggingIn successful={successfull} setLoggingIn={setLoggingIn} />}
            </AnimatePresence>
            <div className="mx-auto 2xl:max-w-7xl py-24 lg:px-16 md:px-12 px-8 xl:px-36">
                <div className="border-b pb-12">
                    <p className="text-3xl tracking-tight font-light lg:text-4xl text-white">
                        Log in.
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">log in to manage your saved content.</p>
                </div>
                <div className="w-full gap-24 mx-auto grid grid-cols-1 mt-12 lg:grid-cols-2 items-center">

                    <form autoComplete="off">
                        {successfull === false && <p className="text-zinc-400 font-light lg:text-2xl -translate-y-6">The email or password you entered is incorrect. Please try again.</p>}
                        <div className="space-y-6">
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
                            <Password handlePassword={handlePassword} acceptedInput={acceptedInput} />
                            <div className="col-span-full">
                                <button onClick={(e) => { submitAuth(e) }} type="submit" className="text-sm py-2 px-4 border focus:ring-2 h-10 rounded-full border-zinc-100 
                                bg-white hover:bg-black text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white
                                 w-full inline-flex items-center justify-center ring-1 ring-transparent">
                                    Submit
                                </button>
                            </div>
                            <div>
                                <p className="font-medium text-sm leading-tight text-white mx-auto">Forgot your password?

                                    <Link className="text-white underline hover:text-blue-400 ml-3" to={'/EmailForReset'}>

                                        Reset Password
                                    </Link>

                                </p>
                            </div>
                            <div>
                                <p className="font-medium text-sm leading-tight text-white mx-auto">Don't have an account?

                                    <Link className="text-white underline hover:text-blue-400 ml-3" to={'/Signup'}>

                                        Join now
                                    </Link>

                                </p>
                            </div>
                        </div>
                    </form>
                    <div className="flex flex-col text-center space-y-2">
                        <div className="py-3 relative">
                            <div className="flex items-center absolute inset-0" aria-hidden="true">
                                <div className="w-full border-t" />
                            </div><div className="flex relative justify-center">
                                <span className="text-sm bg-white px-2 text-black">Or continue with</span>
                            </div>
                        </div>
                        <button onClick={() => googleAuth()} className="text-sm py-2 px-4 border focus:ring-2 rounded-full border-zinc-100 bg-zinc-100 hover:bg-zinc-50 
                        duration-200 focus:ring-offset-2 gap-3 focus:ring-black text-black w-full inline-flex items-center justify-between ring-1 ring-transparent h-10" type="button">
                            <span><svg fill="none" height={18} viewBox="0 0 32 32" width={24} xmlns="http://www.w3.org/2000/svg"><path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4" /><path d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z" fill="#34A853" /><path d="M8.16007 18.7688C7.85848 17.8977 7.68395 16.9643 7.68395 15.9999C7.68395 15.0354 7.85849 14.1021 8.1442 13.231L8.13621 13.0455L3.67126 9.64734L3.52518 9.71544C2.55696 11.6132 2.0014 13.7444 2.0014 15.9999C2.0014 18.2555 2.55696 20.3865 3.52518 22.2843L8.16007 18.7688Z" fill="#FBBC05" /><path d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z" fill="#EB4335" />
                            </svg>
                            </span>
                            <span>Sign in with Google &nbsp; →</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}




//     try {
//         setLoggingIn(true)
//         const { data, error } = await supabase.auth.signInWithPassword({
//             email: userEmail,
//             password: userPassword
//         })
//         if (error) {
//             setSuccessful(false)
//         } else if (data) {
//             setSuccessful(true)
//             redirectUser()
//         }
//     } catch (error) {
//     }
