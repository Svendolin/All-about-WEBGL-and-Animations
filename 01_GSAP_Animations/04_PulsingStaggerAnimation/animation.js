const pageWidth = window.innerWidth
const pageHeight = window.innerHeight

const numberOfCols = 24

const squareSize = Math.floor(pageWidth/numberOfCols)
const numberOfRows = Math.floor(pageHeight/squareSize)

const numberOfSquares = numberOfCols * numberOfRows 
 for(let i = 0; i < numberOfSquares; i++){
   const square = document.createElement('div')
   square.setAttribute('class','box')
   square.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px;`)
   document.querySelector('.container').append(square)
 }

 gsap.to('.box', {
   opacity: 0,
   background: 'rgb(112,0,112)',
   borderRadius: '50%',
   scale: 0.1,
   ease: 'ease.inOut',
   y: 33,
   stagger: {
     amount: 2,
     from: 'center',
     grid: 'auto'
   },
   yoyo: true,
   repeat: -1  // Für Yoyo Effekt und Wiederholung
 })

