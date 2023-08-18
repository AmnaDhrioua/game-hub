import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '117bd2118b644609aaecc3548e41f445',
    }
})