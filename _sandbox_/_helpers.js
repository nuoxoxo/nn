"use strict";
exports.__esModule = true;
exports.printer = void 0;
var printer = function () {
    var nodes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nodes[_i] = arguments[_i];
    }
    if (nodes.length === 0) {
        console.log();
        return;
    }
    for (var _a = 0, nodes_1 = nodes; _a < nodes_1.length; _a++) {
        var node = nodes_1[_a];
        console.log('(printing)\t', node, " (".concat(typeof node, ")"));
    }
    console.log("(length: ".concat(nodes.length, ")"));
    console.log();
};
exports.printer = printer;
