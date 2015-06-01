"use strict";

$(function(){
   var lotteryVM = new lotteryApp.NumberGenerator();
    lotteryVM.initialise();
    ko.applyBindings(lotteryVM);
});