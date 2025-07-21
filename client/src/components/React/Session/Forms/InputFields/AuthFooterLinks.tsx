import { Link } from "react-router-dom";


export default function AuthFooterLinks() {


    return (
        <>
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
        </>
    );
};


