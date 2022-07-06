import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {commentsService, usersService} from "../services";

function CommentsForm() {

    const comments = async (info) => {
        console.log(info)
        commentsService.postInfo().then(({data}) => console.log(data))
        reset()
    }

    let {register, handleSubmit, reset, formState: {errors}} = useForm()


    return (
        <div>

            <form onSubmit={handleSubmit(comments)}>
                <input type={"text"} placeholder={'create comment'} {...register('create comment', {
                    required: true,
                })}/>
                {
                    errors.name && <span>field is required</span>
                }
                <button>add comment</button>
            </form>

        </div>
    );
}

export {CommentsForm};