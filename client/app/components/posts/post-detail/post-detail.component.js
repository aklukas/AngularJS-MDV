import template from './post-detail.html';
import controller from './post-detail.controller';
import './post-detail.scss';

let bindings = {
  myForm: '<',
  savePost: '&'
};

let postDetailComponent = {
  bindings,
  template,
  controller
};

export default postDetailComponent;
