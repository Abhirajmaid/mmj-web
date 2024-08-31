const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        "Content-Type": 'application/json'
    }
})

const postSubscriber = (data) => axiosClient.post('/mobile-numbers', {
    data: {
        mobile_number: data.mobile_number
    }
})

export default {
    postSubscriber
}