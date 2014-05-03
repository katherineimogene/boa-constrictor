Boa.GameCanvas = function(){

}

Boa.GameCanvas.prototype = {
  draw: function(){
    var canvas    = document.createElement('canvas'),
           ctx    = canvas.getContext('2d');
    canvas.width  = 204;
    canvas.height = 224;

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(canvas);

    ctx.lineWidth   = 2;       // Our border will have a thickness of 2 pixels
    ctx.strokeStyle = 'black'; // The border will also be black

    // context.strokeRect(X1, Y1, X2, Y2) allows us to draw outlined rectangles
    ctx.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);
  }
}


