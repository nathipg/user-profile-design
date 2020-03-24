import React from 'react';

import UserProfile from './components/UserProfile/UserProfile';
import UserInfo from './components/UserInfo/UserInfo';
import Button from './components/Button/Button';

import userImg from './assets/profile-image.jpg';

import './App.scss';

function App() {
    const infos = [
        {number: 35, label: 'projects'},
        {number: 91, label: 'twitter'},
        {number: 10, label: 'github'}
    ];

    return (
        <div className="App">
            <UserProfile
                img={userImg}
                name="Nathália Pissuti"
                description="Web Developer" />
            <UserInfo
               infos={infos} />
            <a 
                href="https://twitter.com/nathaliapissuti"
                target="_blank" 
                rel="noopener noreferrer">
                <Button>Follow</Button>
            </a>
        </div>
    );
}

export default App;
