import axios from 'axios'
import store from '@/store'
// 创建axios
const axiosrequest =axios.create({
    //process.env.BASE_API中的BASE_API是在config/dev.env.js内的export default设置的,API_CONFIG.BASE_API是在static/js/api_config.js内设置的
    baseURL: process.env.BASE_API ? process.env.BASE_API : API_CONFIG.BASE_API, // api的base_url
    timeout: 5000 // request timeout
})
export default axiosrequest;