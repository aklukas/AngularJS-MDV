import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postComponent from './post.component';
import postService from './post.service'
import PostList from "./post-list/post-list";
import PostDetail from './post-detail/post-detail'

let postModule = angular.module('post', [
  uiRouter,
  postService,
  PostList,
  PostDetail
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('post', {
      url: '/',
      component: 'post'
    });
})

.component('post', postComponent)
  
.name;

export default postModule;
