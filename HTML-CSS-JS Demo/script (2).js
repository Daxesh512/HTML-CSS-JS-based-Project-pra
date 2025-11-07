$(window).bind('scroll',function(e){
    parallaxScroll();
   });
  
  function parallaxScroll(){
      var scrolled = $(window).scrollTop();
      $('#parallax-lvl-0').css('top',(0-(scrolled*.25))+'px');
    $('#parallax-lvl-1').css('top',(0-(scrolled*.5))+'px');
      $('#parallax-lvl-2').css('top',(0-(scrolled*.75))+'px');
      $('#parallax-lvl-3').css('top',(0-(scrolled*.9))+'px');
  }