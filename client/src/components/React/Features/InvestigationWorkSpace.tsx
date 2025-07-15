import { RootState } from '@/ReduxToolKit/store';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ComponentLoader from '../Loaders/ComponentLoader';
import { AnimatePresence } from 'framer-motion';
const InputOptions = lazy(() => import('../Investigate/Steps/InputOptions'));
const BlueSkyPosts = lazy(() => import('../BlueSky/BlueSkyPosts'));
const HeroContainer = lazy(() => import('../Containers/HeroContainer'));
const Content = lazy(() => import('../Containers/Content'));
import Notes from '../Investigate/Notes/Notes';
import PanelContainer from '../Containers/PanelContainer';

export default function InvestigationWorkSpace() {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { display, notes } = investigateState;
    const { showBlueSkySearch } = display;
    const { takingNotes } = notes;
    const notesRef = useRef(null);
    const containerRef = useRef(null);
    const [notePosition, setNotePosition] = useState({ x: 20, y: 200 });
    const [constraints, setConstraints] = useState(null);

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
            className='w-full h-full flex flex-col grow justify-center items-center'
        >

            {showBlueSkySearch === null &&
                <Suspense fallback={<ComponentLoader />}>
                    <InputOptions />
                </Suspense>
            }

            {showBlueSkySearch === false &&
                <Suspense fallback={<ComponentLoader />}>
                    <HeroContainer
                        key={'HeroContainer'} />
                </Suspense>
            }

            {showBlueSkySearch &&
                <Suspense fallback={<ComponentLoader />}>
                    <BlueSkyPosts context={'investigate'} />
                </Suspense>
            }

            <Suspense fallback={<ComponentLoader />}>
                <Content />
            </Suspense>

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