import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {carActions} from "../../redux/slices";
import '../components.style.css'


function Cars(props) {
    const {cars, isLoading, errors} = useSelector(state => state.cars);
    // console.log(errors)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [])
    console.log(typeof (cars))

    return (
        <div className={'cars-wrap'}>
            {isLoading && !errors && <h2>Loading.....</h2>}
            {errors && <h2>:( server Error</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
}

export {Cars};