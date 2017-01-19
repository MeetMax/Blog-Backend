<template>
  <div class="markdown-editor">
    <el-col :span="18" class="col-wrap">
      <el-row>
        <el-col :span="10">
          <el-select v-model="value10" filterable allow-create placeholder="请选择文章分类">
            <el-option
              v-for="item in category" :label="item.label" :value="item.value">
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
      <el-button type="primary" size="large">发布文章</el-button>
    </el-col>
  </div>
</template>
<script>
  import { markdownEditor } from 'vue-simplemde'
  import 'simplemde-theme-base';
  import 'FontAwesome-webpack';
  export default{
    name:'release-update',
    data() {
      return {
        content: 'hello world',
        configs: {
          spellChecker: false,
          autoDownloadFontAwesome:false,
          showIcons: ['code'],
          renderingConfig:{
            codeSyntaxHighlighting:true,
            highlightingTheme: 'atom-one-light'
          }
        },
        category:[
          {
            label:'HTML',
            value:'1'
          },
          {
            label:'CSS',
            value:'CSS'
          },
          {
            label:'PHP',
            value:'PHP'
          }
        ],
        value10:[],
        title:''
      }
    },
    components: {
      markdownEditor,
    },
    computed: {
      simplemde() {
        return this.$refs.markdownEditor.simplemde
      }
    },
    mounted(){

    },
    methods: {
      handleInput(){
        console.log(this.simplemde.markdown(this.content));
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
