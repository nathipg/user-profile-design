import React from 'react';

import './Info.scss';

const Info = props => {
    return (
        <div className="Info">
            <span className="number">{props.number}</span>
            <span className="label">{props.label}</span>
        </div>
    );
};

export default Info;