
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

  selectedPost(post) {
    this.form = Object.assign({}, post);
  }

  savePost(form) {
    if(form.id) {
      this.editPost(form)
    } else {
      this.newPost(form);
    }
  }

  newPost(form) {
    this.postService.createPost(form)
      .then(() => this.allPosts())
      .catch(error => console.log('error', error))
      .finally(() => this.resetForm());
  };

  editPost(form) {
    this.postService.updatePost(form)
      .then(() => this.allPosts())
      .catch(error => console.log('error', error))
      .finally(() => this.resetForm());
  }

  deletePost(id) {
    this.postService.deletePost(id)
      .then(() => this.allPosts())
      .catch(error => console.log('error', error))
      .finally(() => this.resetForm());
  }

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
