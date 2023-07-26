import React from 'react';
import './style.css'
import {NavLink, useParams} from "react-router-dom";
import {Games} from "../../helpers/GameList";
import backSvg from '../../img/delete-left-svgrepo-com.svg'


function GameDescr(props) {
    const {id} = useParams();
    const game = Games[id];


    function handleAdd(id, title, img) {
        const games = JSON.parse(localStorage.getItem('games')) || []
        const data = {id, title, img}
        const newGames = games.length > 0 ? games.filter(item => item.id !== id) : []
        newGames.push(data)
        localStorage.setItem('games', JSON.stringify(newGames))
    }

    return (
        <div className='container'>
            <NavLink className='back' to="/">
                <img alt={game.id} className='backsvg' src={backSvg}/>
                Top Game
            </NavLink>
            <div className='game-descr'>
                <h1 className='game-descr-text'>{game.title}</h1>
                <iframe title={game.id} src={game.video}>

                </iframe>
                <button onClick={() => handleAdd(game.id, game.title, game.img)} className="download">
                    My game
                </button>
                <div className="game-descr-box">
                    <h1>INFO</h1>
                    <p><span>Release Date: </span>{game.date}</p>
                    <p><span>Genres: </span>{game.genres}</p>
                    <h1 className='des-tit'>DESCRIPTION:</h1>
                    <p>{game.descr}</p>
                </div>
            </div>
        </div>
    );
}

export default GameDescr;