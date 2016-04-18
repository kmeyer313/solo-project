function Person(order, firstName, relationshipStatus) {
  this.order = order
  this.firstName = firstName;
  this.relationshipStatus = relationshipStatus;
  this.qualitiesForPerson = []
}


Person.prototype.addQuality = function(quality) {
  this.qualitiesForPerson.push(quality);
  return this;
}

Person.prototype.addNewQuality = function(descriptiveWord, category) {
  return this.addQuality(new Quality(descriptiveWord, category));
}


Person.prototype.totalQualities = function() {
  return this.qualitiesForPerson.length;
}

// Person.prototype.qualitiesByCategory = function(category) {
// }