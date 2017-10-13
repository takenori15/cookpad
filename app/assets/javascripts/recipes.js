$(function(){
var option = {type: "text", action: "click"}
var phrase_option = {type: "textarea", action: "click"}
var new_process_html = `<div class="step">
                          <dl>
                            <dt>
                              <div class="f_left">
                                <span class="step-position">
                                  1
                                </span>
                                <a class="step_move_higher">
                                  ←
                                </a>
                                <a class="step_move_lower">
                                  →
                                <a>
                              </div>
                              <div class="f_right">
                                <a class="step_remove">
                                  削除
                                </a>
                                <a class="step_add">
                                  追加
                                </a>
                              </div>
                              <div class="clear"></div>
                            </dt>
                            <dd>
                              <div class="clickable_image_uploader_wrapper step_photo_wrapper">
                                <form id="step_photo_form" class="uploader_form">
                                  <img id="step_photo" class="uploader" src="/assets/place_image.png" width="136px" height="27px">
                                </form>
                              </div>
                              <div id="step_text" class="font14">
                                <div id="step_memo_in_place_editor" class="in_place_editor_field" style="background-color: transparent; background-image: none; opacity: 1;">
                                  <span class="inplaceeditor-empty">
                                    クリックして作り方を入力
                                  </span>
                                </div>
                              </div>
                            </dd>
                          </dl>
                        </div>
                          `
var new_ingredient_html = `
                          <div id="ingredient-row" class="row sara_sortable.sara_sortable_block">
                            <div class="sortable_line">
                              <div class="sortable_line_inner">
                                <img src="/assets/drag_icon" class="drag">
                                <span class="name">
                                  <input class="text-field sortable_line_name" type="text" placeholder="例) 豚肉">
                                </span>
                                <span class="quantity">
                                  <input class="text-field sortable_line_quantity" type="text", placeholder="例) 350g">
                                <a>
                                  <img src="/assets/delete_icon.png" class="delete">
                                </a>
                                </span>
                              </div>
                            </div>
                          </div>
                          `

  $("#recipe_title_id_in_place_editer").editable(option, function(e){
      alert(e.value);
    });
  $("#recipe_description_userid_in_place_editer").editable(phrase_option, function(e){
      alert(e.value);
    });
  $("#ingredients").click(function(){
    $("#colorbox").show();
  });
  $("#cboxClose").click(function(){
    $("#colorbox").hide();
  });
  $(document).on('click', ".step_add", function(){
    $("#steps").append(new_process_html);
  });
  $(document).on('click', ".in_place_editor_field", function(){
    $(this).editable(phrase_option, function(e){
    alert(e.value);
    });
  });
  $(document).on('click', ".step_remove", function(){
    $(this).parents(".step").remove();
  })
  $("#advice").editable(phrase_option, function(e){
    alert(e.value);
  });
  $("history").editable(phrase_option, function(e){
    alert(e.value);
  });
  $(document).on('click', ".append_line", function(){
    $("#edit-ingredients-list").append(new_ingredient_html);
  });
  $(document).on('click', ".delete", function(){
    $(this).parents("#ingredient-row").remove();
  });
});
