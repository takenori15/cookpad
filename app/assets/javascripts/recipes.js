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

  $("#recipe_title_id_in_place_editer").click(function(){
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
    console.log(new_id)
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
  $(".recipe_show_wrapper").on("submit, change", function(e){
    e.preventDefault();
    var formData = new FormData(this)
    var url = $(this).attr('action')
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
      $(".main_uploader").attr("src", data.main_image.url)
      $("#recipe_description_userid_in_place_editer").text(data.catchphrase)
      $(".advice_1").text(data.first_body)
      $(".advice_2").text(data.second_body)
      $(".advice_3").text(data.third_column)
      $(".default_tips").text(data.tips)
      $(".default_background").text(data.background)
    })
    $("#recipe_title_id_in_place_editer").show();
    $(".title_ok").hide();
    $("#hidden_title_field").hide();
    $("#recipe_description_userid_in_place_editer").show();
    $("#hidden_catchphrase_field").hide()
    $(".catch_ok").hide()
    $(".advice_1").show();
    $(".advice_body_here").hide();
    $(".advice_ok").hide();
    $(".advice_2").show();
    $(".advice_body_here_2").hide();
    $(".advice_ok_2").hide();
    $(".advice_3").show();
    $(".advice_body_here_3").hide();
    $(".advice_ok_3").hide();
    $("#hidden_tips_field").hide();
    $(".tips_ok").hide();
    $(".default_tips").show();
    $("#hidden_background_field").hide();
    $(".background_ok").hide();
    $(".default_background").show();
  })

})
$(function(){
  $(document).on('click', "#recipe_edit_overlay", function(){
    $("#recipe_edit_overlay, #colorbox").fadeOut("slow", function(){
      $("#recipe_edit_overlay").remove();
    });
  });
});
