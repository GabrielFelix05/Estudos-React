// Base da url: https://api.themoviedb.org/3/
//URL DA API: movie/now_playing?api_key=6b17de23fa51e4cb3e1ad7629ab0806d

import axios from 'axios'

const api = axios.create()({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api