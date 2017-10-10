$(function(){
var option = {type: "text", action: "click"}
var phrase_option = {type: "textarea", action: "click"}
$("#recipe_title_id_in_place_editer").editable(option, function(e){
    alert(e.value);
  });
$("#recipe_description_userid_in_place_editer").editable(phrase_option, function(e){
    alert(e.value);
  });
});
