<template>
  <div>
    <el-table :data="articleData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="index" width="55">

      </el-table-column>
      <el-table-column label="日期" width="150" prop="date"></el-table-column>
      <el-table-column prop="title" label="文章标题" show-overflow-tooltip></el-table-column>
      <el-table-column prop="html" label="文章内容" show-overflow-tooltip></el-table-column>
      <el-table-column prop="category.name" label="所属分类" show-overflow-tooltip width="120" 
      :filters="category" :filter-method="filterTag"></el-table-column>
      <el-table-column label="操作" width="200">
        <template scope="scope">
        <router-link :to="{name:'article-update',params:{id:scope.row.id}}">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          </router-link>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="babel">
  import {getAll,getList,create,deleteById} from '../api/api';
  export default{
    name:'article-list',
    data(){
      return{
        articleData: [],
        category:[]
      }
    },
    components:{
      getList,
      create,
      deleteById
    },
    computed:{
      token(){
        return localStorage.getItem('token');
      }
    },
    mounted(){
      getList('/article').then(data=>{
        this.articleData=data;
      });
       getList('/category').then(data=>{
         for(var chr of data){
            this.category.push({
              text:chr.name,
              value:chr.id
            })
         }
      })
      
    },
    methods:{
      loadMore(){
        getList('/category').then(function (data) {
          console.log(data)
        });
        create('/category',this.token,this.category);
      },
      handleSelectionChange(){
      },
      handleEdit(index, row) {
        this.$router.push({name: 'article-update', params: { id: row.id }})
      },
      handleDelete(row) {
        deleteById(`/article/${row.id}`,this.token).then((data)=>{
          getList('/article').then(data=>{
            this.articleData=data;
          })
          if(data){
             this.$message({
              message: '恭喜你，删除成功！',
              type: 'success'
            });
          }else{
             this.$message.error('对不起，删除出错了！ T^T');
          }
        })
      },
      filterTag(value, row) {
        return row.cat_id === value
      }
    }
  }
</script>
