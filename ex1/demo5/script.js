var canvas = new fabric.Canvas('canvas');
var rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 100,
    height: 100,
    fill: 'red'
})

//angle:动画，360最后的位置
rect.animate('angle', 360, {
    onChange: canvas.renderAll.bind(canvas),
    duration: 2000,//加时间
    easing:fabric.util.ease.easeOutBounce
});

canvas.add(rect);