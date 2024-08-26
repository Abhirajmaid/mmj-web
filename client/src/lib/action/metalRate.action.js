const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN} ` }
})


const updateMetalRate = (metal) => axiosClient.put('/metal-rates?filters[metal][$eq]=' + metal, {

})

const getMetalRates = () => axiosClient.get('/metal-rates')


export default {
    updateMetalRate,
    getMetalRates,
}