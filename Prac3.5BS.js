$("select").on("change",function(){
	var opt=$(this).val();
	if (opt==1)
		$("img").attr("src","an.jpg");
	if (opt==2)
		$("img").attr("src","Title.jpg");
	if (opt==3)
		$("img").attr("src","Reach_menu_background_4.jpg");
});
