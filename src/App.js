import {Link, Route, Routes, Outlet, NavLink} from "react-router-dom";

import './App.css';
import {Header, Main, Wrap} from "./pages";
import {Comments, Posts} from "./components";

function App() {
    return (
        <div className="App">
            <Wrap/>
            <Routes>
                <Route path={'/'} element={<Header/>}/>

                <Route path={'/main'} element={<Main/>}>

                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>

                </Route>
            </Routes>

        </div>
    );
}

export default App;
