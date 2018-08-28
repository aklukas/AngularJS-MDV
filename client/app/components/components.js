import angular from 'angular';
import Post from './posts/post';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Post,
  About
])

.name;

export default componentModule;
