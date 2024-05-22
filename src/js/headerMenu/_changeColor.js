const HeaderChangeColor = () => {
  window.addEventListener('scroll', function () {
    // l-header__wrap エレメントを取得
    var headerWrap = document.querySelector('.l-header__wrap');

    if (headerWrap) {
      // ページのトップからのスクロール距離
      var scrollDistance = window.pageYOffset || document.documentElement.scrollTop;

      // 画面の高さ
      var screenHeight = window.innerHeight;

      // スクロール距離が画面の高さ以上になったらクラスを追加
      if (scrollDistance >= (screenHeight / 2)) {
        headerWrap.classList.add('active');
      } else {
        // それ以下の場合はactiveクラスを削除
        headerWrap.classList.remove('active');
      }
    }
  });
}

HeaderChangeColor();