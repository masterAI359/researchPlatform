import { useEffect, useState } from "react";
import { emailValidation, requiredInput } from "@/helpers/validation";

export const useCheckCredentials = (userEmail: string | null, userPassword: string | null) => {
    const [validEmail, setValidEmail] = useState<boolean>(null)
    const [acceptedInput, setAcceptedInput] = useState<boolean>(null)


    useEffect(() => {

        if (userEmail) {
            emailValidation(userEmail, setValidEmail);
        };
        if (userEmail && userPassword) {
            requiredInput(userEmail, userPassword, setAcceptedInput);
        };

    }, [userEmail, userPassword]);


    return { validEmail, acceptedInput };

};