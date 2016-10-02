jQuery(function($){  	
  var zoom1 = new ch.Zoom(ch('#zoom-default')[0]);
	if (matchMedia) {
    var mq = window.matchMedia("(min-width: 1200px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  };

  // media query change
  function WidthChange(mq) {
    if (!mq.matches) {
      $("#zoom-default").css({
   		 'width' : '100%',
   		 'height' : '100%'
	   });
    }
  };
});