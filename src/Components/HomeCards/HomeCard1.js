import React, { useState } from 'react';
import "./HomeCard1.css";

function HomeCard({ imgUrl, title, description, followLinks }) {
    const [currentLinkIndex, setCurrentLinkIndex] = useState(0);

    const handleFollowUsClick = () => {
        const currentLink = followLinks[currentLinkIndex];
        window.open(currentLink, '_blank'); // Opens the current link in a new tab
        setCurrentLinkIndex((currentLinkIndex + 1) % followLinks.length); // Cycle to the next link
    };

    return (
        <div className="esport-card">
            <img
                src={imgUrl}
                className='esport-card-img'
                alt='teams'
            />
            <div className='esport-card-description'>
                <h1 className='esport-card-name'> {title}</h1>
                <p> {description}</p>
                
            </div>
            <button className='esport-card-button' onClick={handleFollowUsClick}>
                    Follow Us
                </button>
        </div>
    );
}

export default HomeCard;