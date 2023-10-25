"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var _helpers_1 = require("./_helpers");
//  array, spread, default
var colors = ['red', 21, 'green', 42, 'blue', 1024, 'yellow', 'orange', 'purple'];
var a = colors[0], b = colors[1], x = colors[2], y = colors[3], rest = colors.slice(4);
(0, _helpers_1.printer)(a, b, x, y);
(0, _helpers_1.printer)(rest);
var doSomeMath = function (a, b) {
    return [a + b, a * b, /* a / b */];
};
var _a = doSomeMath(2, 3), sum = _a[0], mult = _a[1], _b = _a[2], div = _b === void 0 ? '(empty)' : _b;
(0, _helpers_1.printer)(sum, mult, div);
//  object
var person = {
    first: 'Pearl',
    last: 'Jam',
    age: 42,
    addr: {
        street: 'Exit on Main St',
        city: 'Alphaville',
        country: 'Moonlight Kingdom',
        addr2: 'Game Over'
    },
    namePerson: 'Pearl Jam'
};
var first = person.first, last = person.last, age = person.age, city = person.addr.city, country = person.addr.country, _c = person.addr, street = _c.street, addr2 = _c.addr2, _d = person.addr, st = _d.street, a2 = _d.addr2;
(0, _helpers_1.printer)(first, last, city, country);
(0, _helpers_1.printer)(street, addr2);
(0, _helpers_1.printer)(st, a2);
// use ... to make 2 objects become 1
var animal = {
    first: 'Deau',
    last: 'Ville',
    age: 21,
    addr: {
        street: 'Sunset Blvd.',
        city: 'Los Angeles',
        country: 'California'
    },
    nameAnimal: 'Deauville'
};
var combined = __assign(__assign({}, person), animal);
(0, _helpers_1.printer)(combined);
// destructuring an object in function
var printCombined = function (_a) {
    var nameAnimal = _a.nameAnimal, namePerson = _a.namePerson;
    console.log("Beast: ".concat(nameAnimal, "\nMoral: ").concat(namePerson));
};
printCombined(combined);
