import React from 'react';

import {useForm} from "react-hook-form";
import {usersService} from "../services";

function UserForm() {
    const submit = async (info) => {
        console.log(info)
        usersService.postInfo().then(({data}) => console.log(data))
        reset()
    }

    let {register, handleSubmit, reset, formState: {errors}} = useForm()


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={"text"} placeholder={'name'} {...register('name', {
                    required: true,
                    pattern: new RegExp(/^[a-zA-Zа-яА-Яії]{1,40}$/)
                })}/>
                {
                    errors.name && <span>field is required</span>
                }

                <input type={"text"} placeholder={'username'} {...register('username', {
                    required: true,
                })
                }/>
                {
                    errors.username && <span>field is required</span>
                }

                <input type={"email"} placeholder={'email'} {...register('email', {
                    required: true
                })}/>

                <input type={"submit"} value={'Надіслати'}  {...register('Save')}/>

            </form>

        </div>
    );
}

export {UserForm};