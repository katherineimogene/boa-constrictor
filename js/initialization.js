// namespace
BOA = {}

BOA.Game = function(){
	this.ctx = null
	this.xPosition = 0
	this.yPosition = 0
	this.frameLength = 300
	this.canvasSideLength = 700
}

BOA.Game.prototype = {
	initialize: function(){
		this.readyDOM()
		this.gameLoop()
	},

	readyDOM: function(){
		$('body').append('<canvas id="game-canvas">')
		var $canvas = $('#game-canvas')
		$canvas.attr('width', this.canvasSideLength)
		$canvas.attr('height', this.canvasSideLength)
		var canvas = $canvas[0]
		this.ctx = canvas.getContext('2d')
	},

	gameLoop: function(){
		this.xPosition += 2
		this.yPosition += 4
		this.ctx.clearRect(0,0,this.canvasSideLength,this.canvasSideLength)
		this.ctx.fillStyle = '#fe57a1'
		this.ctx.fillRect(this.xPosition, this.yPosition, 50, 70)
		setTimeout(this.gameLoop, this.frameLength)
	}

}

$(document).ready(function(){
	var boaGame = new BOA.Game()
	boaGame.initialize()
})

// context
// xPosition
// yPosition
// frameLength

// initialization:
// <canvas> element with an id
// width and height
// ctx = canvas.getContext('2d')


// // The standard way to make movement in a game is with the game loop. This is a function that gets called at a fixed interval to update the state of the game and display the changes.
// run the game
// change xPosition
// change yPosition
// clear the canvas clearRect(a,b,c,d)
// fill the canvas fillStyle hexcode
// fill the canvas fillRect(a,b,c,d)
// getTimeout(gameLoop, frameLength)


// //snake
// posArray
// direction

// fn drawSection
// draw snake
// advance snake

// //user: moving the snake
// bind events keycodes 37,38,39,40 and keydown
// set direction
// valid directions