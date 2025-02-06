

export const requiredInput = (emailString: string, passwordString: string, setterFunction: Function) => {

    const validateEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm

    const isValidEmail = validateEmail.test(emailString)

    console.log(isValidEmail)

    let splitPassword = passwordString.split('')

    let valid = splitPassword.length >= 8

    console.log(valid)

    if (splitPassword.length >= 8 && isValidEmail) {

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

