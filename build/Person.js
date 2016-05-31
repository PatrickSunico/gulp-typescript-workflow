var Person = (function () {
    function Person() {
        this.firstName = "Patrick";
    }
    Person.prototype.attack = function () {
        console.log('War Cry');
        this.firstName = "Patrick"; //This refers to the function
    };
    return Person;
}());
