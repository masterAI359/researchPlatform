
const checkSpecialChars = (arr: string[]) => {

    const checkChars = /[!@#$%^&*(),.?":{}|<>]/

    const isFalse = (element: boolean) => element === false

    const chars = arr.map((char: string) => {

        return checkChars.test(char)
    })

    return chars.every(isFalse)
}



export const requiredInput = (emailString: string, passwordString: string, setterFunction: Function) => {

    const validateEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm

    const isValidEmail = validateEmail.test(emailString)


    let splitPassword = passwordString.split('')

    let validLength = splitPassword.length >= 8


    const noSpecialChars = checkSpecialChars(splitPassword)

    if (validLength && isValidEmail && !noSpecialChars) {
        return setterFunction(true)
    }
}


export const emailValidation = (emailEvaluated: string, setter: Function) => {

    const validateEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm

    const isValidEmail = validateEmail.test(emailEvaluated)

    if (isValidEmail) {
        return setter(true)
    } else {
        return setter(false)
    }

}


export const confirmPassword = (firstEntry: string, secondEntry: string, setter: Function) => {

    console.log(firstEntry, secondEntry)

    if (firstEntry === secondEntry) {
        return setter(true)
    } else {
        return setter(false)
    }

}

