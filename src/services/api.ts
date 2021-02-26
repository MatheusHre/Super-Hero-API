import axios from "axios"

const baseApiURL = "https://www.superheroapi.com/api.php/4722346101115972/search"

const api = axios.create({
    baseURL: baseApiURL
})

export default api