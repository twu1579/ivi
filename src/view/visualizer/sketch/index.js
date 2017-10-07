export default p  => {

  // Used for drawing variable boxes
  // Set to negative due to issues with incrementing in mousePressed() funct
  var xCoord = -60
  var yCoord = 30
  var boxCount = 0
  
  p.setup = () => {
    p.createCanvas(650, 400)
  }

  p.draw = () => {
  	// Background and box same color to give outlined effect
    p.background('white')
    p.stroke('black')
    p.fill('white')
    // draw() function continuously loops by default
    // this prevents the infinite loop
    p.noLoop()
  }

  p.mousePressed = () => {

  	// This calls draw to execute 1 time
		p.redraw()

  	// We can fit 7 variable boxes comfortably in the width of the canvas
  	// After 7 boxes move input of boxes to next row down
  		if(boxCount == 7){
  			yCoord = yCoord + 80
  			xCoord = -60
  			boxCount = 0
  		}
		
	  	p.draw = () => {

	    p.rect(xCoord, yCoord, 40, 40, 3)
	    p.text("Variable", xCoord, yCoord-2)
	    p.text("Value", xCoord+6, yCoord+25)
	   
  		}

		boxCount = boxCount+1
  		xCoord = xCoord + 90

  }


}