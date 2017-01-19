<template>
  <div>
    <el-table :data="tableData3" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="index" width="55">

      </el-table-column>
      <el-table-column label="日期" width="120">
        <template scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="文章标题"  width="150" show-overflow-tooltip></el-table-column>
      <el-table-column prop="address" label="文章内容" show-overflow-tooltip></el-table-column>
      <el-table-column prop="category" label="所属分类" show-overflow-tooltip ></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="babel">
  import {getAll,getList,create} from '../api/api';
  const token='ye4K90UYaXSYRjINv1XVtavOwvxPWXra_1484843593';
  export default{
    name:'article-list',
    data(){
      return{
        tableData3: [
          {
            date: '2016-05-03',
            name: '王小虎阿萨德撒大所撒多',
            address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
            category:'HTML'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            category:'HTML',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            category:'HTML'
          },
        ],
        category:{
          name:'黑客与画家'
        }

      }
    },
    components:{
      getAll,getList,create
    },
    mounted(){
      this.loadMore();
    },
    methods:{
      loadMore(){
        getList('/category').then(function (data) {
          console.log(data)
        });
        create('/category',this.category,token);
      },
      handleSelectionChange(){
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
