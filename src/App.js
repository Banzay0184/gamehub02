import './reset.css'
import GameDescr from "./components/gamedescr/GameDescr";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import MyGame from "./components/mygame/MyGame";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/search' element={<Search/>}/>
                    <Route path='/gamedescr/:id' element={<GameDescr/>}/>
                    <Route path='/mygame' element={<MyGame/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
