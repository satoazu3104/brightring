import ScrollMagic from 'scrollmagic';

class ScrollFadeIn {
  constructor() {
   let box = document.querySelectorAll('.animation:not(.active)');
  //  console.log(box);
   if (box.length === null) {
    return;
   }
   let controller = new ScrollMagic.Controller();
   for (let i = 0; i < box.length; i++) {
   let scene = new ScrollMagic.Scene({
    triggerElement: box[i],
    triggerHook: 'onEnter',
    reverse: false,
    duration: 100,
    offset: 100,
   })
    // .addIndicators()
    .addTo(controller);
    scene.on('enter', () => {
     box[i].classList.add('active');
    });
   }
  }
 }
 new ScrollFadeIn();
 