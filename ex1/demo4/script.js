var canvas = new fabric.Canvas('canvas');
var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');//字符串参数，m是移动到0，0；l是用线连起来两个坐标,z选区，已经闭合后
//svg代替path
path.set({
    left:120,
    top:120,
    fill:'red'
});

canvas.add(path);