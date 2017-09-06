var canvas = new fabric.Canvas('canvas');

fabric.Image.fromURL('../2.png',function(oImg){
    oImg.scale(0.1);
    canvas.add(oImg);
});