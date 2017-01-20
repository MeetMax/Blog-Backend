<template>
  <div>
    <el-table :data="articleData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="index" width="55">

      </el-table-column>
      <el-table-column label="日期" width="150" prop="date"></el-table-column>
      <el-table-column prop="title" label="文章标题"  width="150" show-overflow-tooltip></el-table-column>
      <el-table-column prop="html" label="文章内容" show-overflow-tooltip></el-table-column>
      <el-table-column prop="category.name" label="所属分类" show-overflow-tooltip ></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="babel">
  const token='SC19qI-ErLxjPV-CLTMaKfR6ehUIMTFC_1484820262';
  import {getAll,getList,create,deleteById} from '../api/api';
  export default{
    name:'article-list',
    data(){
      return{
        articleData: [

        ],
        category:{
          name:'你好'
        }

      }
    },
    components:{
      getList,
      create,
      deleteById
    },
    mounted(){
      getList('/article').then(data=>{
        this.articleData=data;
      })

    },
    methods:{
      loadMore(){
        getList('/category').then(function (data) {
          console.log(data)
        });
        create('/category',token,this.category);
      },
      handleSelectionChange(){
      },
      handleEdit(index, row) {
        this.$router.push({name: 'article-update', params: { id: row.id }})
      },
      handleDelete(row) {
        deleteById(`/article/${row.id}`,token).then(()=>{
          getList('/article').then(data=>{
            this.articleData=data;
          })
        })
      }
    }
  }
</script>
