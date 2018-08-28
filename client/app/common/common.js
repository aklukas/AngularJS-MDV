import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import Post from './post/post';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  Post
])
  
.name;

export default commonModule;
