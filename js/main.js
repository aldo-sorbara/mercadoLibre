jQuery(window).bind("load",function(){jQuery(function(e){new ch.Carousel(ch(".demo-carousel")[0],{limitPerPage:3,pagination:!0});e(".ch-carousel-mask").css({height:"auto"})})}),jQuery(function(e){new ch.Carousel(ch(".demo-carousel")[0],{limitPerPage:3,pagination:!0})}),jQuery(function(e){function i(i){i.matches||e("#zoom-default").css({width:"100%",height:"100%"})}new ch.Zoom(ch("#zoom-default")[0]);if(matchMedia){var o=window.matchMedia("(min-width: 1200px)");o.addListener(i),i(o)}}),jQuery(function(e){function i(i){i.matches||e("#zoom-default").css({width:"100%",height:"100%"})}new ch.Zoom(ch("#zoom-default")[0]);if(matchMedia){var o=window.matchMedia("(min-width: 1200px)");o.addListener(i),i(o)}});