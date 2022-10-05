"use strict";
exports.__esModule = true;
exports.autobind = void 0;
var autobind = function (_, _2, descriptor) {
    var originalMethod = descriptor.value;
    var adjDescriptor = {
        configurable: true,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
};
exports.autobind = autobind;
