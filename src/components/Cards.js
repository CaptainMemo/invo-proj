import React from 'react';
import './Cards.css';
import Img1 from '../images/img-6.jpg';
import Img2 from '../images/img-4.jpg';
import Img3 from '../images/img-5.jpg';





function Cards(props) {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        
                      <img 
                       src={Img1}
                       width='500px' height='auto'
                       text='Explore the hidden waterfall deep
                       inside the Amazon Jungle'
                       /*label='Adventure'
                       path='/services'*/
                       alt='Business'
                      /> 
                      <img 
                       src={Img2}
                       width='500px' height='auto'
                       text='Explore the hidden waterfall deep
                       inside the Amazon Jungle'
                       /*label='Adventure'
                       path='/services'*/
                       alt='Services'
                      />
                      <img 
                       src={Img3}
                       width='500px' height='auto'
                       text='Explore the hidden waterfall deep
                       inside the Amazon Jungle'
                       /*label='Adventure'
                       path='/services'*/
                       alt='SignUp'
                      />
                      
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Cards;
