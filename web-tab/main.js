const showTab = (selector) => {
  $('.tabs-menu div').removeClass('active');
  $('.tabs-content div').hide();
  $(`.tabs-menu div[id="${selector}"]`).addClass('active');
  if(selector === 'tab-menu-a') {
    $('.tabs-a').show();
    $('.tabs-b').hide();
    $('.tabs-c').hide();
  } else if(selector === 'tab-menu-b') {
    $('.tabs-a').hide();
    $('.tabs-b').show();
    $('.tabs-c').hide();
  } else if(selector === 'tab-menu-c') {
    $('.tabs-a').hide();
    $('.tabs-b').hide();
    $('.tabs-c').show();
  }
};

$('.tabs-menu div').on('click', (e) => {
  const selector = $(e.target).attr('id');
  showTab(selector);
}); 

showTab('tab-menu-a');