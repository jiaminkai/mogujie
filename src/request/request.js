import axios from 'axios'
export function request(config){
    const inter = axios.create({
        baseURL:'http://152.136.185.210:8000/api/w6',
        timeout:5000
        
    })
    inter.interceptors.request.use(config=>{
        return config
    },err=>{
        console.log("err",err )
    })
    inter.interceptors.response.use(res=>{
        return res
    },err=>{
        return err
    })
   return inter(config)
}