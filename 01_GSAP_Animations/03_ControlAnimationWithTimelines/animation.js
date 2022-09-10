

/// --- Eine Timeline für alle Occasions --- /// 

const timeline1 = gsap.timeline() //.pause() anhängen, um die Timeline zu pausieren oder die unteren Angaben wie z.B timeScale(2): So hat die Timeline bereits zu BEGINN diesen Wert! :D

timeline1
.to('.red', {
  x: 300,
  duration: 3
})
.to('.orange', {
  x: 250,
  y: 300,
  scale: 3,
  duration: 3
}, '-=1.5')      //Verzögerung einbauen
.to('.green', {
  x: 600,
  y: 200,
  opacity: 0,
  duration: 3
}, '-=1.5')
.to('.blue', {
  x: 2,
  y: 60,
  rotation: 360,
  duration: 3
}, '-=1.5')
.to('.pink', {
  x: 700,
  y: 300,
  rotation: 40,
  duration: 3
}, '-=1.5')


/// --- Buttons, um die timeline1 zu beeinflussen --- ///

// Play  Button to play the animation (timeline)
document.querySelector('#play').addEventListener('click', e => {
  console.log('Playing Animation')
  timeline1.play()
}) //timeline.resume() = Forsetzung BZW .play() = Ein erneuter Start


// Pause Button to pause the animation (timeline)
document.querySelector('#pause').addEventListener('click', e => {
  console.log('Pausing Animation')
  timeline1.pause()
})


// Reverse Button to reverse the animation (timeline)
document.querySelector('#reverse').addEventListener('click', e => {
  console.log('Reversing Animation')
  timeline1.reverse()
})

// Accelerate Button to change the speed of the animation (timeline)
document.querySelector('#accelerate').addEventListener('click', e => {
  console.log('Accelerate Animation')
  timeline1.timeScale(2)  // z.B (1) ist das originale Tempo
})


// Slow Down Button to change the speed of the animation (timeline)
document.querySelector('#slow').addEventListener('click', e => {
  console.log('Slow Down Animation')
  timeline1.timeScale(0.5)  
})

// Seek Button to go to a point of the animation (timeline)
document.querySelector('#seek').addEventListener('click', e => {
  console.log('Jump to a time point')
  timeline1.seek(2)  // Animation wird 2s springen
})

// Progress Button to go to a %-point of the animation (timeline)
document.querySelector('#progress').addEventListener('click', e => {
  console.log('Jump to a % point')
  timeline1.progress(0.5)  
})

// Restart Button to restart the animation from 0 (timeline)
document.querySelector('#restart').addEventListener('click', e => {
  console.log('Restarting Animation')
  timeline1.restart().pause()  // Man kann mehrere Befehle hinetereinander anhängen. Unbegrenzte Möglichkeiten!
})