function User() {
  this.personsAttractedTo = []
  this.qualitiesAttractedTo = []
  this.categories = []
}

User.prototype.addPerson = function(person) {
  this.personsAttractedTo.push(person);
  // this.qualitiesAttractedTo.push()
  return this;
}

User.prototype.retrieveQualitiesFromPersons = function() {
}