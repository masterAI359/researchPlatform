

export const requiredInput = (emailString: string, passwordString: string, setterFunction: Function) => {

    const validateEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm

    const isValidEmail = validateEmail.test(emailString)

    let splitPassword = passwordString.split('')

    if (splitPassword.length >= 8 && isValidEmail) {

        setterFunction(true)
    }
}