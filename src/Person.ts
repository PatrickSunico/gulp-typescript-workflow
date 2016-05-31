class Person {
  firstName = "Cow";
  attack() {
    console.log('War Cry');
    this.firstName = "Patrick"; //This refers to the function
  }
}
