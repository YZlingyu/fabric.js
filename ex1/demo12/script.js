var canvas = new fabric.Canvas('canvas');
var rect = new fabric.Rect({
    width: 100,
    height: 100,
    fill: 'red'
});
canvas.add(rect);

console.log(JSON.stringify(canvas.toJSON()));
console.log(canvas.toSVG());

canvas.loadFromJSON('{"objects":[{"type":"rect","originX":"left","originY":"top","left":0,"top":0,"width":100,"height":100,"fill":"red","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"rx":0,"ry":0}]}');