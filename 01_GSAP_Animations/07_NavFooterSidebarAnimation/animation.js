/// --- gsap.property, um Animation auszulösen als einzelne TWEEN: --- ///
/// --- header animated -- ///

// gsap.from('.header', { // gsap.to = zu einem bestimmten Status / gsap.from = von einem bestimmten Status / (fungiert wie QuerySelectorAll = 'Elemente', die angesprochen werden)
//   duration: 1,
//   y: '-100%',          // Einblenden innert 1 Sekunde von Oben herunter
//   ease: 'bounce'      // Ease-EinblendeFunktionen in GSAP anschauen. Es gibt eine menge Möglichkeiten, dagestellt in Kurven
// })  

// /// --- links animated --- ///
// gsap.from('.link', {
//   duration: 1,
//   opacity: 0,
//   delay: 1,           // delay: verzögert diese Animation um 1 Sekunde. d.h sie dauert zwar auch 1 Sekunde, allerdings erst nach der oberen Animtaion
//   stagger: .5         // stagger: Gibt es mehrere (wie in diesem Fall) mehrere 'link'-Elemente, kann mit der stagger.property eines nach dem anderen um 0.5 Sekunden verzögert werden
// })

// /// --- right sidebar animated --- ///
// gsap.from('.right', { 
//   duration: 1,
//   x: '-100vw',        //  Flizt dadurch von links über den Bildschirm nach rechts.
//   delay: 1,
//   ease: 'power2in'    //  Ease-EinblendeFunktionen aus der GSAP library     
// })

// /// --- left sidebar animated --- ///
// gsap.from('.left', { 
//   duration: 1,
//   x: '-100%',        //  Startet dadurch auch ausserhalb des Bildschirmrandes
//   delay: 1.5,        // Animation der "right sidebar" ist bereits 1 sekunde verspätet. 1.5 ergibt somit nochmals eine um 0.5 Sekunden spätere Verzögerung für left sidebar
// })

// /// --- footer animated --- ///
// gsap.to('.footer' , { // gsap.to = Start passiert beim Basiswert aus dem CSS und dirigert sich zu diesem Wert hin. Dieser Wert ist im CSS mit TransformTranslate angegeben
//   duration: 1,
//   y: 0,
//   ease: 'elastic',
//   delay: 2.5
// })

// /// --- reverse-button animated --- ///
// gsap.fromTo('.button' , {  // Inkludeirt from und to = So muss man sich nicht wie bei "to" um Defaultwerte im CSS Gedanken machen
//   //from-Werte:
//   opacity: 0,        // So erzeugen wir einen FADE IN
//   scale: 0,
//   rotation: 720      // Anfangswert: Um 720 Grad gedreht, dreht sich am Ende nun auf 0 Grad
// } , {
//   //to-Werte:
//   duration: 1,       // Dauer nur 1x nötig, wie auch die Verzögerung. Am einfachsten in den "to-Bereich" einsetzen  
//   delay: 3.5,
//   opacity: 1,
//   scale: 1,
//   rotation: 0 
// })


// oder.....



/// --- Animation als eigene TIMELINE angeben mit default werten --- ///
// Vorteil hierbei: Kombiniert die verschiednen Animationen zusammen, die miteinander gekoppelt sind. So automatisiert sich die DURATION bei allen (wenn eines abgeändert wird z.B.) ansonsten wäre das Chaos vorprogrammiert!
const timeline = gsap.timeline({
  defaults: {duration: 1}  // Cool: Wir geben am Anfang der Timeline Defaultwerte mit. So gilt dieser Wert bei allen Timeline Stücken!
})

// Für den Optischen Touch kann man oben zuerst alle Timelines definieren und dann ab hier Werte angeben:
timeline.from('.header' , { 
  // duration: 1,
  y: '-100%',          
  ease: 'bounce'      
}) 
.from('.link', {
  opacity: 0,
  // delay: 1,               ---> Wird auch nicht mehr gebraucht, da in der Timeline alles nacheinander geschieht         
  stagger: .5              // Texte erscheinen im 0.5 Sekundentakt nacheinander ins Bild      
})
.from('.right', { 
  // duration: 1,
  x: '-100vw',        
  // delay: 1,
  ease: 'power2in'        
}, 1 /*Absolute delay */)  // Absolute delay (Sobald die Timeline startet soll dieser Effekt auch passieren) oder relative delay (Sobald der vorhergehende Animation 'link' geendet hat)
.from('.left', { 
  // duration: 1,
  x: '-100%',       
  // delay: 1.5,       
}, '<.5')                 // '<.5' Bezieht sich auf die vorherige Animation: Diese Animation startet dadurch 0.5 Sekunden nachdem '.right' gestartet ist!
.to('.footer' , { 
  // duration: 1,
  y: 0,
  ease: 'elastic',
  // delay: 2.5
})                        // Da es der Reihenfolge geht, wird diese Animation gleich nachdem die 'left' und 'right' Animation beendet ist.
.fromTo('.button' , {  
  //from-Werte:
  opacity: 0,       
  scale: 0,
  rotation: 720      
} , {
  //to-Werte:
  // duration: 1,       
  // delay: 3.5,
  opacity: 1,
  scale: 1,
  rotation: 0 
})

/// --- Timeline über den BUTTON rückwärts laufenlassen --- ///
const button = document.querySelector('.button')
button.addEventListener('click' , e => {
  timeline.timeScale(2) // Reverse geschieht 2x schneller als im sonstigen Vergleich
  timeline.reverse()    // Dem Reverse-Button geben wir reverse, anderen Buttons z.B. pause(), seek() etc wie in Aufgabe 04
})


/// --- Unendliche Abfolge der Animation --- ///
// const myTimeline = gsap.timeline({repeat: -1, yoyo: true})