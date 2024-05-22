import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const splideFvElements = document.getElementsByClassName('splide__fv splide'); // right-image
const splideFvTextElements = document.getElementsByClassName('splide__fv-text splide');

if (splideFvElements.length) {
  let fvSlides = [];
  let fvTextSlides = [];

  // FVスライダーの初期化
  for (let i = 0; i < splideFvElements.length; i++) {
    let fvSlide = new Splide(splideFvElements[i], {
      // ここにオプションを設定
      type: 'fade',
      rewind: true,
      arrows: false,
      pagination: false,
      autoplay: true,
      speed: 800,
      pauseOnHover: false,
      interval: 5000,
      breakpoints: {
        1025: {
        }
      }
    }).mount();

    fvSlides.push(fvSlide);
  }

  // FVテキストスライダーの初期化
  for (let i = 0; i < splideFvTextElements.length; i++) {
    let fvTextSlide = new Splide(splideFvTextElements[i], {
      // ここにオプションを設定
      type: 'fade',
      rewind: true,
      arrows: false,
      pagination: false,
      autoplay: true,
      breakpoints: {
        1025: {
          interval: 12000
        }
      }
    }).mount();

    fvTextSlides.push(fvTextSlide);

    // 同期の設定
    fvSlides.forEach((fvSlide, index) => {
      fvSlide.on('move', (newIndex) => {
        fvTextSlides[index].go(newIndex);
      });
    });

    fvTextSlides.forEach((fvTextSlide, index) => {
      fvTextSlide.on('move', (newIndex) => {
        fvSlides[index].go(newIndex);
      });
    });
  }

}

const splideWorksElements = document.getElementsByClassName('splide__case splide');
if(splideWorksElements) {
  let worksSlides = [];

  for(let i = 0; i < splideWorksElements.length; i++) {
    let worksSlide = new Splide(splideWorksElements[i], {
      pagination: false,
      type: 'loop',
      arrows: false,
      gap: '64px',
      breakpoints: {
        1025: {
          gap: '12px',
        }
      }
    }).mount();
  }
}

const splideVoiceElements = document.getElementsByClassName('splide__voice splide');
if (splideVoiceElements) {
  let voiceSlides = [];

  for (let i = 0; i < splideVoiceElements.length; i++) {
    let voiceSlide = new Splide(splideVoiceElements[i], {
      arrows: {
        prev: 'custom-arrow splide__arrow--prev',
        next: 'custom-arrow splide__arrow--next',
      },
      pagination: 'splide__pagination',
      gap: 64,
    }).mount();
  }
}

const splideMakeElements = document.getElementsByClassName('splide__make splide');
if(splideMakeElements) {
  let makeSlides = [];

  for (let i = 0; i < splideMakeElements.length; i++) {
    let makeSlide = new Splide(splideMakeElements[i], {
      pagination: true,
      type: 'loop',
      arrows: false,
      gap: '48px',
    }).mount();
  }
}