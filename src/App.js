import './App.css';
import {Link, Routes, Route, NavLink} from "react-router-dom";

import {AllRights, Main, Albums, UserInfo, Users, UserTodos, Comments, NotFoundPage} from "./pages";

function App() {
    return (
        <div className={'wrap'}>
            <h2>Main Menu</h2>
            <div className={'header'}>
                <ul className={'header-ul'}>
                    <li><NavLink className={'header-nav-link'} to={'/'}>Main</NavLink></li>
                    <li><NavLink className={'header-nav-link'} to={'/UsersInfo'}>Users info</NavLink></li>
                    <li><NavLink className={'header-nav-link'} to={'/AllRights'}>All Rights</NavLink></li>
                </ul>
            </div>
            <hr/>
            <div>
                <Routes>
                    <Route index element={<Main/>}/>

                    <Route path={'/UsersInfo'} element={<UserInfo/>}>

                        <Route path={'users'} element={<Users/>}>
                            <Route path={'togos~' + ':id'} element={<UserTodos/>}/>
                        </Route>

                        <Route path={'albums'} element={<Albums/>}>
                            <Route path={'comments~' + ':id'} element={<Comments/>}/>
                        </Route>

                    </Route>

                    <Route path={'/AllRights'} element={<AllRights/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Routes>

            </div>


        </div>


    );
}

export default App;
