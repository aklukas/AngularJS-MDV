import angular from 'angular';
import Navbar from './navbar/navbar';
import Post from './post/post';

let commonModule = angular.module('app.common', [
  Navbar,
  Post
])
  
.name;

export default commonModule;
