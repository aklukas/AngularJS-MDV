import angular from 'angular';
import PostService from '../../components/posts/post.service';

let postModule = angular.module('post', [
  PostService
])
  
.name;

export default postModule;
