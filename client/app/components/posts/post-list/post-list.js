import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postListComponent from './post-list.component';
import postService from "../post.service";

let postListModule = angular.module('postList', [
  uiRouter,
  postService
])

.component('postList', postListComponent)

.name;

export default postListModule;
