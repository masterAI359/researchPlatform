
//TODO: create a thumbnail that represents what the user's conclusions were from their research

export default function Thumbnail({ investigation }) {




    return (
        <div className="bg-gradient-to-tr from-ebony to-mirage rounded-2xl h-60 w-72 flex items-center justify-center">
            {investigation.changed_opinion === true ? <Changed changed={investigation.changed_opinion} /> : null}
        </div>
    )
}


function Changed({ changed }) {

    return (
        <div className="w-fit h-fit flex flex-col items-center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIElEQVR4nO3cT2oUQRiG8c+1wSP4Jwi6EtGlIt5AF0qC8Q5CPIB4mhDwCkHIIjcIEW8griQulAiPdNKBsphRp7un+u2u9wE3SWr6q/kx6cxMOxHOTSVgq/k39hwuzjFeAmfAL+C17xQNjMuMIoRhFEEMo4x0As8xzpZ8zSf6ER4ZzXljB3ix5Hs+0ZfGSH7GKCoYyc8aRQUjWWMUFYxkrVFUMJLbMIoKRnJbRlHBSG7TKCoYyW0bRQUjOYZRVDCSYxlFBSM5plFUMJJjG0UFI5nBKCoYl1WPwr/fXPprHe7wrs3/pXt6YhQGmTcKA2CMADJPFAbCaOpw7CGaH0rXhgbpPIi7yCBi4UeIVhhEKwyiFQY5vxMeAO+Bj8AJ8B2RojDoaAFX2td1PiFcrL6vXutHCbgFHDGBYvW99VpfPOAR8IWJFKvvr9f6ogFPgJ8L9v0D2AO2gTvA1RFn/KPS60v/mvqaDwzsAzdDJGoAaU/gRwteQHsTYlEJSPPqa54cRhUg7aMj/9N2P0SjApCH2YzNSX0zRKMCkOYZeNpeCEcFIM3LIWnbIRwVgHzOZrwdwlEByGk240YIRwUg2gNmGUQs/AhZ7Q4qXWnQtTf0BktXer9rb+gNlq70ftfe0BssXen9rr3Zb3Bq8xpErJpAgGvZuN9CrcpA7mbjnoRalYHsZOMehFqVgexn474LtWoB4eIijubqmbR7oVZFIB+yUY9DsRpAgLf5nMCzUGzuIMBue0lT2mGoNlcQYHPBrynay2RvhGpzAQE22ucZr9q/ppZdEvs4lBsaRLjmMtmnoV4+dd/1oh0C12MK5ZP3XS/WMfA8plS+g77rR+y0/e92B80zcOB+TLF8V6XXuyyDiGUQsQwilkHEMki5D27sVIdjD9EoH3g5CZQOx+3b/DCGROlwzD7NF2MolA7H69r8MRQ/DBihD0mO2lEwhg4KxtBBwRg6KBhDBwVj6KBgDB0UjKGDYgwhFGMIoRhDCMUYQijGEEIxhhCKMUYK2FqAcrbka1tjzVlV//EmV33vZwijGEMIxRhCKMYQO9H7BO5iMv0G3ICITnQ+umwAAAAASUVORK5CYII=" alt="change"></img>
            <figcaption className="text-zinc-400 text-xs 2xl:text-lg font-light tracking tight">
                {changed === true ? 'Your perspective changed' : 'Your research did not move you'}
            </figcaption>
        </div>
    )
}


function Validated() {

    return (<div></div>)
}