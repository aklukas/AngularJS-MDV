import template from './post-detail.html';
import controller from './post-detail.controller';
import './post-detail.scss';

let bindings = {
  form: '<',
  savePost: '&',
  resetForm: '&'
};

let postDetailComponent = {
  bindings,
  template,
  controller
};

export default postDetailComponent;
