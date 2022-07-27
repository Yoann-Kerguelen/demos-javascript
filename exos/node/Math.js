const _ = require('lodash');

function addition(a, b) {
    if (!_.isNaN(a) && !_.isNaN(b)) return (a + b);

}

function soustraction(a, b) {
    if (!_.isNaN(a) && !_.isNaN(b)) return (a - b);
}

function multiplication(a, b) {
    if (!_.isNaN(a) && !_.isNaN(b)) return (a * b);
}

function division(a, b) {
    if (!_.isNaN(a) && !_.isNaN(b)) return (a / b);
}

module.exports = {
    addition: addition,
    soustraction: soustraction,
    multiplication: multiplication,
    division: division
};