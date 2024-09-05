const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        "Content-Type": 'application/json'
    }
})

const getCollection = () => axiosClient.get('/collections?populate=*')

export default {
    getCollection,
}