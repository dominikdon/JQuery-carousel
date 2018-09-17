$(function(){

  var carouselList = $('#carousel ul');

    setInterval(changeSlides, 4000);
    function changeSlides(){
      carouselList.animate({'marginLeft':-600}, 600, moveFirstSlide);  
    };

function moveFirstSlide(){
  var firstItem = carouselList.find('li:first');
  var lastItem = carouselList.find('li:last');
  lastItem.after(firstItem),
   carouselList.css({marginLeft:0});
};
});
