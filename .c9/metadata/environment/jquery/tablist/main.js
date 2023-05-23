{"filter":false,"title":"main.js","tooltip":"/jquery/tablist/main.js","undoManager":{"mark":6,"position":6,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":54},"action":"insert","lines":["document.getElementById('box').textContent = 'こんにちは！';"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":54},"action":"remove","lines":["document.getElementById('box').textContent = 'こんにちは！';"],"id":2},{"start":{"row":0,"column":0},"end":{"row":0,"column":73},"action":"insert","lines":["document.getElementById('box').textContent = new Date().toLocaleString();"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":73},"action":"remove","lines":["document.getElementById('box').textContent = new Date().toLocaleString();"],"id":3},{"start":{"row":0,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["const button = document.getElementById('my-button');","const box = document.getElementById('box');","","button.addEventListener('click', () => {","  box.innerHTML += 'どん！<br>';","});"]}],[{"start":{"row":0,"column":0},"end":{"row":5,"column":3},"action":"remove","lines":["const button = document.getElementById('my-button');","const box = document.getElementById('box');","","button.addEventListener('click', () => {","  box.innerHTML += 'どん！<br>';","});"],"id":4},{"start":{"row":0,"column":0},"end":{"row":7,"column":3},"action":"insert","lines":["const button = document.getElementById('button-greeting');","const input = document.getElementById('name');","const box = document.getElementById('box');","","button.addEventListener('click', () => {","  const name = input.value;","  box.textContent = `こんにちは、${name}さん`;","});"]}],[{"start":{"row":0,"column":0},"end":{"row":7,"column":3},"action":"remove","lines":["const button = document.getElementById('button-greeting');","const input = document.getElementById('name');","const box = document.getElementById('box');","","button.addEventListener('click', () => {","  const name = input.value;","  box.textContent = `こんにちは、${name}さん`;","});"],"id":5},{"start":{"row":0,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["const buttonAdd = document.getElementById('button-add');","const box = document.getElementById('box');","const num1 = document.getElementById('num1');","const num2 = document.getElementById('num2');","","buttonAdd.addEventListener('click', () => {","  const result = num1.value + num2.value;","  box.textContent = result;","});",""]}],[{"start":{"row":0,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["const buttonAdd = document.getElementById('button-add');","const box = document.getElementById('box');","const num1 = document.getElementById('num1');","const num2 = document.getElementById('num2');","","buttonAdd.addEventListener('click', () => {","  const result = num1.value + num2.value;","  box.textContent = result;","});",""],"id":6},{"start":{"row":0,"column":0},"end":{"row":25,"column":15},"action":"insert","lines":["// ボタンの表示／非表示を切り替える関数","const updateButton = () => {","  if ($(window).scrollTop() >= 300) {","    // 300px以上スクロールされた","    // ボタンを表示","    $('.back-to-top').fadeIn();","  } else {","    // ボタンを非表示","    $('.back-to-top').fadeOut();","  }","};","","// スクロールされる度にupdateButtonを実行","$(window).on('scroll', updateButton);","","// ボタンをクリックしたらページトップにスクロールする","$('.back-to-top').on('click', (e) => {","  // ボタンのhrefに遷移しない","  e.preventDefault();","","  // 600ミリ秒かけてトップに戻る","  $('html, body').animate({ scrollTop: 0 }, 600);","});","","// ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする","updateButton();"]}],[{"start":{"row":0,"column":0},"end":{"row":25,"column":15},"action":"remove","lines":["// ボタンの表示／非表示を切り替える関数","const updateButton = () => {","  if ($(window).scrollTop() >= 300) {","    // 300px以上スクロールされた","    // ボタンを表示","    $('.back-to-top').fadeIn();","  } else {","    // ボタンを非表示","    $('.back-to-top').fadeOut();","  }","};","","// スクロールされる度にupdateButtonを実行","$(window).on('scroll', updateButton);","","// ボタンをクリックしたらページトップにスクロールする","$('.back-to-top').on('click', (e) => {","  // ボタンのhrefに遷移しない","  e.preventDefault();","","  // 600ミリ秒かけてトップに戻る","  $('html, body').animate({ scrollTop: 0 }, 600);","});","","// ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする","updateButton();"],"id":7},{"start":{"row":0,"column":0},"end":{"row":36,"column":19},"action":"insert","lines":["/**"," * selectorに該当するタブを表示する関数"," */","const showTab = (selector) => {","  // 引数selectorの中身をコンソールで確認する","  console.log(selector);","","  /* 1. タブの選択状態のリセット */","","  // いったん、すべての.tabs-menu > liからactiveクラスを削除する","  $('.tabs-menu > li').removeClass('active');","","  // いったん、すべての.tabs-content > sectionを非表示にする","  $('.tabs-content > section').hide();","","  /* 2. 選択されたタブの表示 */","  // a要素のhref属性がselectorと一致するものの親要素にだけactiveクラスを付ける","  $(`.tabs-menu a[href=\"${selector}\"]`)","    .parent()","    .addClass('active');","","  // .tabs-content > sectionのうち、selectorに該当するものだけを表示する","  $(selector).show();","};","","// タブがクリックされたらコンテンツを表示","$('.tabs-menu a').on('click', (e) => {","  // hrefへのページ遷移を止める","  e.preventDefault();","","  // hrefの値を受け取った後、showTab()関数に渡す。e.targetはクリックされたタブ（.tabs-menu a）を表す","  const selector = $(e.target).attr('href');","  showTab(selector);","});","","// 初期状態として1番目のタブを表示","showTab('#tabs-1');"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":20,"column":0},"end":{"row":20,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1683809767006,"hash":"d1fb4cea8827fbe852adc4aeabd86d3299e68ae2"}