<template>
<div>
	<el-col :span="16">
		<el-table
		:data="category"
	    highlight-current-row
	    @current-change="handleCurrentChange"
	    style="width: 100%">
	    <el-table-column type="index" width="100"></el-table-column>
	    <el-table-column label="分类名称"  property="name" ></el-table-column>
	     <el-table-column label="操作" width="180">
		      <template scope="scope">
		      <router-link :to="{name:'update-category',params:{id:scope.row.id}}">
		        <el-button size="small">编辑</el-button>
		      </router-link>  
		        <el-button
		          size="small"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>
    </el-table-column>
	  </el-table>
  </el-col>
</div>
</template>
<script lang="babel">
 import {getList,deleteById} from '../api/api';
	export default{
		name:'category-list',
		data(){
			return{
				name:'Hello',
				category:[]
			}
		},
		components:{
			getList,
			deleteById
		},
		mounted(){
			getList('/category').then((data)=>{
				this.category=data;
			})
		},
		computed:{
			token(){
				return localStorage.getItem('token');
			}
		},
		methods:{
		      handleDelete(index, row) {
		        deleteById(`/category/${row.id}`,this.token).then((data)=>{
		        	getList('/category').then((data)=>{
						this.category=data;
					})
		          if(data){
		             this.$message({
		              message: '恭喜你，分类删除成功！ ^_^',
		              type: 'success'
		            })
		          }else{
		            this.$message.error('对不起，分类删除失败了 T^T！');
		          }
         		})
		      },
			 handleCurrentChange(val) {
		       
		      }
		}
	}
</script>
<style scoped>
	
</style>