import {axiosService} from "./axios.service";
import {usersURL} from "../constans";

export const usersService = {
    getInfo: () => axiosService.get(usersURL.users),
    postInfo: () => axiosService.post(usersURL.users)
}