
// Register plugin once:
gsap.registerPlugin(MotionPathPlugin);



/* Timeline for interactive experience */

/// --- 1) Timeline for the button to start everything --- ///
const button = gsap.timeline()

/// --- 2) Timeline to let the leaves fall --- ///
const leaves = gsap.timeline().pause()

/// --- 3) Timeline for title --- ///
const title = gsap.timeline().pause()

/// --- 4) Timeline to unleash the spirit of Japan --- ///
const fujiAndSun = gsap.timeline().pause()


document.querySelector('.buttonToStart').addEventListener('click', e => {
  button
    .to('.firstClick', {
      opacity: 0,
      display: 'none',             // Helps to vanish this top layer away, so the cta can be clicked at the very end
      ease: 'linear',
      duration: 3, 
      onComplete: function(){      // Over here we resume to timelines at the same time after this click
        leaves.play(), title.play();
      },
    })    
});


leaves
.to('.firstLeaf',  {
    motionPath: {
    path: [
      {x:-50, y:230}, 
      {x:-100, y:230}, 
      {x:-80, y:210},
      {x:-60, y:220},
      {x:-60, y:250},
      {x:-100, y:350},
    ],
  },
  duration: 6,
  curviness: 8,
  repeat: -1,
  repeatDelay: 7, 
  yoyo: false,
  rotation: 3500,
  xPercent: -50,  
  yPercent: -50,
  ease: "power1",
}) //.pause()
.to('.secondLeaf', {
  motionPath: {
  path: [
    {x:-200, y:200}, 
    {x:-400, y:340},
  ],
},
duration: 4,    // Leaf falls in 4 seconds
curviness: 0,  
repeat: -1,     // Infinite repeat
repeatDelay: 4, // 4 Second Delay after every Repeat
yoyo: false,    // A,B,A,B - Scheme
rotation: 2900, 
xPercent: -50,  // Placed in the middle of the path line
yPercent: -50,
ease: "power1.in",  
}, '<2')
.to('.thirdLeaf', {
  motionPath: {
  path: [
    {x:-70, y:100},
     {x:-190, y:180}, 
     {x:-220, y:280},
    ],
},
duration: 5,    
curviness: 3,   
repeat: -1,     
yoyo: false,    
rotation: 2000, 
xPercent: -50,  
yPercent: -50,
ease: "power1.out",
delay: 2,        // Little starting delay of 2 Seconds before the animation starts
})
.to('.fourthLeaf', {
  motionPath: {
  path: [
    {x:-20, y:100}, 
    {x:-100, y:200}, 
    {x:-50, y:300},
  ],
},
duration: 5,    
curviness: 3,   
repeat: -1,
repeatDelay: 2,     
yoyo: false,    
rotation: 2000, 
xPercent: -50,  
yPercent: -50,
delay: 4,
})
.to('.fifthLeaf', {
  motionPath: {
  path: [
    {x:-290, y:100}, 
    {x:-390, y:200}, 
    {x:-590, y:300},
  ],
},
duration: 6,    
curviness: 3,   
repeat: -1,
repeatDelay: 4,      
yoyo: false,    
rotation: 4000, 
xPercent: -50,  
yPercent: -50,
delay: 4,
ease: "power1.out",

});


title
.to('.title', {
  delay: 9,
  duration:5,
  opacity: 1,
})
.to('h1', {         
  scale: 1,
  ease: 'bounce.out', 
  duration: 0.6,
})
.to('h1', {        
  scale: 1.1, 
  ease: 'linear', 
  duration: 0.6,
})
.to('h1', {         
  scale: 1,
  ease: 'bounce.out', 
  duration: 0.6,
})
.to('h1', {        
  scale: 1.1, 
  ease: 'linear', 
  duration: 0.6,
})
.to('h1', {         
  scale: 1,
  ease: 'bounce.out', 
  duration: 0.6,
})
.to('h1', {        
  scale: 1.1, 
  ease: 'linear', 
  duration: 0.6,
  onComplete: function(){    
    fujiAndSun.play();
  },
});


// document.querySelector('.button').addEventListener('click', e => {
//  spiritOfJapan
//   .to('.title', {
//     opacity: 0,
//     ease: 'linear',
//     duration: 2,
//     onComplete: function(){     
//       fujiAndSun.play();
//     },
//   });
// });


fujiAndSun
  .to('h1', {         
    opacity: 0,
    ease: 'linear', 
    duration: 4,
  })
  .fromTo('.fuji', {                    
    opacity: 0,                          
    bottom: '-100%',                  
  }, 
  {
    opacity: 1,
    ease: 'circ',  
    duration: 3,          
    bottom: 0, 
  })
  .to('.movingsun', {
    motionPath: {
    path: [
      {x:350, y:-300}, 
      {x:577, y:-435},
    ],
  },
    opacity: 1,
    duration: 7,    
    curviness: 1,    
    xPercent: -50,  
    yPercent: -50,        
  })
  .to('.flag', { 
    opacity: 1,       
    ease: 'sine.out', 
    duration: 5,
  })
  .to('.godzilla', { 
    opacity: 1,       
    ease: 'linear', 
    duration: 4,
  },'<1')  // This Animation will start right 1 second after the animation before has started
  .fromTo('.cta', {                                             
    left: '-100%',                 
  }, 
  {
    duration: 3,          
    left: '8%', 
  },'<1');
    document.querySelector('.cta').addEventListener('click', e => {
  });


/* Some adjustments for Holwer.js if needed */


// /// --- Sound for Howler.JS --- ///
// var sound = new Howl ({
//   src: ['audio/song.mp3']  // Source to sound object
// })

// sound.play();

// var button = document.getElementsByClassName('.button'); // 

// button.addEventListener('click', myPlay); 

// function myPlay() {
//     var audio = new Audio ("audio/song.mp3");
//     audio.play();
// } ;





