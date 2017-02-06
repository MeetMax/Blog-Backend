<template>
  <div id="app">
    <el-row>
      <el-col :span="4">
      <nav class="user-title">
        <div v-if="login">MeetMax</div>
        <div v-else>未 登 录</div>
      </nav>
      </el-col>
      <el-col :span="20"><nav class="top-nav">
      <span v-if="login" @click="logout">退出</span>
      <span v-else><router-link to="/login">登录</router-link></span>
      </nav>
      </el-col>
    </el-row>
    <el-row class="side-wrap">
      <el-col :span="4"  class="side-bar">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-document"></i>文章管理</template>
            <router-link to="/release-article">
              <el-menu-item index="1-1">发布文章</el-menu-item>
            </router-link>
            <router-link to="/article-list">
              <el-menu-item index="1-2">文章列表</el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>分类管理</template>
            <router-link to="/add-category">
              <el-menu-item index="2-1">添加分类</el-menu-item>
            </router-link>
            <router-link to="/category-list">
              <el-menu-item index="2-2">分类列表</el-menu-item>
            </router-link>
          </el-submenu>
          <el-menu-item index="3"><i class="el-icon-menu"></i>评论管理</el-menu-item>
          <router-link to="/login">
            <el-menu-item index="4"><i class="el-icon-setting"></i>用户登录</el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view ></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {isLogin} from './api/api';
  export default {
    name: 'app',
    data(){
      return{
        formData:{},
        state:'',
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      }
    },
    components: {
      isLogin
    },
    computed:{
      login(){
        this.formData={
          token:localStorage.getItem('token')
        };
        isLogin('/user/verify-token',this.formData).then(data=>{
          this.state=data;
        })
        return this.state;  
      }
    },
    methods: {
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      },
      logout(){
        this.state=false;
        localStorage.removeItem('token');
        if(!localStorage.getItem('token')){
             this.$message({
                message: '退出成功！',
                type: 'success'
            })
        }
      }
    }
  }
</script>

<style>
  @import './assets/css/base.css';
  #app{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    height: 100%;
  }
  *{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .el-menu-vertical-demo{
    height: 100%;
  }
  .top-nav{
    height: 50px;
    background-color: #3c8dbc;
  }
  .user-title{
    background-color: #367fa9;
    height: 50px;
    color: #fff;
    line-height: 50px;
    text-align: center;
    font-size: 20px
  }
  .el-row {

  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .side-wrap{
    height: calc(100% - 50px);
  }
  .side-bar{
    height: 100%;
  }
  .top-nav span{
    color: #fff;
    line-height: 50px;
    float: right;
    margin-right: 30px;
    cursor: pointer;
  }
  .top-nav span a{
    color: #fff;
  }

</style>
