<template>
  <div class="markdown-editor">
    <el-col :span="18" class="col-wrap">
      <el-row>
        <el-col :span="10">
          <el-select v-model="catModel" filterable allow-create placeholder="请选择文章分类" @change="changeCat">
            <el-option
              v-for="item in category" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-input v-model="title" placeholder="请输入文章标题"></el-input>
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
  import {getList,create} from '../api/api';
  import 'FontAwesome-webpack';
  import 'simplemde-theme-base';
  export default{
    name:'release-article',
    data() {
      return {
        content: '',
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
        formData:{},
        cat_id:''
      }
    },
    components: {
      markdownEditor,
      getList
    },
    computed: {
      simplemde() {
        return this.$refs.markdownEditor.simplemde
      }
    },
    mounted(){
      getList('/category').then(data=>{
        this.category=data;
      })
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
        console.log(this.catModel);
      },
      submitForm(){
        create('/article',this.formData,token)
        .then((data)=>{
          if(data){
             this.$message({
              message: '恭喜你，文章发布成功！^_^',
              type: 'success'
            })
          }else{
            this.$message.error('对不起，文章发布失败了 T^T！');
          }
         })
      },
      changeCat(cat_id){
        this.cat_id=cat_id;
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
