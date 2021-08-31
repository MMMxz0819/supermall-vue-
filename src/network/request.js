import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/m5",
        timeout: 5000
    })

    //2、axios拦截器

    instance.interceptors.request.use(config => {
        
        return config
    }, err => {
        console.log(err);
    })


    instance.interceptors.response.use(res => {
        
        return res.data
    },

        err => console.log(err))




    return instance(config) //返回为promise对象
}





