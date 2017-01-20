import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../view/index';
import Release from '../view/release-article';
import ArticleList from '../view/article-list';
import ArticleUpdate from '../view/article-update';
import AddCategory from '../view/add-category';
import CategoryList from '../view/category-list';
import UpdateCategory from '../view/update-category';

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
      path:'/article-update/:id',
      component:ArticleUpdate
    },
     {
      name:'add-category',
      path:'/add-category',
      component:AddCategory
    },
    {
      name:'update-category',
      path:'/update-category/:id',
      component:UpdateCategory
    },
     {
      name:'category-list',
      path:'/category-list',
      component:CategoryList
    }
  ]
});
export default router;
