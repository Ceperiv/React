import {albums, baseUrl, comments, togos, users} from "../constans/URL";

const getUserInfo = fetch(baseUrl + users)
    .then(value => value.json())
const getTogosInfo = async () => await fetch(baseUrl + togos)
    .then(value => value.json())
const getAlbumsInfo = async () => await fetch(baseUrl + albums)
    .then(value => value.json())
const getCommentsInfo = async () => await fetch(baseUrl + comments)
    .then(value => value.json())
export {
    getUserInfo, getTogosInfo, getAlbumsInfo, getCommentsInfo
}