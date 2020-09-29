
var imgBarWidth;
var imgBarElementWidth;
var lockElement;
$(document).ready(function(){
  
  $(".imgBarShow").hide();
  lockElement = $(".imgBarVideoElement");
  SetImgLock($(".imgBarVideoElement").innerWidth(), $(".imgBarVideoElement").innerHeight(), $(".imgBarVideoElement").offset().top, $(".imgBarVideoElement").offset().left);

});

var changeID = 0;
$("#hide").click(function(){
  changeID++;
  $("#hide").attr("src","Image/test" + changeID + ".png"); 
  
});

$(".imgBarPreBtn").click(function(){
  changeID--;
  $("#hide").attr("src","Image/test" + changeID + ".png"); 
  return false;
  
});
$(".imgBarNextBtn").click(function(){
  changeID++;
  $("#hide").attr("src","Image/test" + changeID + ".png"); 
  alert($(this).attr("name"));
  return false;
});

$(".imgBarElement").click(function(){
  alert($(this).attr("name"));
  return false;
});

$(".imgBarVideoElement").click(function(){
  $(".imgBarShow").hide();
  $(".imgBarShowVideo").show();
  $("imgBarShowVideo").find("iframe").attr("src", $(this).attr("name"));
  lockElement = $(this);
  SetImgLock($(this).innerWidth(), $(this).innerHeight(), $(this).offset().top, $(this).offset().left );
  return false;
});
$(".imgBarImgElement").click(function(){
  $(".imgBarShowVideo").hide();
  $(".imgBarShow").show();
  $(".imgBarShowImg").attr("src",$(this).find('a').find('img').attr("src"));
  lockElement = $(this);
  SetImgLock($(this).innerWidth(), $(this).innerHeight(), $(this).offset().top, $(this).offset().left );
  return false;
});

function SetImgLock(_width ,_height, _top, _left){
  $(".imgBarElementLock").css({width:_width+6, height:_height+6,top:_top-3, left:_left-3   });
}
$( window ).resize(function() {
  SetImgLock(lockElement.innerWidth(), lockElement.innerHeight(), lockElement.offset().top, lockElement.offset().left );
});