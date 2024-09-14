var Human = /** @class */ (function () {
    function Human(name, lastName, age, favoriteFoods) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.isOlderThanEighteen = age >= 18;
        this.fullName = '';
        this.favoriteFoods = favoriteFoods;
    }
    Human.prototype.setFullName = function () {
        this.fullName = "".concat(this.name, " ").concat(this.lastName);
    };
    Human.prototype.showUserData = function () {
        console.log("Full Name: ".concat(this.fullName));
        console.log("Age: ".concat(this.age));
        console.log("Favorite Foods: ".concat(this.favoriteFoods.join(', ')));
    };
    return Human;
}());
var human = new Human('Rafael', 'Pessoa', 25, ['Lasanha', 'Fricassé', 'Leite em pó']);
human.setFullName();
human.showUserData();
