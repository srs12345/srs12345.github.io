// $(document).ready(()=>{
// 	$("a").click(function(){
// 		$("p").slideToggle();
// 	})
// })
$(document).ready(()=>{
$('body').removeClass('jsOff').addClass('jsOn');
$('dd').hide();

// var panel1=$('.container > row');
// var panel=panel1.hide();
// $('dd').hide();
// panel.first().show();
$('dt').click(function(event){
	event.preventDefault();
var $this=$(this);
$('dd').slideUp();
$this.siblings('dd').slideUp(2000).slideDown();
})
});
// var panels=$('.container > dd').hide();
// panels.first().show();
// $('.container>dt').click(function(){
// 	var $this=$(this);
// 	panels.slideUp();
// 	$this.parent().next().slideDown();
// 	return false;
// })
// accordian.find('dt').on('click',function(){
	// $(this).toggleClass('open').next('dd.row').slideToggle().siblings('dd.row:visible').slideUp().prev('dt').removeClass('open');



