function PersonView(person) {
  this.model = person;
  this.$element = this.build()
}

PersonView.prototype.build = function() {
  return $(`<tr class="person">
              <td class="person_order"></td>
              <td class="person_first_name"></td>
              <td class="person_relationship_status"></td>
              <td class="person_qualities_count"></td>
            </tr>`);
}

PersonView.prototype.render = function() {
  var person = this.model;
  var $row = this.$element;
  $row.find(".person_order").text(person.order);
  $row.find(".person_first_name").text(person.firstName);
  $row.find(".person_relationship_status").text(person.relationshipStatus);
  $row.find(".person_qualities_count").text(person.qualitiesForPerson.length);
  return this;
}