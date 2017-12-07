$(function(){
function add_ingredientHTML(id){
  var new_ingredient_html = `
                            <div id="ingredient-row" class="row sara_sortable.sara_sortable_block">
                              <div class="sortable_line">
                                <div class="sortable_line_inner">
                                  <img src="/assets/drag_icon" class="drag">
                                  <span class="name">
                                    <input class="text-field sortable_line_name" type="text" placeholder="例) 豚肉", name="ingredients[${id}][ingredient_name]", id="ingredients_${id}_ingredient_name">
                                  </span>
                                  <span class="quantity">
                                    <input class="text-field sortable_line_quantity" type="text", placeholder="例) 350g", name="ingredients[${id}][weight]", id="ingredients_${id}_weight">
                                  <a>
                                    <img src="/assets/delete_icon.png" class="delete">
                                  </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                            `
  return new_ingredient_html
}
var recipe_writer_id = $(".hidden_id_for_js").attr("value")
var current_user_id = $(".hidden_current_user_id").attr("value")
if(current_user_id == recipe_writer_id ){
  $("#recipe_title_id_in_place_editer").click(function(){
    console.log("test0");
    $(this).hide();
    $("#hidden_title_field").show();
    $(".title_ok").show();
  });
  $("#recipe_description_userid_in_place_editer").click(function(){
    $(this).hide();
    $("#hidden_catchphrase_field").show();
    $(".catch_ok").show();
  })
  $("#ingredients_wrapper").click(function(){
    $(this).blur();
    if($("#recipe_edit_overlay")[0]) return false;
    $("#wrapper").append('<div id="recipe_edit_overlay"></div>');
    $("#colorbox").fadeIn("slow");
  });
  $(document).on('click', ".append_line", function(){
    var new_id = $('.hidden_ingredient_id').val()
    var html = add_ingredientHTML(new_id);
    $("#edit-ingredients-list").prepend(html)
  });
  $(document).on("click", ".delete", function(){
    $(this).parents("#ingredient-row").hide()
  });
  $(".advice_message_1").click(function(){
    $(this).hide();
    $(".advice_body_here").show();
    $(".advice_ok").show()
  })
  $(".advice_1").click(function(){
    $(this).hide();
    $(".advice_body_here").show();
    $(".advice_ok").show();
  });
  $(".advice_message_2").click(function(){
    $(this).hide();
    $(".advice_body_here_2").show();
    $(".advice_ok_2").show()
  })
  $(".advice_2").click(function(){
    $(this).hide();
    $(".advice_body_here_2").show();
    $(".advice_ok_2").show();
  });
  $(".advice_message_3").click(function(){
    $(this).hide();
    $(".advice_body_here_3").show();
    $(".advice_ok_3").show()
  })
  $(".advice_3").click(function(){
    $(this).hide();
    $(".advice_body_here_3").show();
    $(".advice_ok_3").show();
  });
  $(".default_tips").click(function(){
    $(this).hide();
    $("#hidden_tips_field").show();
    $(".tips_ok").show();
  });
  $(".default_background").click(function(){
    $(this).hide();
    $("#hidden_background_field").show();
    $(".background_ok").show();
  });
  $(document).on("click", ".title_ok", function(e){
    e.preventDefault();
    var form = document.getElementById("recipe_show_wrapper")
    var formData = new FormData(form);
    console.log(formData)
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $("#recipe_title_id_in_place_editer").text(data.title);
  //     $(".main_uploader").attr("src", data.main_image.url)
  //     $("#recipe_description_userid_in_place_editer").text(data.catchphrase)
  //     $(".advice_1").text(data.first_body)
  //     $(".advice_2").text(data.second_body)
  //     $(".advice_3").text(data.third_column)
  //     $(".default_tips").text(data.tips)
  //     $(".default_background").text(data.background)
     })
     $("#recipe_title_id_in_place_editer").show();
     $(".title_ok").hide();
     $("#hidden_title_field").hide();
  //   $("#recipe_description_userid_in_place_editer").show();
  //   $("#hidden_catchphrase_field").hide()
  //   $(".catch_ok").hide()
  //   $(".advice_1").show();
  //   $(".advice_body_here").hide();
  //   $(".advice_ok").hide();
  //   $(".advice_2").show();
  //   $(".advice_body_here_2").hide();
  //   $(".advice_ok_2").hide();
  //   $(".advice_3").show();
  //   $(".advice_body_here_3").hide();
  //   $(".advice_ok_3").hide();
  //   $("#hidden_tips_field").hide();
  //   $(".tips_ok").hide();
  //   $(".default_tips").show();
  //   $("#hidden_background_field").hide();
  //   $(".background_ok").hide();
  //   $(".default_background").show();
  })
  $(document).on("click", ".catch_ok", function(e){
    console.log("aaa")
    e.preventDefault();
    var form = document.getElementById("recipe_show_wrapper")
    var formData = new FormData(form);
    console.log(formData)
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $("#recipe_description_userid_in_place_editer").text(data.catchphrase);
    });
    $("#recipe_description_userid_in_place_editer").show();
    $("#hidden_catchphrase_field").hide()
    $(".catch_ok").hide()
  });

  $(document).on("change", "#recipe_main_image", function(e){
    e.preventDefault();
    var form = document.getElementById("recipe_show_wrapper")
    var formData = new FormData(form);
    console.log(formData)
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data.main_image)
      $(".main_uploader").attr("src", data.main_image.url)
    });
  });

  $(document).on("click", ".advice_ok", function(e){
    e.preventDefault();
    var form = document.getElementById("recipe_show_wrapper")
    var formData = new FormData(form);
    console.log(formData)
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $(".advice_1").text(data.first_body);
    });
    $(".advice_1").show();
    $(".advice_body_here").hide();
    $(".advice_ok").hide();
  });


  $(document).on("click", ".advice_ok_2", function(e){
    e.preventDefault();
    var form = document.getElementById("recipe_show_wrapper")
    var formData = new FormData(form);
    console.log(formData)
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $(".advice_2").text(data.second_body);
    });
    $(".advice_2").show();
    $(".advice_body_here_2").hide();
    $(".advice_ok_2").hide();
  });

  $(document).on("click", ".advice_ok_3", function(e){
    e.preventDefault();
    var form = document.getElementById("recipe_show_wrapper")
    var formData = new FormData(form);
    console.log(formData)
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $(".advice_3").text(data.third_column);
    });
    $(".advice_3").show();
    $(".advice_body_here_3").hide();
    $(".advice_ok_3").hide();
  });


  $(document).on("click", ".tips_ok", function(e){
    e.preventDefault();
    var form = document.getElementById("recipe_show_wrapper")
    var formData = new FormData(form);
    console.log(formData)
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $(".default_tips").text(data.tips)
    });
    $("#hidden_tips_field").hide();
    $(".tips_ok").hide();
    $(".default_tips").show();
  });

  $(document).on("click", ".background_ok", function(e){
    e.preventDefault();
    var form = document.getElementById("recipe_show_wrapper")
    var formData = new FormData(form);
    console.log(formData)
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $(".default_background").text(data.background)
    });
    $("#hidden_background_field").hide();
    $(".background_ok").hide();
    $(".default_background").show();
  });
// })
$(function(){
  $(document).on('click', "#recipe_edit_overlay", function(){
    $("#recipe_edit_overlay, #colorbox").fadeOut("slow", function(){
      $("#recipe_edit_overlay").remove();
    });
  });
});
}
});
