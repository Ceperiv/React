import userEvent from "@testing-library/user-event";
import './User.css'
export default function User({item, userId}) {

    const onclick = () =>{
userId(item.id)

    }
    return (
        <div className={'user-box'}>
            <h3>{item.name}</h3>
            <h3>{item.username}</h3>
            <p>{item.email}</p>
            <button className={'user-button'} onClick={onclick}><i>-- posts --</i></button>

        </div>
    );
}
