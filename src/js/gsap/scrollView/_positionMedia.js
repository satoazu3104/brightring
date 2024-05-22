import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const positionMedias = document.querySelectorAll('.js-position-media__picture');

if (positionMedias) {
  positionMedias.forEach(elm => {
    let elmTl = gsap.timeline({
      scrollTrigger: {
        scrub: .5,
        trigger: elm,
        start: 'top bottom',
        end: () => '+=' + (window.innerHeight + elm.clientHeight),
        // markers: true,
        invalidateOnRefresh: true,
      }
    })

    const inner = elm.querySelector('.js-position-media');
    inner.style.objectPosition = '0% 10%';

    elmTl.addLabel('start')
      .to(inner, {
        objectPosition: '0% 90%',
        duration: 1,
      })
  })
}

const fvPictures = document.querySelectorAll('.c-fv__img--main__picture');
if (fvPictures) {
  fvPictures.forEach(media => {
    let fvTl = gsap.timeline({
      scrollTrigger: {
        scrub: .1,
        trigger: media,
        start: 'top top+=88px',
        end: () => '+=' + (window.innerHeight * 3),
        // markers: true,
        invalidateOnRefresh: true,
      }
    })

    media.style.overflow = 'hidden';

    const inner = media.querySelector('.c-fv__img--main');

    if (window.matchMedia('(max-width: 1024px)').matches) {
      inner.style.objectPosition = '0% 50%';
      fvTl.addLabel('start')
        .to(inner, {
          objectPosition: '100% 50%',
          duration: 1,
        })
    } else {
      inner.style.objectPosition = '0% 0%';
      fvTl.addLabel('start')
        .to(inner, {
          objectPosition: '0% 100%',
          duration: 1,
        })
    }
  })
}