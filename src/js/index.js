"use strict";

import './css_load';
import '@splidejs/splide/src/css/template/default/index.scss';
import "../scss/style.scss";
import './map/_index';
import './scrollTop/_index';
import './scrollAnimation/_index';
import './accordion/_index';
import './splide/_index';
import './headerMenu/_index';
import './firstAnimation/_index';
import './gsap/_index';
import './blocks/_medias-front';
import './hover/_index';
import './vivus/_index';

window.addEventListener('load', () => {
})

// import './css_load';
//
document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll('.l-section__movie');
  videos.forEach(function (video) {
    video.play().catch(function (error) {
      console.error("Auto-play failed:", error);
    });
  });
});