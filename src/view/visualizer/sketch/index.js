import { getSketchState, } from '../state'

export default p => {
 
  function resizeCanvasToVisualizer() {
    const elem = document.getElementById('visualizer')
    p.resizeCanvas(elem.offsetWidth, elem.offsetHeight)
  }
 
  let known = {}
  p.setup = () => {
    p.createCanvas(0, 0)
    p.background('white')
    p.noStroke()
    resizeCanvasToVisualizer()
  }

  p.draw = () => {

    const state = getSketchState()
    
    let xCoord = 15
    let yCoord = 0
    let curObj = -1
    Object.keys(state).forEach((val, i) => {
      curObj += 1
      yCoord = 60 * curObj + 30

      if (yCoord > p.height - 45) {
        yCoord = 30
        xCoord += 100
        curObj = 0
      }
      if (known[val] === undefined || known[val] !== state[val]) {
        let fillColor = getColor(Math.floor(Math.random() * 11) + 1)

        p.fill(fillColor)
        p.rect(xCoord, yCoord, 80, 30, 3)

        p.fill('black')
        p.text(val, xCoord + 6, yCoord - 10)
        p.text(state[val], xCoord + 6, yCoord + 20)  

        known[val] = state[val]
      }
    })
  }

  p.windowResized = () => {
    resizeCanvasToVisualizer()

    p.background('white')
    reDrawKnown()
  }
  
  function reDrawKnown() {

    let xCoord = 15
    let yCoord = 0
    let curObj = -1
    Object.keys(known).forEach((val, i) => {
      curObj += 1
      yCoord = 60 * curObj + 30

      if (yCoord > p.height - 45) {
        yCoord = 30
        xCoord += 100
        curObj = 0
      }
      let fillColor = getColor(Math.floor(Math.random() * 11) + 1)

      p.fill(fillColor)
      p.rect(xCoord, yCoord, 80, 30, 3)

      p.fill('black')
      p.text(val, xCoord + 6, yCoord - 10)
      p.text(known[val], xCoord + 6, yCoord + 20)  
    })
  }

  function getColor(colorState) {
    switch(colorState) {
        case 0:
            return '#00c9fe'
        case 1:
            return '#00d4df'
        case 2:
            return '#00dab4'
        case 3:
            return '#ffb5b4'
        case 4:
            return '#ff96b4'
        case 5:
            return '#0096b4'
        case 6:
            return '#0069fb'
        case 7:
            return '#af96fb'
        case 8:
            return '#ff8b6a'
        case 9:
            return '#ffbf00'
        case 10:
            return '#ff00c3'
        case 11:
            return '#0000c3'
        default:
            return '#00c9fe'
    }
  }
}
