import React from 'react';
import './style.css'
import Game from "../game/Game";
import {Games} from "../../helpers/GameList";
import Nav from "../nav/Nav";

function Home(props) {
    return (
        <div>
            <Nav/>
            <div className='container'>
                <h1 className='text'>Top Game</h1>
                <div className="cards-game">
                    {Games.map((game, index) => {
                        return <Game
                            key={index}
                            title={game.title}
                            img={game.img}
                            reviews={game.reviews}
                            star={game.star}
                            index={index}

                        />

                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;