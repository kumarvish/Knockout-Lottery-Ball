"use strict";

lotteryApp.NumberGenerator = function () {
    var hasBonus = false;
    var MIN_NUMBER = 1, MAX_NUMBER = 49, NUM_OF_ITEMS = 6;
    var vm = this;
    vm.currentNumbers = ko.observableArray([]);
    vm.wishList = ko.observableArray([]);

    function initialise() {
        generateNewNumbers();
    }

    function generateNewNumbers() {
        clearCurrentNumbers();
        var allPicks = lotteryApp.getArrayWithRandomNumbers(MIN_NUMBER, MAX_NUMBER, NUM_OF_ITEMS);
        vm.currentNumbers(new LotteryNumber(allPicks));
    }

    function addToWishList() {
        /*
         local storage can to implemented for persisting wish list
         */
        vm.wishList.unshift(new WishList(vm.currentNumbers()));
        clearCurrentNumbers();
    }

    function clearWishList() {
        vm.wishList([]);
    }

    function removeFromWishList(item) {
        vm.wishList.remove(item);
    }

    //Private functions
    function clearCurrentNumbers() {
        vm.currentNumbers([]);
    }

    function LotteryNumber(numbers, bonusNumber) {
        this.numbers = numbers;
        this.bonusNumber = bonusNumber;
    }

    function WishList(picks) {
        this.picks = picks;
    }

    return {
        initialise: initialise,
        currentNumbers: vm.currentNumbers,
        wishList: vm.wishList,
        generateNewNumbers: generateNewNumbers,
        addToWishList: addToWishList,
        removeFromWishList: removeFromWishList,
        clearWishList: clearWishList
    }
}