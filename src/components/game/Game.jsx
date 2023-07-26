import React from 'react';
import starsvg from "../../img/star-svgrepo-com.svg";
import './style.css'
import {NavLink} from "react-router-dom";

function Game({title, img, reviews, index, star, item}) {
    return (
        <NavLink className="card-game" to={`/gamedescr/${index}`}>
            <img className='card-game-img' src={img} alt=""/>
            {star === 1 &&
            <div className='star'>
                <img src={starsvg} alt=""/>
            </div>
            }
            {star === 2 &&
            <div className='star'>
                <img src={starsvg} alt=""/>
                <img src={starsvg} alt=""/>
            </div>
            }
            {star === 3 &&
            <div className='star'>
                <img src={starsvg} alt=""/>
                <img src={starsvg} alt=""/>
                <img src={starsvg} alt=""/>
            </div>
            }
            {star === 4 &&
            <div className='star'>
                <img src={starsvg} alt=""/>
                <img src={starsvg} alt=""/>
                <img src={starsvg} alt=""/>
                <img src={starsvg} alt=""/>
            </div>
            }
            {star === 5 &&
            <div className='star'>
                <img src={starsvg} alt=""/>
                <img src={starsvg} alt=""/>
                <img src={starsvg} alt=""/>
                <img src={starsvg} alt=""/>
                <img src={starsvg} alt=""/>
            </div>
            }
            <h1 className="count">Reviews count: {reviews}</h1>
            <h1 className='card-game-text'>{title}</h1>
        </NavLink>
    );
}

export default Game;