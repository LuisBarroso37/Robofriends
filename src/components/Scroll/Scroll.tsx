import React from 'react';
import { ScrollProps } from '../../interfaces';

const Scroll = (props: ScrollProps) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;