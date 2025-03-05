

export const requiredInput = (emailString: string, passwordString: string, setterFunction: Function) => {

    const validateEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm

    const isValidEmail = validateEmail.test(emailString)


    let splitPassword = passwordString.split('')

    let validLength = splitPassword.length >= 8


    if (validLength && isValidEmail) {

        setterFunction(true)
    }
}


export const emailValidation = (emailEvaluated: string, setter: Function) => {

    const validateEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm

    const isValidEmail = validateEmail.test(emailEvaluated)

    if (isValidEmail) {
        setter(true)
    } else {
        setter(false)
    }

}


export const confirmPassword = (firstEntry: string, secondEntry: string, setter: Function) => {

    if (firstEntry === secondEntry) {
        setter(true)
    }

}

