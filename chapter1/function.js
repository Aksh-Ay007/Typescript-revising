"use strict";
//this is not just you just is writing the code this is a team of 20 or 30 people
//and they are working on the same codebase and they are working on the same file so someone try to return a string
//and someone try to return a number so how we can handle this situation
//so we can use the typescript to handle this situation,that why iam using and mention type number which should return the function
//and if you try to return a string then typescript will give you an error
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //return 'hello';
}
function toUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPaid) {
}
var isLogin = function (name, email, isPaid) { };
signUp('akki', 'njfdskfds', true);
addTwo(5);
isLogin('akki', 'njfdskfds');
toUpper('akki');
///part 2 of functions
function isValues(val) {
    if (val > 0) {
        return true;
    }
    return 'its not a positive number';
}
//for arrow function
var isCheck = function (val) {
    if (val > 0) {
        return true;
    }
    return 'it is not';
};
isValues(5);
isCheck(7);
