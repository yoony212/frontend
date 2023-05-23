// アコーディオンのタイトルがクリックされたら
$('.accordion-title a').on('click', (e) => {
  // hrefにページ遷移しない
  e.preventDefault();

  // 同じsection内の.accordion-contentを選択
  const content = $(e.target)
    .closest('section')
    .find('.accordion-content');

  // .accordion-contentが非表示の場合は
  if (!content.is(':visible')) {
    // 表示中のコンテンツを閉じる
    $('.accordion-content:visible').slideUp();

    // クリックされたコンテンツを表示
    content.slideDown();
  }
});