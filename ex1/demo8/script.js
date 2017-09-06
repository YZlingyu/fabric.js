var canvas = new fabric.Canvas('canvas');
var text = new fabric.Text('hello world',{
    left: 100,
    top: 100
});

//调整字体样式
var comicSansText = new fabric.Text("comin sana",{
    fontFamily: 'Comic Sans',
    left: 100,
    top: 130
})

//字体大小
var text40 = new fabric.Text("I'm at fontSize 40", {
    fontSize: 40,
    left: 100,
    top: 160
});
var text20 = new fabric.Text("I'm at fontSize 20", {
    fontSize: 20
});

//字体加粗
var boldText = new fabric.Text("I'm at bold text", {
    fontWeight: 'bold',
    left: 100,
    top: 210
});

canvas.add(text);
canvas.add(comicSansText);
canvas.add(text40);
canvas.add(text20);
canvas.add(boldText);
