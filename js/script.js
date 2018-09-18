$(function(){
var carouselList = $('#carousel ul');
  
function moveFirstSlide(){
  var firstItem = carouselList.find('li:first');
  var lastItem = carouselList.find('li:last');
  lastItem.after(firstItem),
  carouselList.css({marginLeft:0});
};
  
function moveLastSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    firstItem.before(lastItem);
    carouselList.css({marginLeft:-600});
  };  

function changeSlideRight(){
    carouselList.animate({'marginLeft':-600}, 600, moveFirstSlide);  
    };
  
function changeSlideLeft(){
    carouselList.animate({'marginLeft':0}, 600, moveLastSlide)
    };
  
var timer = function(){
    interval = setInterval(changeSlideRight, 3000);
};
  
timer();
  
$(".previous").click(function(){
     clearInterval(interval);
     changeSlideLeft();
     timer()
  });
  
 $(".next").click(function(){
    clearInterval(interval);
    changeSlideRight();
    timer()
  });
});
