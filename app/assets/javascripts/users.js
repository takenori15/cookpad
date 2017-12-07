var overlay_html = `<div id="user_page_overlay"></div>`
$(function(){
  $(".user_icon").mouseover(function(){
    $(".setting_link").css("display", "block");
  }).mouseout(function(){
    $(".setting_link").css("display", "none");
  });
});
$(function(){
  $(".icon_modal_open").click(
    function(){
      $(this).blur();
      if($("#user_page_overlay")[0]) return false;
      $("#root_wrapper").append(overlay_html);
      $("#user_page_overlay").fadeIn("slow");
      $("#user_page_icon_modal_content").fadeIn("slow")
  });
});
$(function(){
  $(document).on('click', "#user_page_overlay", function(){
    $("#user_page_overlay, #user_page_icon_modal_content").fadeOut("slow", function(){
      $("#user_page_overlay").remove();
    });
  });
});
$(function(){
  $("#user_menu_config").click(function(){
    $(".config_dropdown_menu").toggle();
  });
});
