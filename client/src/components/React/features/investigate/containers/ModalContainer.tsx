import { AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { BackToSearch } from "../Evidence/modals/BackToSearch"
import { GetTheseArticles } from "../Evidence/modals/GetTheseArticles"

export default function ModalContainer() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { display } = investigateState
    const { showBackToSearchModal, showGetArticlesModal } = display

    return <AnimatePresence mode="wait">
        {showBackToSearchModal ? <BackToSearch key="goBack" /> : null}
        {showGetArticlesModal && <GetTheseArticles key="getContent" />}
    </AnimatePresence>
}