import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstname',
    'model.lastname',
    'model.password',
    function() {
      return !Ember.isEmpty(this.get("model.email")) &&
        !Ember.isEmpty(this.get("model.firstname")) &&
        !Ember.isEmpty(this.get("model.lastName")) &&
        !Ember.isEmpty(this.get("model.passsword"));
    }
  ),
  actions: {
    save: function() {
      if(this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(user){
          _this.trantionToRoute('users.', user);
        });
      } else {
        this.set('errorMessage', ' You have to fill all the fields');
      }
      return false;
    },
    cancel: function() {
      return true;
    }
  }
});
