import axios from 'axios';
const HOST='http://api.com';
//get请求获取数据
export function getAll(url) {
  return axios({
    method: 'get',
    url: url,
    baseURL: HOST,
  });
}
//post请求提交数据
export function create(url,data,token) {
  return new Promise((resolve,result)=>{
      axios({
        method: 'post',
        url: HOST+url,
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'token':'hahah',
        },
        data: data
      }).then(function (response) {
        resolve(response.data)
      })
  })
}

export function getList(url) {
  return new Promise((resolve,result)=>{
      axios.get(HOST+url)
        .then(function (response) {
          resolve(response.data)
        })
  })


}

