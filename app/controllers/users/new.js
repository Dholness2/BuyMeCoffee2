import UsersBaseController from './base';

export default Ember.Controller.extend({
  actions: {
    cancel: function() {
      this.transitionToRoute('users.index');
      return false;
    }
  }
});