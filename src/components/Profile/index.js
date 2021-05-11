import React from 'react';
import profile from '../../images/profile.png';
import logo from '../../images/logo.png';
import pika from '../../images/pika.jpg'
import './styles.scss';

const Profile = () => {
    return (
        <div className = "Profile">
            <div className = "image">
                <img src = {logo} />
            </div>
            <div className ="description">
            Online Riddle Master 

            
            </div>
            <div>
                <button onClick>
                    About
                    
                </button>
            </div>
        </div>
    )
}

export default Profile;