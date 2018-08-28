import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postDetailComponent from './post-detail.component';

let postDetailModule = angular.module('postDetail', [
  uiRouter
])

.component('postDetail', postDetailComponent)

.name;

export default postDetailModule;
