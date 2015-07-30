import UsersBaseController from './base';

export default UsersBaseController.extend({
  actions: {
    cancel: function() {
      this.transitonToRoute('users.show', this.get('model'));
      return false;
    }
  }
});
