import { CSSProperties } from "react";

export const articleScrollerStyles: CSSProperties = {
    height: '85%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'end',
    overscrollBehavior: 'contain',
    overflowX: 'hidden',
};