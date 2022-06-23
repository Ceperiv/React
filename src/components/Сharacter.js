// 1. Описати всю сім'ю сімпсонів (5 персонажів)
//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів
import './Character.css'

function Character(props) {
    let {userId, userName, status, species, gender, image} = props
    console.log(props)
    return (

        <div className={'box'}>
            <h2>{userId} - {userName}</h2>
            <ol>
                <li>status : {status}</li>
                <li>species : {species}</li>
                <li>gender : {gender}     </li>
            </ol>
            <img src={image} alt={userName}/>
        </div>

    )
}

export default Character;