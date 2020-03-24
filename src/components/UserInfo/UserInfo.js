import React from 'react';

import Info from './Info/Info';

import './UserInfo.scss';

const UserInfo = props => {
    return (
        <div className="UserInfo">
            {props.infos.map(info => <Info number={info.number} label={info.label} />)}
        </div>
    );
};

export default UserInfo;