import React from 'react';
import './style.css'
import GameSvg from './../../img/game-controller-outline-svgrepo-com.svg'
import searchsvg from '../../img/search-svgrepo-com.svg'
import imacsvg from '../../img/imac-svgrepo-com.svg'
import {NavLink} from "react-router-dom";

function Nav(props) {

    const activeLink = 'menu-active';
    const normalLink = '';

    console.log(props.co)

    return (

        <div className='menu'>
            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/">
                <img src={GameSvg}/>
                Top
            </NavLink>
            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/search">
                <img src={searchsvg}/>
                Search
            </NavLink>
            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/mygame">
                <img src={imacsvg}/>
                My game
                {props.co > 0 &&
                <span className='mygamecounactive' id='mycount'>{props.co}</span>
                }
                {props.co === 0 &&
                <span className='mygamecounactive hidden' id='mycount'>{props.co}</span>
                }
            </NavLink>
        </div>
    );
}

export default Nav;