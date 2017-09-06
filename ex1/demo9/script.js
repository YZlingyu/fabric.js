var canvas = new fabric.Canvas('canvas');
//方形
var rect = new fabric.Rect({ width: 100, height: 50, fill: 'green' });
rect.on('selected', function() {//选中监听事件
    console.log('selected a rectangle');
});
//圆形
var circle = new fabric.Circle({ radius: 75, fill: 'blue' });
circle.on('selected', function() {
    console.log('selected a circle');
});

canvas.add(rect);
canvas.add(circle);
