import axios from "../utils/request";

const login ={
    baseUrl:"https://www.fastmock.site",
    suffix:'/mock/058bad67d8825b02b1a0877ac5d71ee0/apis/login'
}

const api = {
    //登录接口
    PostLogin(a,b){
        return axios.post(login.baseUrl + login.suffix,{
            username:a,password:b
        })
    }
}

export default api;