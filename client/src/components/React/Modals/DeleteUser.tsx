import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import blueCheck from '../../../lotties/blueCheck.json'
import Loader from "../Loaders/Loader";
import { presentDeleteModal } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import { useNavigate } from "react-router-dom";
import { clearAuthSlice } from "@/ReduxToolKit/Reducers/Athentication/Authentication";

const variants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
}


export default function DeleteUserAccount({ }) {
    const id = useSelector((state: RootState) => state.auth.user_id)
    const [deleting, setDeleting] = useState<boolean>(null)
    const [deleteSuccessful, setDeleteSuccessful] = useState<boolean>(null)
    const [responseMessage, setResponseMessage] = useState<string>(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const redirect = () => {

        setTimeout(() => {

            navigate('/')
        }, 200);

    }

    const removeModal = () => {
        setTimeout(() => {

            dispatch(presentDeleteModal(false))
            redirect()
        }, 1500);
    }



    const deleteAccount = async (id: string) => {

        const encodedID = encodeURIComponent(id)

        console.log(encodedID)

        const options: OptionsTypes = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'text/plain',
            },
        };

        try {
            setDeleting(true)
            const deletion = await fetch(`/deleteUser?q=${encodedID}`, options)
            if (!deletion.ok) {
                throw new Error('Failed to connect to the database')
            }

            const response = await deletion.text()
            if (response) {
                setResponseMessage(response)
                setDeleteSuccessful(true)
                console.log(response)
            }

        } catch (error) {
            setDeleteSuccessful(false)
            console.log(error)
        } finally {
            setDeleting(false)
        }
    }

    useEffect(() => {


        if (deleteSuccessful) {
            dispatch(clearAuthSlice())
            removeModal()

        }

    }, [deleteSuccessful])

    console.log(deleteSuccessful)


    const modal = (
        <motion.div
            key='returnToSearch'
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.2, type: 'tween' }}
            className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
         xl:min-w-96 xl:min-h-80 w-80 flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-6 
        sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center bg-ebony mt-2 
        shadow-inset text-center">
            <div className="lg:min-w-0 lg:flex-1 max-w-sm mx-auto">
                <p className="text-white xl:text-3xl font-light tracking-tight">Delete your account?</p>
                <p className="mt-4">
                    <span className="text-2xl font-lighter text-white" />
                    <span className="text-base font-medium text-zinc-400">This action cannot be undone</span><br></br>
                </p>
                <p className="mx-auto mt-6 text-sm text-white" />
                {deleting === null && <DeleteAccountButtons id={id} deleteAccount={deleteAccount} />}
                {deleting === true && <PendingDeletion />}
                {deleteSuccessful === true && <Deleted />}

            </div>
        </motion.div>)


    return (
        createPortal(modal, document.body)
    )


}


function DeleteAccountButtons({ deleteAccount, id }) {
    const dispatch = useDispatch()

    return (
        <div className="inline-flex flex-no-wrap gap-x-8 items-center mt-8 w-full">
            <button onClick={() => dispatch(presentDeleteModal(false))} type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                No
            </button>
            <button onClick={() => deleteAccount(id)} type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                Yes
            </button>

        </div>
    )
}


function PendingDeletion() {

    return (
        <div className="flex flex-nowrap justify-center w-full h-fit">
            <div className="flex items-center gap-x-6 w-fit mx-auto">
                <div className="text-zinc-400 font-light tracking-tight text-sm">
                    Deleting your account
                </div>
                <div className="w-7 h-7 flex justify-center items-center relative">
                    <Loader />
                </div>
            </div>
        </div>
    )
}



function Deleted() {

    return (
        <div className="flex flex-nowrap justify-center w-full h-fit">
            <div className="flex items-center w-fit mx-auto">
                <div className="text-zinc-400 font-light tracking-tight text-sm">
                    Account Deleted Successfully
                </div>
                <div className="w-7 h-7 flex justify-center items-center relative">
                    <Lottie animationData={blueCheck} loop={false} autoPlay={true} className="absolute h-full w-full" />
                </div>
            </div>
        </div>
    )
}