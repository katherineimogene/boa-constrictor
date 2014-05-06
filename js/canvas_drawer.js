Boa.CanvasDrawer = function(width, height){
         this.canvas = document.createElement('canvas'),
            this.ctx = this.canvas.getContext('2d');
   this.canvas.width = width;
  this.canvas.height = height;
            this.div = document.getElementById('game-canvas')
}

Boa.CanvasDrawer.prototype = {
  draw: function(){
    this.div.appendChild(this.canvas);
    this.ctx.lineWidth   = 2;       // Our border will have a thickness of 2 pixels
    this.ctx.strokeStyle = 'black'; // The border will also be black
    this.ctx.strokeRect(2, 20, this.canvas.width - 4, this.canvas.height - 24);
  },

  makeMatrix: function(){
    var gameMatrix = this.gameMatrix
    gameMatrix = new Array(71)
    for (var i=0; i<gameMatrix.length; i++){
      gameMatrix[i] = new Array(33)
    }
    console.log(gameMatrix)
  }
}





