import React, {useState} from "react";
import Nav from "../nav/Nav";
import starsvg from "../../img/star-svgrepo-com.svg";

function MyGame() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('games')) || [])

    function handleRemove(id) {
        const newData = cart.filter(item => item.id !== id)
        localStorage.setItem('games', JSON.stringify(newData))
        setCart(newData)
    }
    return (
        <div>
            <Nav co={cart.length} />
            <div className='container'>
                <h1 className='text'>My Game</h1>
                <div className="cards-game">
                    {cart.map(item => (
                        <div key={item.id} className="card-game">
                            <img className='card-game-img' src={item.img} alt=""/>
                            {item.star === 1 &&
                            <div className='star'>
                                <img src={starsvg} alt=""/>
                            </div>
                            }
                            {item.star === 2 &&
                            <div className='star'>
                                <img src={starsvg} alt=""/>
                                <img src={starsvg} alt=""/>
                            </div>
                            }
                            {item.star === 3 &&
                            <div className='star'>
                                <img src={starsvg} alt=""/>
                                <img src={starsvg} alt=""/>
                                <img src={starsvg} alt=""/>
                            </div>
                            }
                            {item.star === 4 &&
                            <div className='star'>
                                <img src={starsvg} alt=""/>
                                <img src={starsvg} alt=""/>
                                <img src={starsvg} alt=""/>
                                <img src={starsvg} alt=""/>
                            </div>
                            }
                            {item.star === 5 &&
                            <div className='star'>
                                <img src={starsvg} alt=""/>
                                <img src={starsvg} alt=""/>
                                <img src={starsvg} alt=""/>
                                <img src={starsvg} alt=""/>
                                <img src={starsvg} alt=""/>
                            </div>
                            }
                            <h1 className='card-game-text'>{item.title}</h1>
                            <button className='btnDel' onClick={() => handleRemove(item.id)}>del</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyGame;