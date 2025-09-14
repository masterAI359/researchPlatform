import { RootState } from '@/ReduxToolKit/store';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ComponentLoader from '../../../Shared/Loaders/ComponentLoader';
import { AnimatePresence } from 'framer-motion';
import InputOptions from '../phase1/components/paths/InputOptions';
const BlueSkyPosts = lazy(() => import('../../blueSky/Containers/BlueSkyPosts'));
import HeroContainer from './HeroContainer';
const Content = lazy(() => import('./Content'));
import Notes from '../notes/Notes';
import BlueSkySkeleton from '../../blueSky/skeletons/BlueSkySkeleton';
import PanelContainer from "@/components/React/features/investigate/phase3/controls/containers/PanelContainer";

export default function InvestigationWorkSpace() {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const post = useSelector((state: RootState) => state.bluesky.popoverPost);
    const { display, notes, pov } = investigateState;
    const { idea, showOptions } = pov;
    const { showBlueSkySearch, showMindMap, showGetArticlesModal } = display;
    const { takingNotes } = notes;
    const notesRef = useRef(null);
    const containerRef = useRef(null);
    const [notePosition, setNotePosition] = useState({ x: 20, y: 200 });
    const [constraints, setConstraints] = useState(null);

    console.log(showBlueSkySearch)

    function handleDragConstraints() {
        if (!containerRef.current || !notesRef.current) return;

        const constraintsRect = containerRef.current.getBoundingClientRect();
        const notesRect = notesRef.current.getBoundingClientRect();
        setConstraints({
            top: 0,
            left: 0,
            right: constraintsRect.width - notesRect.width,
            bottom: constraintsRect.height - notesRect.height
        });
    };


    useEffect(() => {

        if (containerRef.current && notesRef.current) handleDragConstraints();
    }, []);


    return (
        <section
            ref={containerRef}
            id='workspace'
            className={`w-full h-auto flex flex-col grow 
            justify-start items-center transition-opacity duration-200 
            ${showGetArticlesModal
                    ? 'delay-0 opacity-50 pointer-events-none'
                    : 'delay-500 opacity-100 pointer-events-auto'}
            `}
        >

            {!idea && showOptions &&
                <InputOptions />
            }

            {showBlueSkySearch === false && (showOptions === false) &&
                <HeroContainer
                    key={'HeroContainer'} />
            }

            {showBlueSkySearch &&
                <Suspense fallback={<BlueSkySkeleton context={'investigate'} />}>
                    <BlueSkyPosts context={'investigate'} />
                </Suspense>
            }

            {!showMindMap &&
                <Suspense
                    fallback={<ComponentLoader />}
                >
                    <Content />
                </Suspense>
            }
            <PanelContainer />

            <AnimatePresence>
                {takingNotes &&

                    <Notes
                        key={'notepad'}
                        notesRef={notesRef}
                        constraints={constraints}
                        notePosition={notePosition}
                        setNotePosition={setNotePosition}
                    />
                }
            </AnimatePresence>

        </section>
    )
}