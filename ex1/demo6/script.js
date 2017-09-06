var canvas = new fabric.Canvas('canvas');

fabric.Image.fromURL('../2.png', function(img) {
    img.filters.push(
        new fabric.Image.filters.Sepia(),
        new fabric.Image.filters.Brightness({ brightness: 100 })

    );
    img.applyFilters(canvas.renderAll.bind(canvas));
    canvas.add(img);
});