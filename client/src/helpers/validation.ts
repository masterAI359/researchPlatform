
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

    if (noSpecialChars) {
        return
    }

    if (validLength && isValidEmail && !noSpecialChars) {
        return setterFunction(true)
    } else {
        return setterFunction(false)
    }
}


export const emailValidation = (emailEvaluated: string, setter: Function) => {

    const validateEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm

    const isValidEmail = validateEmail.test(emailEvaluated)

    if (isValidEmail) {
        setter(true)
        return true
    } else if (isValidEmail === false && emailEvaluated !== '') {
        setter(false)
        return false
    } else if (emailEvaluated === '' || emailEvaluated === null) {
        setter(null)

    }

}


export const confirmPassword = (firstEntry?: string | null, secondEntry?: string | null, setter?: Function, errorSetter?: Function) => {


    const splitPW = firstEntry.split('')

    const longEnough = splitPW.length >= 8

    const noSpecialChars = checkSpecialChars(splitPW)

    if (noSpecialChars) {
        errorSetter('Password must contain at least one special character')
    }

    if (firstEntry === secondEntry && !noSpecialChars && longEnough) {
        setter(true)
        errorSetter(null)
    } else {
        setter(false)
    }

}

export const confirmFirstPassword = (firstEntry: string, setter: Function) => {


    const splitPW = firstEntry.split('')

    const longEnough = splitPW.length >= 8

    const noSpecialChars = checkSpecialChars(splitPW)

  

    if(!noSpecialChars && longEnough) {
        setter(true)
    } else {
        setter(false)
    }
}

