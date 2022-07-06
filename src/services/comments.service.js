import {axiosService} from "./axios.service";
import {commentsURL} from "../constans";

export const commentsService = {
    getInfo: () => axiosService.get(commentsURL.comments),
    postInfo: () => axiosService.post(commentsURL.comments)
}