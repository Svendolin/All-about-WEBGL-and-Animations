// Scrollmagic Animation 

if (document.documentElement.clientWidth > 790){

  // Initialize Controller
  let controller = new ScrollMagic.Controller({addIndicators: true});


  // 1. Parallax Background
  new ScrollMagic.Scene({
    triggerElement: '#parallax',
    triggerHook : 'onEnter'
  })
  .duration('200%')
  .setTween('#parallax', {
    backgroundPosition: '50% 100%',
    ease: Linear.easeNone
  })
  .addTo(controller)

  // 2. Pin Effect
  new ScrollMagic.Scene({
    triggerElement: '#slideIn',
    triggerHook : 'onLeave'
  })
  .setPin('#slideIn')
  .duration('100%')
  .addTo(controller)


  // 3. Diverse Animations

  // Timelines
  const fromLeftTimeline = gsap.timeline()
  const fadeTimeline = gsap.timeline()
  const fromBottomTimeline = gsap.timeline()


  // From left to right
  fromLeftTimeline
  .from('.left', {
    x: -500,
    duration: 1
  })
  .to('.left', {
    x: 0,
    duration: 1
  })

  // Fade
  fadeTimeline
  .from('.opacity', {
    autoAlpha: 0
  })
  .to('.opacity', {
    autoAlpha: 1
  })

  // From bottom to center
  fromLeftTimeline
  .from('.bottom', {
    y: 500
  })
  .to('.bottom', {
    y: 0
  })

  new ScrollMagic.Scene({
    triggerElement: '#slideIn2',
    offset : 200
  })
  .setTween(fromLeftTimeline)
  .duration(400)
  .addTo(controller)


  new ScrollMagic.Scene({
    triggerElement: '#slideIn2',
    offset : 200
  })
  .setTween(fadeTimeline)
  .duration(400)
  .addTo(controller)

  
  new ScrollMagic.Scene({
    triggerElement: '#slideIn2',
    offset : 200
  })
  .setTween(fromBottomTimeline)
  .duration(400)
  .addTo(controller)



}