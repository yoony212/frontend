{"filter":false,"title":"main.js","tooltip":"/jquery/accordion/main.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":18,"column":3},"action":"insert","lines":["// アコーディオンのタイトルがクリックされたら","$('.accordion-title a').on('click', (e) => {","  // hrefにページ遷移しない","  e.preventDefault();","","  // 同じsection内の.accordion-contentを選択","  const content = $(e.target)","    .closest('section')","    .find('.accordion-content');","","  // .accordion-contentが非表示の場合は","  if (!content.is(':visible')) {","    // 表示中のコンテンツを閉じる","    $('.accordion-content:visible').slideUp();","","    // クリックされたコンテンツを表示","    content.slideDown();","  }","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":23},"end":{"row":7,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1684204637165,"hash":"b9c4eb4bc38ad68d92a41479b1758dd733990f67"}