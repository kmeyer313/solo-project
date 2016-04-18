function UserView(user) {
  this.model = user;
  // this.$element = this.build()
}

UserView.prototype.render = function() {
  var user = this.model;
  // var $div = this.$element;
  var $tbody = $("#person_chart").find("tbody");
  user.personsAttractedTo.forEach(function(person) {
    var personViewRow = new PersonView(person);
    personViewRow.render();

    $tbody.append(personViewRow.$element)
  })
  return this;
  // var $row = this.$element;
  // var $tbody = $div.find("tbody");


}