import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../view/index';
import Release from '../view/release-article';
import ArticleList from '../view/article-list';
Vue.use(VueRouter);
const router=new VueRouter({
  mode:'history',
  routes:[
    {
      	name:'index',
      	path:'/',
      	component:Index
    },
    {
      	name:'release-article',
      	path:'/release',
      	component:Release
    },
    {
		name:'article-list',
		path:'/article-list',
		component:ArticleList
    }
  ]
});
export default router;