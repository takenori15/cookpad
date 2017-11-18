$(function(){
  $(".user_icon").mouseover(function(){
    $(".setting_link").css("display", "block");
  }).mouseout(function(){
    $(".setting_link").css("display", "none");
  });
});
