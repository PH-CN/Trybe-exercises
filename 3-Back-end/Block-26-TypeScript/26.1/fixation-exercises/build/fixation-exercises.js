"use strict";
var Days;
(function (Days) {
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
    Days[Days["sunday"] = 7] = "sunday";
})(Days || (Days = {}));
var RainbowColors;
(function (RainbowColors) {
    RainbowColors["red"] = "vermelho";
    RainbowColors["orange"] = "laranja";
    RainbowColors["yellow"] = "amarelo";
    RainbowColors["green"] = "verde";
    RainbowColors["blue"] = "azul";
    RainbowColors["indigo"] = "anil";
    RainbowColors["purple"] = "violeta";
})(RainbowColors || (RainbowColors = {}));
var Actions;
(function (Actions) {
    Actions[Actions["save"] = 1] = "save";
    Actions[Actions["print"] = 2] = "print";
    Actions[Actions["open"] = 3] = "open";
    Actions[Actions["view"] = 4] = "view";
    Actions[Actions["close"] = 5] = "close";
})(Actions || (Actions = {}));
var Cardinal;
(function (Cardinal) {
    Cardinal["north"] = "n";
    Cardinal["south"] = "s";
    Cardinal["east"] = "e";
    Cardinal["west"] = "w";
})(Cardinal || (Cardinal = {}));
var monday = Days.monday;
var red = RainbowColors.red;
var save = Actions.save;
var north = Cardinal.north;
console.log("".concat(monday, " ").concat(red, " ").concat(save, " ").concat(north));
