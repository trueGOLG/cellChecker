console.log('start2');
var out = function (val) { return console.log(val); };
var intDiv = function (num, div) { return Math.floor(num / div); };
var cellWidth = 6;
var cellHeight = 4;
var fieldSize_X = 12;
var fieldSize_Y = 8;
var max_X = 0.5 * fieldSize_X;
var max_Y = 0.5 * fieldSize_Y;
var rx = max_X / (0.5 * cellWidth);
var ry = max_Y / (0.5 * cellHeight);
var getCell = function (dp) {
    var xn = intDiv(dp.x + max_X, rx);
    var yn = intDiv(dp.y + max_Y, ry);
    var cellN = cellWidth * (cellHeight - yn) - cellWidth + xn + 1;
    // console.log(`${dp.name} - x': ${xn} ; y: ${yn}  --- ${cellN}`)
    console.log("".concat(dp.name, " - x': ").concat(xn, " ; y: ").concat(yn, "  --- ").concat(cellN));
};
var dataPoints = [
    // { name: 'a', x: -3, y: 3 },
    // { name: 'b', x: -3, y: 2.5 },
    // { name: 'c', x: -1, y: 1 },
    // { name: 'd', x: 0.8, y: -1 },
    // { name: 'e', x: 4.2, y: -3.5 },
    // { name: 'f', x: 5, y: 3.2 },
    // { name: 'g', x: 4.2, y: 3.5 },
    // { name: 'h', x: -5, y: -2.5 },
    // { name: 'i', x: -3.1, y: -2.5 },
    // { name: 'x', x: 0, y: 0 },
    // { name: 'y', x: 6, y: -4 },
    { name: 'x1', x: -6, y: -4 },
    { name: 'x2', x: -6, y: -4 },
    { name: 'x3', x: -6, y: 0 },
    { name: 'x4', x: -6, y: 4 },
    { name: 'x5', x: -2, y: 0 },
    { name: 'x6', x: -4, y: 2 },
];
dataPoints.forEach(getCell);
