//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG//
//$(function(){

//	$(".video").click(function(){
//          videoSRC = $(this).attr("data-theVideo"),
 //         videoSRCauto = videoSRC + "?modestbranding=1&rel=08showinfo=0&html5=1&autoplay=1";
  //    $(theModal + ' iframe').attr('src', videoSRCauto);
  //    $(theModal + ' button.close').click(function () {
 //         $(theModal + ' iframe').attr('src', videoSRC);
 //     });
// }); 

//});
$(document).on('click','[data-toggle="lightbox"]', function(event){
	event.preventDefault();
	$(this).ekkoLightbox();
});

$('.slider').slick({
	infinite: true,
	slideToShow:1,
	slideToScroll:1
})