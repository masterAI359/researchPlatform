import { RootState } from '@/ReduxToolKit/store';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ComponentLoader from '../../../Loaders/ComponentLoader';
import { AnimatePresence } from 'framer-motion';
import InputOptions from '../getPerspective/components/paths/InputOptions';
const BlueSkyPosts = lazy(() => import('../../blueSky/containers/BlueSkyPosts'));
import HeroContainer from './HeroContainer';
const Content = lazy(() => import('./Content'));
import Notes from '../notes/Notes';
import PanelContainer from './PanelContainer';

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
                <InputOptions />
            }

            {showBlueSkySearch === false &&
                <HeroContainer
                    key={'HeroContainer'} />
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