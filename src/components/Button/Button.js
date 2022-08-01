import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux/slices";
import {CarForms} from "../CarForms/CarForms";
import '../components.style.css'


function Button(props) {
    const {carForUpdate, visibility} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    return (
        <header>
            <button className={'create-button'} onClick={(e) => {
                if (!visibility) {
                    dispatch(carActions.setVisibility(true))
                } else {
                    dispatch(carActions.setVisibility(null))
                }
            }} disabled={false}>{!visibility ? 'Create New Car' : '---Cancel---'}
            </button>
            {carForUpdate ??  visibility ? <CarForms/> : null}
        </header>
    );
}

export {Button};