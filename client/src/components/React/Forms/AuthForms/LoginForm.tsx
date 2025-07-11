import Email from "../InputFields/Email";
import Password from "../InputFields/Password";
import AuthFooterLinks from "../InputFields/AuthFooterLinks";

export default function LoginForm({ successfull, acceptedInput, setUserPassword, setUserEmail, validEmail, submitAuth }: LoginFormProps) {

    return (
        <form autoComplete="off">
            {successfull === false && <p className="text-zinc-400 font-light lg:text-2xl -translate-y-6">
                The email or password you entered is incorrect. Please try again.
            </p>
            }
            <Email setUserEmail={setUserEmail} validEmail={validEmail} />
            <div className="space-y-6">
                <Password setUserPassword={setUserPassword} acceptedInput={acceptedInput} />
                <div className="col-span-full">
                    <button
                        onClick={(e) => { submitAuth(e) }}
                        type="submit"
                        className="text-sm py-2 px-4 border focus:ring-2 h-10 rounded-full border-zinc-100 
                            bg-white hover:bg-black text-black duration-200 focus:ring-offset-2 
                            focus:ring-white hover:text-white w-full inline-flex items-center 
                            justify-center ring-1 ring-transparent">
                        Submit
                    </button>
                </div>
                <AuthFooterLinks />
            </div>
        </form>
    );
};