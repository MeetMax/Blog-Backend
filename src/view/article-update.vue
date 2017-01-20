<template>
  <div class="markdown-editor">
    <el-col :span="18" class="col-wrap">
      <el-row>
        <el-col :span="10">
          <el-select v-model="selected" filterable allow-create placeholder="请选择文章分类" @change="changeCat">
            <el-option v-for="item in category" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-input v-model="title"  placeholder="请输入文章标题" @change="changeTitle"></el-input>
        </el-col>
      </el-row>
      <markdown-editor v-model="content" @input="handleInput" preview-class="markdown-body" ref="markdownEditor" :configs="configs" :custom-theme="true"></markdown-editor>
      <el-button type="primary" size="large" @click="submitForm">发布文章</el-button>
    </el-col>
  </div>
</template>
<script lang="babel">
  const token='ye4K90UYaXSYRjINv1XVtavOwvxPWXra_1484843593';
  import { markdownEditor } from 'vue-simplemde'
  import {getList,create,updateById} from '../api/api';
  import 'FontAwesome-webpack';
  import 'simplemde-theme-base';
  export default{
    name:'article-update',
    data() {
      return {
        content: '',
        selected:'',
        html:'',
        configs: {
          spellChecker: false,
          autoDownloadFontAwesome:true,
          showIcons: ['code'],
          renderingConfig:{
            codeSyntaxHighlighting:true,
            highlightingTheme: 'atom-one-light'
          }
        },
        catModel:[],
        category:{},
        title:'',
        formData:{
          title:'',
            content:'',
            html:'',
            cat_id:'',
        },
        cat_id:''
      }
    },
    components: {
      markdownEditor,
      getList,
      updateById
    },
    computed: {
      simplemde() {
        return this.$refs.markdownEditor.simplemde
      }
    },
    mounted(){
      getList(`/category`).then(data=>{
        this.category=data;
      });
      getList(`/article/${this.$route.params.id}`).then(data=>{
          this.title=data.title;
          this.content=data.content;
          this.html=data.html;
          this.cat_id=data.cat_id;
          this.selected=data.cat_id;
      });
    },
    methods: {
      handleInput(){
        this.html=this.simplemde.markdown(this.content);
        this.formData={
            title:this.title,
            content:this.content,
            html:this.html,
            cat_id:this.cat_id
        }
      },
      submitForm(){
        updateById(`/article/${this.$route.params.id}`,this.formData,token)
        .then((data)=>{
          if(data){
             this.$message({
              message: '恭喜你，修改成功！^_^',
              type: 'success'
            })
          }else{
            this.$message.error('对不起，修改出错了 T^T！');
          }
         })
      },
      changeCat(cat_id){
        this.cat_id=cat_id;
      },
      changeTitle(){
         this.formData.title=this.title
      }
    }
  }
</script>
<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .markdown-editor{
    margin-top: 30px;
  }
  .col-wrap{
    margin-left: 30px;

  }
</style>
