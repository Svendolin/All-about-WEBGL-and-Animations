// 1. Timeline für violettes WEB LOGO und anschliessendem SAE logo
const web_and_sae_logos = gsap.timeline()
// 2. Timeline für orange Linie und Text
const line_and_text = gsap.timeline().pause()
// 3. Timeline für ul mit discs
const ul_tl = gsap.timeline().pause()
// 4. CTA timeline, um auf die Webseite zu kommen
const cta_tl = gsap.timeline().pause()



// 1. Animation für violettes WEB LOGO und anschliessendem SAE logo
web_and_sae_logos
.to('.web', {         // .to = Einfachster Weg, grad zum kommenden Zustand zu springen
  scale: 1.4,
  ease: 'linear',     // ease = Für einen sauberen Übergang
  duration: 0.6
})
.to('.web', {         
  scale: 1,
  ease: 'bounce.out', // Beschleunigung hat eine andere Kurve. Ease sind Funktionen. Gibt gaaanz viele, auf greensock.com ersichtlich
  duration: 0.6
})
.to('.web', {         // Ganzer Brocken x3 ausführen, da der Herzschlag 3x läuft
  scale: 1.4, 
  ease: 'linear', 
  duration: 0.6 
})
.to('.web', {
  scale: 1, 
  ease: 'bounce.out', 
  duration: 0.6 
})
.to('.web', {
  scale: 1.4, 
  ease: 'linear',
  duration: 0.6 
})
.to('.web', {
  scale: 1,
  ease: 'bounce.out', 
  duration: 0.6 
})
.set('.web', {                   // .set ist ein Zustand
  autoAlpha: 0                   // Speziell für Greensock. D.h nach der Timelineabfolge wird die Visibility auf 0 (hidden) gesetzt.
})            
.fromTo('.sae', {                // FromTo braucht im Gegensatz zu "to" oder "From" 2 Properties, da FromTo VON und ZU markiert...    
  opacity: 0,           
  duration: 0.3,                 // ...braucht dafür nur eine duration!
  left: '-100%'                  // WICHTIG: %-Werte als String ''
}, 
{
  opacity: 1, 
  // duration: 0.3           
  left: '50%', 
  onComplete: function(){        // WICHTIG: Callback Funktion einleiten. So können die Timelines unabhängig voneinander kontrolliert werden
    line_and_text.resume()
  }}
);


// 2) Animation für orange Linie und Text
line_and_text
.fromTo('.line', {
  autoAlpha: 0                                 // Zuerst autoAlpha 0, dann 1 (d.h zuerst NICHT sichtbar, dann sichtbar)
}, {
  autoAlpha: 1,
  duration: 0.2,
  repeat: 6

}, '+=1')                                     // Für eine leichte Verzögerung (pause) von 1 sek
.to( '.text', {                               // Greensock.com > DOCS > text cdn kopieren
  text : "Programmiere \n deine \n Zukunft",
  duration: 2,
  ease: 'linear'                              // Keine Beschleunigung dadurch, alles bleibt schön linear
})
.to('.text', {
  top: '10%',
  ease: 'elastic.out(1, 0.3)',                // Gerechnete empfohlene Beschleunigung. Ersichtlich bei DOCS > EASE
  duration: 2,
  onComplete: function () {
    ul_tl.resume()
  }
})
      

// 3) Animation für orange Linie und Text
ul_tl
.to('ul li', {
  opacity: 1,
  stagger: {        // Damit 1nach dem anderen involviert werden. 1stes li, dann 2tes li und und und...
    amount: 1.8,
    from: 0
  }
})
.to('ul li', {
  opacity: 0,
  stagger: {
    amount: 0.5,
    from: 6
  },
  onComplete: function () {
    cta_tl.resume()
  }
})


// 4) CTA Banner
cta_tl
.set('.cta',{
  display: 'block'
})
.to('.cta',{
  autoAlpha: 1,
  padding: '1.4rem 0',
  duration: 1,
  height: 'auto'
})


// 5) Kleine Animation, wenn das Event geklickt wird (Darum Animation nach Klickevent)
document.querySelector('.cta a').addEventListener('click', e => {
  cta_tl
  .to('.cta', {
    scale: 1.2,
    duration: 0.5  // 0.5 sekunden reichen aus von der Länge, es muss ein kurzer Klickweg sein
  })
  .to('.cta', {
    scale: 1,
    duration: 0.5
  })
})