class Person {
  firstName = "Cow";
  attack() {
    console.log('Yo');
    this.firstName = "Jesse"; //This refers to the function
  }
}
