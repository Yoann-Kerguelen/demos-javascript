function Animal(name, gender) {
    this.name = name;
    this.gender = gender;
}

Animal.prototype.eat = function() {
    console.log('Num num');
};

Animal.prototype.sleep = function() {
    console.log('zzzz');
}

cow = new Animal('Bessie', 2);
pig = new Animal('Squeaks', 1);

cow.eat();
pig.sleep();

/* ------------------------------- */

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
}

const cheese = new Food('feta', 5);
const fun = new Toy('robot', 40);

console.log(cheese);
console.log(fun);

/* ----------------------------- */

function eat() {
    console.log('Eat() global :', 'Num num');
}


var namespace = {
    eat: function() {
        console.log('Eat() namespace :', 'Num num num');
    }
};

var namespace2 = {
    eat: function() {
        console.log('Eat() namespace2 :', 'Num num num num');
    }
}

namespace.eat();
namespace2.eat();

(function (window) {
    var namespace3 = {};
    namespace3.eat = function () {
        console.log('Eat() global :', 'Num num num num num');
    }

    window.namespace3 = namespace3;

})(window);

// (function (window) {
//     window.eat()
// })


// namespace3.eat();

