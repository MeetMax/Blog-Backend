<template>
	
		<el-row class="login-wrap">
			<el-col :span="12">
				<el-form :model="ruleForm2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="用户名"  prop="username">
				    <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="pass">
				    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click="submitForm">登录</el-button>
				  </el-form-item>
				</el-form>
			</el-col>
		</el-row>	
	
</template>
<script lang="babel">
import {login} from '../api/api';
	 export default {
	 	name:'login',
	    data() {
	    	return {
	    		 ruleForm2:{
			     	username:'',
			     	pass:''
			     },
			     formData:{}
	    	}
	    },
	    components:{
	    	login
	    },
	    methods: {
	      submitForm() {
	       	this.formData={
	       		username:this.ruleForm2.username,
	       		password:this.ruleForm2.pass
	       	};
	       	login('/user/login',this.formData).then((data)=>{
	       		if(data!=false){
	       			window.localStorage.setItem('token',data);
	       			 this.$message({
		              message: '登录成功！',
		              type: 'success'
			    })
			    }else{
			    	this.$message.error('对不起，密码或用户名错误！');
			    }
	       	})
	      }
	    }
	  }
</script>
<style scoped>
	.login-wrap{
		margin: 0 auto;
		margin-top: 30px;
	}
</style>