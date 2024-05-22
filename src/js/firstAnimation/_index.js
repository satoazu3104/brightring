const FirstAnime = () => {
  const firsts = document.getElementsByClassName('js-first-animation');
  if (!firsts) return;

  Array.from(firsts).forEach((first, index, array) => {
    first.classList.add('active');

    // 最後のアニメーション要素にだけイベントリスナーを設定
    if (index === array.length - 1) {
      first.addEventListener('animationend', () => {
        NextAnim();  // アニメーションが終わったらNextAnimを実行
      });
    }
  });
}

const NextAnim = () => {
  const section = document.getElementsByClassName('l-section__main')[0];
  section.style.opacity = 1;
}

window.addEventListener('load', () => {
  FirstAnime();
});