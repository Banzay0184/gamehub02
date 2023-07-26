import React, {useState} from 'react';
import {Games} from "../../helpers/GameList";
import Game from "../game/Game";
import './style.css'
import searchsvg from '../../img/search-svgrepo-com.svg'
import Nav from "../nav/Nav";

function Search(props) {
    const [search, setSearch] = useState('')

    return (
        <div>
            <Nav/>
            <div className='container'>
                <h1 className='text'>Search</h1>
                <form action="">
                    <img src={searchsvg} alt=""/>
                    <input onChange={(e) => setSearch(e.target.value)} type="search"/>
                </form>
                <div className="cards-game">
                    {Games.filter((game) => {
                        return search.toLocaleLowerCase() === '' ? game : game.title.toUpperCase().includes(search)
                    }).map((game, index) => {
                        return <Game
                            key={index}
                            title={game.title}
                            img={game.img}
                            reviews={game.reviews}
                            index={index}
                            star={game.star}

                        />

                    })}
                </div>
            </div>
        </div>
    );
}

export default Search;