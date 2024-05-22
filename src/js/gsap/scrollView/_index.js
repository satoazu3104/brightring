import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import './_positionMedia';
import './_parallax';
import './_blockText';

gsap.registerPlugin(ScrollTrigger);

const scrollDown = document.querySelectorAll('.js-scroll-down');
const scrollUp = document.querySelectorAll('.js-scroll-up');
const scrollLeft = document.querySelectorAll('.js-scroll-left');

const GetTriggerPoint = (trigger) => {
  const state = trigger.dataset.position;
  if (state == 'center' || !state) {
    return 'top bottom-=10%';
  } else if (state == 'bottom') {
    return 'top bottom-=10%';
  }
}

if (scrollDown) {
  scrollDown.forEach(elm => {
    let elmTl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: elm,
        start: GetTriggerPoint(elm),
        end: () => '+=' + (elm.clientHeight - elm.clientHeight),
        // markers: true
      }
    })

    elm.style.transform = 'translate(0, -80px)';
    elm.style.opacity = 0;

    elmTl.addLabel('start')
      .to(elm, {
        y: 0,
        opacity: 1,
        duration: 1
      })
  })
}

if (scrollUp) {
  scrollUp.forEach(elm => {
    let elmTl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: elm,
        start: GetTriggerPoint(elm),
        end: () => '+=' + (elm.clientHeight - elm.clientHeight),
        // markers: true
      }
    })

    elm.style.transform = 'translate(0, 80px)';
    elm.style.opacity = 0;

    elmTl.addLabel('start')
      .to(elm, {
        y: 0,
        opacity: 1,
        duration: 1
      })
  })
}

if (scrollLeft) {
  scrollLeft.forEach(elm => {
    let elmTl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: elm,
        start: GetTriggerPoint(elm),
        end: () => '+=' + (elm.clientHeight - elm.clientHeight),
        // markers: true
      }
    })

    elm.style.transform = 'translate(-80px, 0)';
    elm.style.opacity = 0;

    elmTl.addLabel('start')
      .to(elm, {
        x: 0,
        opacity: 1,
        duration: 1
      })
  })
}