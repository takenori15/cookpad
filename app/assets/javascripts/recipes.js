$(function(){
  $("#recipe_title_id_in_place_editer").click(function(){
    $(this).hide();
    $("#hidden_title_field").show();
    $(".edit_ok_button").show();
  });
  $(".recipe_show_wrapper").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this)
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "PATCH",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $("#recipe_title_id_in_place_editer").text(data.title);
    })
    $("#recipe_title_id_in_place_editer").show();
    $(".edit_ok_button").hide();
    $("#hidden_title_field").hide();
  })
})
