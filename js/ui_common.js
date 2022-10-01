$(function () {
  function fullpageActivate() {
    $('#fullpage').fullpage({
      //options
      anchors: ['intro', 'portfolio', 'about', 'skills', 'contact'],
      menu: '.gnb',
      slidesNavigation: true,
      scrollOverflow: true,
    });
  }
  fullpageActivate();

  $(window)
    .on('resize', function () {
      if ($(this).width() < 768) {
        $.fn.fullpage.destroy('all');
        document.querySelector('.intro').id = 'intro';
        document.querySelector('.portfolio').id = 'portfolio';
        document.querySelector('.about').id = 'about';
        document.querySelector('.skills').id = 'skills';
        document.querySelector('.contact').id = 'contact';
      } else {
        fullpageActivate();
        document.querySelector('.intro').removeAttribute('id');
        document.querySelector('.portfolio').removeAttribute('id');
        document.querySelector('.about').removeAttribute('id');
        document.querySelector('.skills').removeAttribute('id');
        document.querySelector('.contact').removeAttribute('id');
      }
    })
    .trigger('resize');

  // 태블릿, 모바일 gnb
  $('#header .btn_open').on('click', function () {
    $('#header .gnb_area').addClass('on');
    $('body').addClass('on');
  });

  $('#header .btn_close').on('click', function () {
    $('#header .gnb_area').removeClass('on');
    $('body').removeClass('on');
  });

  $('#header .m_gnb>li>a').on('click', function () {
    $('#header .gnb_area').removeClass('on');
    $('body').removeClass('on');
  });

  var typingBool = false;
  var typingIdx = 0;
  var liIndex = 0;
  var liLength = $('.typing_txt>ul>li').length;

  // 타이핑될 텍스트 가져오기
  var typingTxt = $('.typing_txt>ul>li').eq(liIndex).text();
  typingTxt = typingTxt.split('');
  if (typingBool == false) {
    typingBool = true;
    var tyInt = setInterval(typing, 100);
  }

  function typing() {
    $('.typing ul li').removeClass('on');
    $('.typing ul li').eq(liIndex).addClass('on');
    if (typingIdx < typingTxt.length) {
      if (typingTxt[typingIdx] == 'w') {
        $('.typing ul li').eq(liIndex).append('<span class="point">정우정</span>');
        typingIdx++;
      } else {
        $('.typing ul li').eq(liIndex).append(typingTxt[typingIdx]);
        typingIdx++;
      }
    } else {
      if (liIndex < liLength - 1) {
        liIndex++;
        typingIdx = 0;
        typingBool = false;
        typingTxt = $('.typing_txt>ul>li').eq(liIndex).text();

        clearInterval(tyInt);

        setTimeout(function () {
          tyInt = setInterval(typing, 100);
        }, 1000);
      } else if (liIndex == liLength - 1) {
        clearInterval(tyInt);
      }
    }
  }
});
