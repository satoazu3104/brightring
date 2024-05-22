import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const parallaxItems = document.querySelectorAll('.js-parallax-item');
if (parallaxItems) {
  parallaxItems.forEach(item => {
    const itemTl = gsap.timeline({
      scrollTrigger: {
        scrub: .5,
        trigger: item,
        start: 'top top+=20%',
        end: () => '+=' + (window.innerHeight * 2),
        // markers: true,
        invalidateOnRefresh: true,
      }
    })

    let interval = 0;
    const dataInterval = item.dataset.interval;
    if (dataInterval) {
      interval = Number(dataInterval);
    }

    itemTl.addLabel('start')
      .to(item, {
        y: - + (item.clientHeight * 2 + interval),
        opacity: 0,
      })
  })
}