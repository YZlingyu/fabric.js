var canvas = new fabric.Canvas('canvas');
var circle = new fabric.Circle({
    left: 100,
    top: 100,
    radius: 50,
    strokeWidth: 1, //设置圆的边框是1个像素
    stroke: 'red' //边框颜色是红色
});
//设置填充颜色黑白渐变
circle.setGradient('fill', {
    //色标的位置
    x1: 0,
    y1: 0,//圆的最上沿位置
    x2: 0,
    y2: circle.height ,//圆的最下沿位置
    //渐变的颜色
    colorStops: {
        0: '#000',
        1: '#fff'
    }
});

//彩虹渐变
circle.setGradient('fill', {
    //色标的位置
    x1: 0,
    y1: 0,
    x2: circle.width,
    y2: 0,
    //渐变的颜色
    colorStops: {
        0: "red",
        0.2: "orange",
        0.4: "yellow",
        0.6: "green",
        0.8: "blue",
        1: "purple"
    }
});

canvas.add(circle);