<template>
<div>
<el-row>
	<el-col :span="10" class="input">
		<el-input v-model="input" placeholder="请输入分类名称"></el-input>
	</el-col>
	<el-col :span="5" class="button">
		<el-button type="primary" @click="submitCat">修改分类</el-button>
	</el-col>
</el-row>	
</div>
</template>
<script lang="babel">
 import {updateById,getList} from '../api/api';
export default{
	name:'update-category',
	data(){
		return{
			input:''
		}
	},
	components:{
		updateById,
		getList
	},
	computed:{
		token(){
			return localStorage.getItem('token');
		}
	},
	mounted(){
		getList(`/category/${this.$route.params.id}`).then((data)=>{
			this.input=data.name;
		})
	},
	methods:{
		submitCat(){
			let data={name:this.input}
			updateById(`/category/${this.$route.params.id}`,data,this.token).then((data)=>{
	          if(data){
	             this.$message({
	              message: '恭喜你，分类修改成功！ ^_^',
	              type: 'success'
	            })
	          }else{
	            this.$message.error('对不起，分类修改失败了 T^T！');
	          }
         })
		}
	}
}
</script>
<style scoped>
.el-row{
	margin-top: 30px;
	padding-left: 30px;
}
.input{
	margin-right: 20px;
}
</style>