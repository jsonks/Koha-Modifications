  //Advanced Search icons
  if (window.location.href.indexOf("/opac-search.pl") > -1) {
    $('#ccode-0').next().children('img').replaceWith('<div class="adv_icon_container"><img class="adv_icon" src="your_image_source" alt="Adult books"/><img class="adv_iconbg" src="your_background_image_source" /></div>');
    $('#ccode-1').next().children('img').replaceWith('<div class="adv_icon_container"><img class="adv_icon" src="your_image_source" alt="Audiobooks"/><img class="adv_iconbg" src="your_background_image_source" /></div>');
    $('#ccode-2').next().children('img').replaceWith('<div class="adv_icon_container"><img class="adv_icon" src="your_image_source" alt="Blu-rays"/><img class="adv_iconbg" src="your_background_image_source" /></div>');
    $('#ccode-3').next().children('img').replaceWith('<div class="adv_icon_container"><img class="adv_icon" src="your_image_source" alt="DVDs"/><img class="adv_iconbg" src="your_background_image_source" /></div>');
    $('#ccode-4').next().children('img').replaceWith('<div class="adv_icon_container"><img class="adv_icon" src="your_image_source" alt="Juvenile books"/><img class="adv_iconbg" src="your_background_image_source" /></div>');
    $('#ccode-5').next().children('img').replaceWith('<div class="adv_icon_container"><img class="adv_icon" src="your_image_source" alt="Library of things"/><img class="adv_iconbg" src="your_background_image_source" /></div>');
    $('#ccode-6').next().children('img').replaceWith('<div class="adv_icon_container"><img class="adv_icon" src="your_image_source" alt="Microform"/><img class="adv_iconbg" src="your_background_image_source" /></div>');
    $('#ccode-7').next().children('img').replaceWith('<div class="adv_icon_container"><img class="adv_icon" src="your_image_source" alt="Music"/><img class="adv_iconbg" src="your_background_image_source" /></div>');
    $('#ccode-8').next().children('img').replaceWith('<div class="adv_icon_container"><img class="adv_icon" src="your_image_source" alt="Online resources"/><img class="adv_iconbg" src="your_background_image_source" /></div>');
    $('#ccode-9').next().children('img').replaceWith('<div class="adv_icon_container"><img class="adv_icon" src="your_image_source" alt="Periodicals"/><img class="adv_iconbg" src="your_background_image_source" /></div>');
    $('#ccode-10').next().children('img').replaceWith('<div class="adv_icon_container"><img class="adv_icon" src="your_image_source" alt="Special collections"/><img class="adv_iconbg" src="your_background_image_source" /></div>');
    $('#ccode-11').next().children('img').replaceWith('<div class="adv_icon_container"><img class="adv_icon" src="your_image_source" alt="VHS"/><img class="adv_iconbg" src="your_background_image_source" /></div>');
    $('#ccode-12').next().children('img').replaceWith('<div class="adv_icon_container"><img class="adv_icon" src="your_image_source" alt="Video games & software"/><img class="adv_iconbg" src="your_background_image_source" /></div>');
  
    //toggle color of background circle with css class
    $('[id^=ccode-]').click(function () {
      if($(this).is(':checked')) {
        $(this).next().children().children('.adv_iconbg').addClass('colorize-green');
      } else {
        $(this).next().children().children('.adv_iconbg').removeClass('colorize-green');
      }
    });
  }
