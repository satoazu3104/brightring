function test() {
  const images = document.getElementsByClassName('c-fv__main');
  const logo = document.getElementsByClassName('c-media__logo')[0];
  const fv = document.getElementsByClassName('c-fv__wrap')[0];
  if (images) {
    console.log(images.length);
    // InView(image);
    window.addEventListener('scroll', () => {
      let y = window.pageYOffset;
      let height = {
        pc: fv.clientHeight /3,
        sp: fv.clientHeight - 400,
      };
      if (y > height[Check()]) {
        InView(images, logo, fv);
      } else {
        View(images, logo, fv);
      }
    })
  }
  
  const Check = () => {
    let width = window.innerWidth;
    if(width < 1024) {
      return 'sp';
    } else {
      return 'pc';
    }
  }

  // 画像表示
  const View = (images, logo, fv) => {
    const option = {
      sp: {
        fill: 'both',
        duration: 800,
      },
      pc: {
        fill: 'both',
        duration: 2000,
      }
    }
    const style = {
      sp: {
        opacity: 1,
      },
      pc: {
        opacity: 1,
        filter: `brightness(1) blur(0px)`
      }
    }
    logo.animate({
      backgroundColor: '#ffffff',
    }, option[Check()])
    fv.animate(style[Check()], option[Check()]);
  }

  // 画像非表示
  const InView = (images, logo, fv) => {
    const option = {
      sp: {
        fill: 'both',
        duration: 800,
        rangeStart: "cover 0%",
        rangeEnd: "cover 100%",
      },
      pc: {
        fill: 'both',
        duration: 4000,
        rangeStart: "cover 0%",
        rangeEnd: "cover 100%",
      }
    }
    const style = {
      sp : {
        opacity: 0,
      },
      pc : {
        opacity: 0,
        filter: `brightness(3) blur(8px)`
      }
    }
    logo.animate({
      backgroundColor: '#535353',
    }, option[Check()])
    fv.animate(style[Check()], option[Check()]);
  }
}
// test();