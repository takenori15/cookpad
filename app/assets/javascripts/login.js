
var overlay_for_login = `<div id="login_overlay"></div>`

$(function(){
  $(".login_user, .link_to_login").click(
    function(){
      $(this).blur();
      if($("#login_overlay")[0]) return false;
      $("#root_wrapper").append(overlay_for_login);
      $("#login_overlay").fadeIn("slow");
      $("#login_colorbox").fadeIn("slow");
  });
});
$(function(){
  $(document).on('click', "#login_overlay", function(){
    $("#login_overlay, #login_colorbox").fadeOut("slow", function(){
      $("#login_overlay").remove();
    });
  });
});


