import React from 'react';
import "/src/styles/home/left-image.css";

function LeftImage({ image, title, description }) {
    return (
        <div className={'home-li-container'}>
            <div className={'home-li-content'}>
                <div className={'home-li-text-container'}>
                    <h2 className={'home-li-title'}>{title}</h2>
                    <div className={'home-li-description'}>{description}</div>
                </div>
                <img src={image} alt={'home-li'} className={'home-li'}/>
            </div>
        </div>
    );
}

export default LeftImage;