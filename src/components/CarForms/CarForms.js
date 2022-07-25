import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux/slices";
import '../components.style.css'


function CarForms(props) {

    const {handleSubmit, reset, setValue, register} = useForm();
    const {carForUpdate, errors} = useSelector(state => state.cars);


    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    const submit = async (data) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({id: carForUpdate.id, car: data}))
        } else {
            await dispatch(carActions.createNewCar({car: data}))
        }
        reset()
    }

    return (
        <form className={'car-forms'} onSubmit={handleSubmit(submit)}>
            <input type={"text"} placeholder={'model'} {...register('model')}/>
            {errors && <div className={'errors'}>{errors.model}</div>}
            <input type={"number"} placeholder={'price'} {...register('price')}/>
            {errors && <div className={'errors'}>{errors.price}</div>}
            <input type={"number"} placeholder={'year'} {...register('year')}/>
            {errors && <div className={'errors'}>{errors.year}</div>}
            <button>{carForUpdate ? 'Update' : 'Create'}</button>

        </form>
    );
}

export {CarForms};