import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'
import Img from '../images/img-1.png'


function CardItem (props) {
    return (
        <>
            <li className='cards__item'>
                <Link 
                className='cards__item__link' to={props.path.Img}>
                   <figure className='cards__item__pic-wrap' data-category={props.label}>
                       <img src={Img}
                       className='cards__item__img'  src="/"/>
                   </figure>
                   <div className='cards__item__info'>
                       <h5 className='cards__item__text'>{props.text}</h5>
                   </div>
                </Link>
            </li>
            
        </>
    );
}

export default CardItem;

