import Post-listModule from './post-list';
import Post-listController from './post-list.controller';
import Post-listComponent from './post-list.component';
import Post-listTemplate from './post-list.html';

describe('Post-list', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Post-listModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Post-listController();
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
      expect(Post-listTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = Post-listComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(Post-listTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(Post-listController);
    });
  });
});
