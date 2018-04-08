$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#main_text_div');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("#mainNav").css('border-bottom', '1px solid rgba(33,37,41,.1)');
          $("#mainNav").css('background-color', '#FFF');
          $("#nav_brand").css('color', '#FF5021');
          $("#nav_link, #nav_link").css('color', '#000');
          $("#nav_link, #nav_link").hover(function(){
            $(this).css("color", "#FF5021");
            }, function(){
            $(this).css("color", "#000");
        });
       } else {
          $('#mainNav').css('background-color', 'transparent');
          $("#nav_brand").css('color', 'rgba(255,255,255,.7)');
          $("#nav_link, #nav_link").css('color', 'rgba(255,255,255,.7)');
          $("#nav_link, #nav_link").hover(function(){
            $(this).css("color", "#FFF");
            }, function(){
            $(this).css("color", "rgba(255,255,255,.7)");
        });
       }
   });
    }
});