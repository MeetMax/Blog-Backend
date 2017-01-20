<template>
<div>
<el-row>
	<el-col :span="10" class="input">
		<el-input v-model="input" placeholder="请输入分类名称"></el-input>
	</el-col>
	<el-col :span="5" class="button">
		<el-button type="primary" @click="submitCat">添加分类</el-button>
	</el-col>
</el-row>	
</div>
</template>
<script lang="babel">
const token='1ecdHcuwHzVw0V8NIxQgCXIWZZqWFqlI_1484930794';
 import {create} from '../api/api';
export default{
	name:'add-category',
	data(){
		return{
			input:''
		}
	},
	mounted(){

	},
	components:{
		create
	},
	methods:{
		submitCat(){
			let data={name:this.input}
			create('/category',data,token).then((data)=>{
	          if(data){
	             this.$message({
	              message: '恭喜你，分类添加成功！ ^_^',
	              type: 'success'
	            })
	          }else{
	            this.$message.error('对不起，分类添加失败了 T^T！');
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