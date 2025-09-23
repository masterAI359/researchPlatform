import { useState } from 'react';

export function useScrollWithShadow() {
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);

    const onScrollHandler = (event) => {
        setScrollTop(event.target.scrollTop);
        setScrollHeight(event.target.scrollHeight);
        setClientHeight(event.target.clientHeight);
    };

    function getBoxShadow() {
        const isBottom = clientHeight === scrollHeight - scrollTop;
        const isTop = scrollTop === 0;
        const isBetween = scrollTop > 0 && clientHeight < scrollHeight - scrollTop;

        let boxShadow = 'none';
        const top = 'inset 0 12px 5px -5px rgb(1 2 3 / 1)';
        const bottom = 'inset 0 -20px 9px -5px rgb(1 2 3 / 1)';

        if (isTop) {
            boxShadow = bottom;
        } else if (isBetween) {
            boxShadow = `${top}, ${bottom}`;
        } else if (isBottom) {
            boxShadow = top;
        }
        return boxShadow;
    }

    return { boxShadow: getBoxShadow(), onScrollHandler }
};