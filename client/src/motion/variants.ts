export const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
}


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