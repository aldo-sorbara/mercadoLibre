$(window).load(function() {
	var valorx="";
	var valory="";
	var zoom1;
	if (screen.width<992) {
		zoom1 = new ch.Zoom(ch('#zoom-default')[0],{
			side: 'bottom',
			align: 'center'
		});
	} 
	else{
		zoom1 = new ch.Zoom(ch('#zoom-default')[0],{
		});
	};
});