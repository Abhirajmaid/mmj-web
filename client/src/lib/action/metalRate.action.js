const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN} ` }
})


const updateMetalRate = (data) => axiosClient.put('/metal-rates', {
    data
})

const getMetalRates = () => axiosClient.get('/metal-rates')


export default {
    updateMetalRate,
    getMetalRates,
}