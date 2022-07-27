function myfunc(lambda, value) {
    return lambda(value);
}

function myfuncv2(lambda, value1, value2) {
    return lambda(value1, value2);
}

let val1 = 2;
let val2 = 8;

let tab1 = ['rouge', 'vert', 'bleu'];
let tab2 = Array(val2).fill().map(() => Math.round(Math.random() * val2));

let res = myfunc(parametre => parametre * parametre, val1);



let res2 = myfuncv2((x, y) => x > y, val1, val2);
let res3 = tab1.map(x => x.split('').reverse().join(''));
let res4 = tab2.map(frape => frape - 1)

console.log(res);
console.log(res2);
console.log(res3);
console.log(tab2, res4);

let add = (x, y) => x + y;  

let add1 = function (x, y) {
    return x + y;
};

function add2(x, y) {
    return x + y;
}

console.log(add(10, 20)); // 30;

let add2 = (x, y) => { 
    return x + y; 
};
console.log(add2(10, 20)); // 30;
