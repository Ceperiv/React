import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const postService = {
    getInfo: () => axiosService.get(urls.posts)

}

export {postService}