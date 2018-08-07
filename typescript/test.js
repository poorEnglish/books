var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Blue"] = 5] = "Blue";
    Color[Color["Brown"] = 6] = "Brown";
})(Color || (Color = {}));
var c = Color.Blue;
function getArea(config) {
    var newArea = { color: Color.Red, area: 100 };
    if (config.color)
        newArea.color = config.color;
    if (config.width)
        newArea.area = Math.pow(config.width, 2);
    return newArea;
}
console.log(getArea({ color: Color.Blue, width: 30, name: 'sd' }));

