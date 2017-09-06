var canvas = new fabric.Canvas('canvas');
fabric.Image.fromURL('../2.png', function(img) {
    var img1 = img.scale(0.1).set({
        left: 100,
        top: 100
    });
    fabric.Image.fromURL('../I.jpg', function(img) {
        var img2 = img.scale(0.1).set({
            left: 175,
            top: 175
        });
        fabric.Image.fromURL('../2.png', function(img) {
            var img3 = img.scale(0.1).set({ left: 250, top: 250 });

            canvas.add(new fabric.Group([img1, img2, img3], { left: 200, top: 200 }));
        });
    });
});
