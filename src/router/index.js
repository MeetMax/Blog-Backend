import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../view/index';
import Release from '../view/release-article';
import ArticleList from '../view/article-list';
import ArticleUpdate from '../view/article-update';
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
      	path:'/release-article',
      	component:Release
    },
    {
		name:'article-list',
		path:'/article-list',
		component:ArticleList
    },
    {
      name:'article-update',
      path:'/article-update',
      component:ArticleUpdate
    }
  ]
});
export default router;
