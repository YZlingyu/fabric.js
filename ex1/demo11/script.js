var canvas = new fabric.Canvas('canvas');
//声明一个正方形
var rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 100,
    height: 100,
    fill: 'red'
});
//声明一个圆形
var circle = new fabric.Circle({
    radius: 50,
    top: 100,
    left: 200,
    fill: 'green'
})
//把声明好的正方形和圆形进行组合
var group = new fabric.Group([rect, circle], { left: 200, top: 100 });
//在组合好之后我们又声明了一个正方形，并加入到组合图形的中间
group.addWithUpdate(new fabric.Rect({
    fill: 'blue',
    width: 100,
    height: 100,
    left: group.getLeft(),
    top: group.getTop(),
    originX: 'center',
    originY: 'center'
}));

canvas.add(group);