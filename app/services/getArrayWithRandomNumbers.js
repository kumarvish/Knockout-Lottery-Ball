"use strict";

/*
 *Returns an array containing random numbers between min and max values (inclusive)
 * @param {number} minValue
 * @param {number} maxValue
 * @param {number} numberOfItems
 * @return {[number]}
 */
lotteryApp.getArrayWithRandomNumbers = function (minValue, maxValue, numberOfItems) {
    var items = [];
    for (var i = minValue; i < maxValue + 1; i++) {
        items.push(i);
    }

    for (var i = maxValue; i > numberOfItems; i--) {
        items.splice(Math.floor(Math.random() * i), 1);
    }
    return items;
}