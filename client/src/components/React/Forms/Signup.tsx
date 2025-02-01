import { supabase } from "@/SupaBase/supaBaseClient"
import { isAuthenticated, getUserName, getUserPassword, getEmail } from "@/ReduxToolKit/Reducers/Athentication/Authentication"
import { requiredInput } from "@/helpers/validation"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"


export default function Signup() {
    const [inputEmail, setGetEmail] = useState()
    const [inputPassword, getPassword] = useState()
    const [acceptedInput, setAcceptedInput] = useState<boolean>(null)
    const dispatch = useDispatch()
    const email = useSelector((state: RootState) => state.auth.email)
    const password = useSelector((state: RootState) => state.auth.password)

    const investigateState = useSelector((state: RootState) => state.investigation)
    console.log(investigateState)


    const handleSignIn = (e: any) => {

        setGetEmail(e.target.value)
    }

    const handlePassword = (e: any) => {

        getPassword(e.target.value)
    }


    const submitAuth = (e: any) => {
        e.preventDefault()
        requiredInput(inputEmail, inputPassword, setAcceptedInput)

        if (acceptedInput) {
            dispatch(getEmail(inputEmail))
            dispatch(getUserPassword(inputPassword))
        }

    }

    useEffect(() => {

        const logInUser = async () => {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email !== null ? email : null,
                password: password,
            })

            if (error) {
                console.log(error)
            } else if (data) {
                console.log(data)
                dispatch(isAuthenticated(true))
            }

        }

        if (email !== null && password !== null) {
            logInUser()
        }

        console.log(acceptedInput)

    }, [dispatch, getEmail, inputPassword])

    return (
        <section className="lg:p-8 overflow-hidden bg-black animate-fade-in">
            <div className="mx-auto 2xl:max-w-7xl py-24 lg:px-16 md:px-12 px-8 xl:px-36">
                <div className="border-b pb-12">
                    <p className="text-3xl tracking-tight font-light lg:text-4xl text-white">
                        Sign up.
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">Create an account with us.</p>
                </div>
                <div className="w-full gap-24 mx-auto grid grid-cols-1 mt-12 lg:grid-cols-2 items-end">
                    <form onSubmit={submitAuth}>
                        <div className="space-y-6">
                            <div className="col-span-full">
                                <label htmlFor="email" className="block mb-3 text-sm font-medium text-white">
                                    Email
                                </label>
                                <input onChange={(e) => handleSignIn(e)} id="email" name="email" type="email" autoComplete="email" placeholder="email@example.com" className="block w-full px-3 py-3 border-2 border-zinc-100 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 focus:border-black focus:bg-transparent focus:outline-none focus:ring-black sm:text-sm placeholder-zinc-500 h-10" required />
                            </div>
                            <div className="col-span-full">
                                <div>
                                    <label htmlFor="password" className="block mb-3 text-sm font-medium text-white">
                                        Password
                                    </label>
                                    <input onChange={(e) => handlePassword(e)} id="password" name="password" type="password" placeholder="Type password here..." autoComplete="current-password" className="block w-full px-3 py-3 border-2 border-zinc-100 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 focus:border-black focus:bg-transparent focus:outline-none focus:ring-black sm:text-sm placeholder-zinc-500 h-10" required />
                                </div>

                            </div>
                            <div className="col-span-full">
                                <div>
                                    <label htmlFor="confirm_password" className="block mb-3 text-sm font-medium text-white">
                                        Confirm Password
                                    </label>
                                    <input id="confirm_password" name="password" type="password" placeholder="Retype password here..." autoComplete="current-password" className="block w-full px-3 py-3 border-2 border-zinc-100 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 focus:border-black focus:bg-transparent focus:outline-none focus:ring-black sm:text-sm placeholder-zinc-500 h-10" required />
                                </div>

                            </div>
                            <div className="col-span-full">
                                <button type="submit" className="text-sm py-2 px-4 border focus:ring-2 h-10 rounded-full border-zinc-100 
                                bg-white hover:bg-black text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white
                                 w-full inline-flex items-center justify-center ring-1 ring-transparent">
                                    Submit
                                </button>
                            </div>
                            <div>
                                <p className="font-medium text-sm leading-tight text-white mx-auto">
                                    Already a member?
                                    <a href="/login" className="text-white underline hover:text-blue-400 ml-3">
                                        Log in now
                                    </a>
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
                        <button className="text-sm py-2 px-4 border focus:ring-2 rounded-full border-zinc-100 bg-zinc-100 hover:bg-zinc-50 duration-200 focus:ring-offset-2 gap-3 focus:ring-black text-black w-full inline-flex items-center justify-between ring-1 ring-transparent h-10" type="button">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x" width={24} height={18} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                </svg>
                            </span>
                            <span>Signup with X &nbsp; →</span>
                        </button>
                        <button className="text-sm py-2 px-4 border focus:ring-2 rounded-full border-zinc-100 bg-zinc-100 hover:bg-zinc-50 duration-200 focus:ring-offset-2 gap-3 focus:ring-black text-black w-full inline-flex items-center justify-between ring-1 ring-transparent h-10" type="button">
                            <span><svg fill="none" height={18} viewBox="0 0 32 32" width={24} xmlns="http://www.w3.org/2000/svg"><path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4" /><path d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z" fill="#34A853" /><path d="M8.16007 18.7688C7.85848 17.8977 7.68395 16.9643 7.68395 15.9999C7.68395 15.0354 7.85849 14.1021 8.1442 13.231L8.13621 13.0455L3.67126 9.64734L3.52518 9.71544C2.55696 11.6132 2.0014 13.7444 2.0014 15.9999C2.0014 18.2555 2.55696 20.3865 3.52518 22.2843L8.16007 18.7688Z" fill="#FBBC05" /><path d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z" fill="#EB4335" />
                            </svg>
                            </span>
                            <span>Signup with Google &nbsp; →</span>
                        </button>
                        <button className="text-sm py-2 px-4 border focus:ring-2 rounded-full border-zinc-100 bg-zinc-100 hover:bg-zinc-50 duration-200 focus:ring-offset-2 gap-3 focus:ring-black text-black w-full inline-flex items-center justify-between ring-1 ring-transparent h-10" type="button">
                            <span>
                                <svg height={18} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 2C8.265 2 2 8.265 2 16C2 22.195 6.0075 27.4275 11.5725 29.2825C12.2725 29.405 12.535 28.985 12.535 28.6175C12.535 28.285 12.5175 27.1825 12.5175 26.01C9 26.6575 8.09 25.1525 7.81 24.365C7.6525 23.9625 6.97 22.72 6.375 22.3875C5.885 22.125 5.185 21.4775 6.3575 21.46C7.46 21.4425 8.2475 22.475 8.51 22.895C9.77 25.0125 11.7825 24.4175 12.5875 24.05C12.71 23.14 13.0775 22.5275 13.48 22.1775C10.365 21.8275 7.11 20.62 7.11 15.265C7.11 13.7425 7.6525 12.4825 8.545 11.5025C8.405 11.1525 7.915 9.7175 8.685 7.7925C8.685 7.7925 9.8575 7.425 12.535 9.2275C13.655 8.9125 14.845 8.755 16.035 8.755C17.225 8.755 18.415 8.9125 19.535 9.2275C22.2125 7.4075 23.385 7.7925 23.385 7.7925C24.155 9.7175 23.665 11.1525 23.525 11.5025C24.4175 12.4825 24.96 13.725 24.96 15.265C24.96 20.6375 21.6875 21.8275 18.5725 22.1775C19.08 22.615 19.5175 23.455 19.5175 24.7675C19.5175 26.64 19.5 28.145 19.5 28.6175C19.5 28.985 19.7625 29.4225 20.4625 29.2825C23.2418 28.3443 25.6568 26.5581 27.3677 24.1753C29.0786 21.7926 29.9993 18.9334 30 16C30 8.265 23.735 2 16 2Z" fill="currentColor" />
                                </svg>
                            </span>
                            <span>Signup with GitHub &nbsp; →</span>
                        </button>
                        <button className="text-sm py-2 px-4 border focus:ring-2 rounded-full border-zinc-100 bg-zinc-100 hover:bg-zinc-50 duration-200 focus:ring-offset-2 gap-3 focus:ring-black text-black w-full inline-flex items-center justify-between ring-1 ring-transparent h-10" type="button">
                            <span>
                                <svg height={18} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5621 5.45739C13.4857 5.50195 11.6671 6.44248 11.6671 8.52785C11.7528 10.9061 13.9621 11.7401 14 11.7401C13.9621 11.7847 13.6665 12.8763 12.7907 14.0205C12.0956 15.0062 11.3242 16 10.1528 16C9.0385 16 8.6385 15.3431 7.35278 15.3431C5.97203 15.3431 5.58135 16 4.5242 16C3.35277 16 2.52419 14.953 1.79127 13.9766C0.839097 12.6986 0.0297778 10.6931 0.00120634 8.76747C-0.0180484 7.74707 0.19189 6.74403 0.72481 5.89206C1.47699 4.70265 2.81985 3.89524 4.28631 3.86862C5.40992 3.83331 6.40992 4.58747 7.09563 4.58747C7.75278 4.58747 8.98135 3.86862 10.3714 3.86862C10.9714 3.86919 12.5714 4.03762 13.5621 5.45739ZM7.0006 3.66488C6.8006 2.73303 7.35278 1.80119 7.86707 1.20677C8.52421 0.487918 9.5621 0 10.4571 0C10.5143 0.931848 10.1522 1.84575 9.50496 2.51136C8.92421 3.23021 7.92421 3.77138 7.0006 3.66488Z" fill="currentColor" />
                                </svg>
                            </span>
                            <span>Signup with Apple &nbsp; →</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}


