
class PostController {
  posts = [];
  constructor(postService) {
    'ngInject';
    this.postService = postService;
  }

  $onInit() {
    this.allPosts();
    this.initForm();
  }

  allPosts() {
    this.postService.getPosts()
      .then(res => this.posts = res)
      .catch(error => console.log('error', error));
  }

  newPost(form) {
    console.log('POSTED!!!', form)
    // this.postService.createPost()
    //   .then(res => this.allPosts())
    //   .catch(error => console.log('error', error));
  };

  resetForm() {
    this.form = {
      id: null,
      username: '',
      content: ''
    }
  }

  initForm() {
    this.form = {
      id: null,
      username: '',
      content: ''
    }
  }
}

export default PostController;
