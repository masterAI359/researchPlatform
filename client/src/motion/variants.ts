
export const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
}

export const headerTransitions = {
    initial: { opacity: 0 },
    open: { opacity: 1, transition: { duration: 0.2, delay: 0.2, type: 'tween' } },
    closed: { opacity: 0, transition: { duration: 0.2, delay: 0, type: 'tween' } }
};


export const hideTop = {
    show: {
        y: 0,
        opacity: 1
    },
    hide: {
        y: -100,
        opacity: 0
    }
};


export const delays = {
    open: {
        opacity: 1,
        transition: {
            duration: 0.2,
            type: 'tween',
            delay: 0.3
        }
    },
    closed: {
        opacity: 0,
        transition: {
            duration: 0.2,
            type: 'tween'
        }
    }
}


export const scaleUpDown = {
    closed: {
        opacity: 0,
        scale: 0,
    },
    open: {
        opacity: 1,
        scale: 1

    }
};


export const investigationsVariants = {
    open: {
        opacity: 1,
        transition: {
            duration: 0.2,
            type: 'tween',
            delay: 0.3
        }
    },
    closed: {
        opacity: 0,
        transition: {
            duration: 0.2,
            type: 'tween'
        }
    }
}


export const searchResultsVariants = {
    open: {
        opacity: 1,
        transition: {
            duration: 0.2,
            type: 'tween',
            delay: 0.3
        }
    },
    closed: {
        opacity: 0,
        transition: {
            duration: 0.2,
            type: 'tween',
            delay: 0
        }
    }
}


