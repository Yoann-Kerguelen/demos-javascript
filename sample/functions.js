
function throwError () {
    throw new Error('Message');
}


function multiply(a, b) {
    console.log("Nombre d'arguments : ", arguments.length);
    if (isNaN(a) || isNaN(b)) {
        try {
            throwError();
        } catch(e) {
            console.log(e);
            return
        }
    }
    return a * b;
}

var value0 = 10;
var value1 = 3;
var value2 = 7;

console.log('')
console.log(value0 + ' * ' + value1 + ' = ', multiply(value0, value1));
console.log(value0 + ' * ' + value1 + ' = ', multiply(value0, value1, value2));

value0 = 2;
value1 = 'Formation';
value2 = 5;
console.log(value0 + ' * ' + value1 + ' = ', multiply(value0, value1, value2));

console.log('');
(function autoInvoquee(a, b) {
    console.log('Auto-invoquée');
    console.log(a, b);
})(1, 2);

console.log('');
var logger = function(a) {
    console.log('1er argument :', a);
}

function firstCallBack(callback) {
    if (callback && typeof callback == 'function') {
        callback('Mon premier callback');
    }
}

firstCallBack(logger);


var hello = function(name) {
    console.log('Hello', name);
};

function asyncSayHello(name, callback) {
    if (callback && typeof callback == 'function') {
        setTimeout(callback, 5000, name);
        // setTimeout(hello, 5000, 'Spongebob');
    }
}

asyncSayHello('Spongebob', hello);

function mul(a ,b) {
    return a * b;
}

let multi = (a, b) => {
    const c = 5;
    return a * b + 5;
}

console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');
