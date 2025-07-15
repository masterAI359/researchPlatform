import { time } from "framer-motion";

interface Header {
    title: string,
    subheader?: string
}

const step1: Header = {
    title: 'Tackle an idea',
    subheader: 'from the top down'
};

const step2: Header = {
    title: 'Your angle of approach',
};

const step3: Header = {
    title: 'Acknowledge biases'
};

const step4: Header = {
    title: 'Underlying premises? (optional)'
};

const step5: Header = {
    title: 'Search for evidence'
};

export const stepContent: Header[] = [step1, step2, step3, step4, step5];