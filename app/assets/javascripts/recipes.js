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
    // $(this).next().next().prop("checked", true)
  });

  $(".recipe_show_wrapper").on("submit, change", function(e){
    e.preventDefault();
    console.log(e)
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
    })
    $("#recipe_title_id_in_place_editer").show();
    $(".title_ok").hide();
    $("#hidden_title_field").hide();
    $("#recipe_description_userid_in_place_editer").show();
    $("#hidden_catchphrase_field").hide()
    $(".catch_ok").hide()
  })
})
$(function(){
  $(document).on('click', "#recipe_edit_overlay", function(){
    $("#recipe_edit_overlay, #colorbox").fadeOut("slow", function(){
      $("#recipe_edit_overlay").remove();
    });
  });
});
