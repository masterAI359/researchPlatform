import { time } from "framer-motion";

interface Header {
    title: string,
    subheader?: string | null
}

const step1: Header = {
    title: 'Tackle an idea',
    subheader: 'from the top down'
};

const step2: Header = {
    title: 'Your angle of approach',
    subheader: null

};

const step3: Header = {
    title: 'Acknowledge biases',
    subheader: null
};

const step4: Header = {
    title: 'Underlying premises? (optional)',
    subheader: null
};

const step5: Header = {
    title: 'Search for evidence',
    subheader: null
};

export const stepContent: Header[] = [step1, step2, step3, step4, step5];