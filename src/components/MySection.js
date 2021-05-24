import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MySection.css';


function MySection() {
    return (
        <div className='my-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>ПРИКЛЮЧЕНИЯ ЖДУТ</h1>
            <p>А ВЫ ЧЕГО ЖДЕТЕ?</p>
            <div className="my-btns">
                <Button className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    НАЧНЁМ
                </Button> 
                <Button className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    ПОСМОТРЕТЬ ВИДЕО <i className='far
                    fa-play-circle' />
                </Button> 
            </div>
        
            
        </div>
    )
}

export default MySection
