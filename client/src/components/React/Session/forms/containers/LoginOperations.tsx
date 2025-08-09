import LoginForm from "../AuthForms/LoginForm";
import OAuthLogins from "../InputFields/OauthLogins";

export default function LoginOperations({ submitAuth, successfull, setUserEmail, setUserPassword, validEmail, acceptedInput }) {

    return (
        <div
            className="w-full gap-24 mx-auto grid 
    grid-cols-1 mt-12 lg:grid-cols-2 items-center"
        >
            <LoginForm
                submitAuth={submitAuth}
                successfull={successfull}
                setUserEmail={setUserEmail}
                setUserPassword={setUserPassword}
                validEmail={validEmail}
                acceptedInput={acceptedInput}
            />
            <OAuthLogins
            />
        </div>
    );

};