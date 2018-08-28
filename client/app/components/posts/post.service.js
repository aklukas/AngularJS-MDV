import angular from 'angular';

class PostService {
  url = 'https://levelup-json.now.sh/posts';
  constructor($http){
    'ngInject';
    this.http = $http;
  }

  getPosts() {
    return this.http.get(this.url).then(res => res.data);
  }

  createPost(post) {
    return this.http.post(this.url, post);
    console.log('CREATE POST')
  }
}

let postService = angular.module('postService', [])
  .service('postService', PostService).name;

export default postService;
