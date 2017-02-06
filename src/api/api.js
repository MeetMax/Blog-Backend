import axios from 'axios';
import qs from 'qs';
const HOST='http://api.com';

//post请求提交数据
export function create(url,data,token) {
  return new Promise((resolve,result)=>{
      axios({
        method: 'post',
        url: HOST+url,
        headers:{
          'Content-Type': 'application/json; charset=UTF-8',
           'token':token
        },
        data:data
      }).then(function (response) {
        resolve(response.data)
      })
  })
}
//获取列表
export function getList(url) {
  return new Promise((resolve,result)=>{
      axios.get(HOST+url)
        .then(function (response) {
          resolve(response.data)
        })
  })
}
//根据id删除
export function deleteById(url,token) {
  return new Promise((resolve,result)=>{
    axios({
      method: 'delete',
      url: HOST+url,
      headers:{
        'Content-Type': 'application/json; charset=UTF-8',
        'token':token
      },
    }).then(function (response) {
      resolve(response.data)
    })
  })
}
//根据id修改文章
export function updateById(url,data,token) {
  return new Promise((resolve,result)=>{
    axios({
      method: 'put',
      url: HOST+url,
      headers:{
        'Content-Type': 'application/json; charset=UTF-8',
        'token':token
      },
      data:data
    }).then(function (response) {
      resolve(response.data)
    })
  })
}
//管理员登录
export function login(url,data) {
  return new Promise((resolve,result)=>{
    axios({
      method: 'post',
      url: HOST+url,
      headers:{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      data:data
    }).then(function (response) {
      resolve(response.data)
    })
  })
}
//判断是否登录
export function isLogin(url,data) {
  return new Promise((resolve,result)=>{
    axios({
      method: 'post',
      url: HOST+url,
      headers:{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      data:data
    }).then(function (response) {
      resolve(response.data)
    })
  })
}

