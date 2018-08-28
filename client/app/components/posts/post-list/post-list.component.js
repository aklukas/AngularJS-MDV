import template from './post-list.html';
import controller from './post-list.controller';
import './post-list.scss';

let PostListComponent = {
  bindings: {
    posts: '<'
  },
  template,
  controller
};

export default PostListComponent;
