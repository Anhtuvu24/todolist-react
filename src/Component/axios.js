import Axios from "axios";

export const instance = Axios.create({
    baseURL: 'https://632520af9075b9cbee466b50.mockapi.io/'
})