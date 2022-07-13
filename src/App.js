import {Link, Route, Routes, Outlet, NavLink} from "react-router-dom";
import './App.css';
import {Header, Main} from "./pages";
import {Comments, Posts} from "./components";

function App() {
    return (
        <div className="App">

            <h2>Lesson 006 "Class Components"</h2>

            <ul>
                <li><NavLink className={'menu'} to={'/'}>Home</NavLink></li>
                <li><NavLink className={'menu'} to={'/main'}>Main Menu</NavLink></li>
            </ul>

            <Routes>
                <Route path={'/'} element={<Header/>}/>

                <Route path={'/main'} element={<Main/>}>

                    <Route path={'main/posts'} element={<Posts/>}/>
                    <Route path={'main/comments'} element={<Comments/>}/>

                </Route>
            </Routes>

        </div>
    );
}

export default App;
