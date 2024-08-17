const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
})

const getJewellery = () => axiosClient.get('/jewelleries?populate=*')

const getJewelleryByProductCode = (product_code) => axiosClient.get('/jewelleries?populate[img]filters[product_code][$eq]=' + product_code)

export default {
    getJewellery,
    getJewelleryByProductCode,
}