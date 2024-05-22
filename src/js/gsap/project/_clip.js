function updateClipPaths() {
  const clipElm = document.querySelectorAll('.js-clip-angle');
  if (clipElm) {
    const angleInDegrees = 22.5;
    const angleInRadians = angleInDegrees * (Math.PI / 180);
    const tanValue = Math.tan(angleInRadians);
    clipElm.forEach(elm => {
      const width = window.innerWidth;
      const state = elm.dataset.state;
      const height = width > 1024 ? elm.offsetHeight : 200;
      const offset = tanValue * height;
      if (state == 'reverse') {
        if (width > 1024) {
          let clipPathValue = `polygon(calc(0% + ${offset}px) 0, 100% 0, 100% 100%, 0 100%)`;
          elm.style.clipPath = clipPathValue;
        } else {
          let clipPathValue = `polygon(0 0, 100% 0, 100% 100%, calc(0% + ${offset}px) 100%, 0 calc(100% - 200px))`;
          elm.style.clipPath = clipPathValue;
        }
      } else {
        if (width > 1024) {
          let clipPathValue = `polygon(0 0, 100% 0, calc(100% - ${offset}px) 100%, 0 100%)`;
          elm.style.clipPath = clipPathValue;
        } else {
          let clipPathValue = `polygon(0 0, 100% 0, 100% calc(100% - 200px), calc(100% - ${offset}px) 100%, 0 100%)`;
          elm.style.clipPath = clipPathValue;
        }
      }

    });
  }
}
// 初期ロード時にクリップパスを設定
updateClipPaths();

// ウィンドウのリサイズ時にクリップパスを再設定
window.addEventListener('resize', updateClipPaths);