console.log('start');
var intDiv = function (num, div) { return Math.floor(num / div); };
var dataPoints = [
    { name: 'a', x: -3, y: 3 },
    { name: 'b', x: -3, y: 2.5 },
    { name: 'c', x: 1, y: 1 },
    { name: 'd', x: 0.8, y: -1 },
    { name: 'e', x: 4.2, y: 3.5 },
    { name: 'f', x: 5, y: 3.2 },
    { name: 'g', x: 4.2, y: 3.5 },
    { name: 'h', x: -5, y: -2.5 },
    { name: 'i', x: -3.1, y: -2.5 },
    { name: 'x', x: 0, y: 0 },
    { name: 'y', x: 6, y: 0 },
];
console.log('5/2: ', intDiv(5, 2));
dataPoints.forEach(function (p) { return console.log(p.name); });
var w = 6;
var h = 4;
var r = 2;
var getCell = function (dp) {
    console.log("x: ".concat(dp.x, " x': ").concat(intDiv(dp.x + 2, r)));
};
