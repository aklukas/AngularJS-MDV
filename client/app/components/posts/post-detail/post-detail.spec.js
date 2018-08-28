import Post-detailModule from './post-detail';
import Post-detailController from './post-detail.controller';
import Post-detailComponent from './post-detail.component';
import Post-detailTemplate from './post-detail.html';

describe('Post-detail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Post-detailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Post-detailController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(Post-detailTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = Post-detailComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(Post-detailTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(Post-detailController);
    });
  });
});
