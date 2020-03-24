import React from 'react';

import './UserProfile.scss';

const UserProfile = props => {
    return (
        <div 
            className="UserProfile"
            style={{
                backgroundImage: `url(${props.img})`
            }}>
            <h1>{props.name.toUpperCase()}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default UserProfile;