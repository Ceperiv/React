import {axiosService} from "./axios.service";

import {urls} from "../constants/urls";

const commentService = {
    getInfo: ()=>axiosService.get(urls.comments)

}
export {commentService}