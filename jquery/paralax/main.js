// 背景画像のスクロール速度。数字が小さいほど速い。
const speed = 3;
const $window = $(window);

// スライド1枚の高さを保持する変数
let slideHeight;

// パララックスを適用する関数
const showParallax = () => {
  const scrollTop = $window.scrollTop();

  // 各スライドの背景位置をスクロールに合わせて変える
  $('.parallax-section-1').css({
    'background-position': `center ${Math.round((0 - scrollTop) / speed)}px`,
  });
  $('.parallax-section-2').css({
    'background-position': `center ${Math.round((slideHeight - scrollTop) / speed)}px`,
  });
  $('.parallax-section-3').css({
    'background-position': `center ${Math.round((slideHeight * 2 - scrollTop) / speed)}px`,
  });
  $('.parallax-section-4').css({
    'background-position': `center ${Math.round((slideHeight * 3 - scrollTop) / speed)}px`,
  });
};

// パララックスの初期設定をする関数
const initParallax = () => {
  // ウインドウの高さをスライド1枚分の高さとする
  slideHeight = $window.height();

  // 表示を更新
  showParallax();
};

// スクロールのたびにshowParallax関数を呼ぶ
$window.on('scroll', showParallax);

$window.on('resize', () => {
  // ウインドウがリサイズされるとここが実行される
  initParallax();
});

initParallax();