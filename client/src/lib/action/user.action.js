const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    // headers: { Authorization: `Bearer ${process.env.BEARER_TOKEN}` }
})
