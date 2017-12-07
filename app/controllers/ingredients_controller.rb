class IngredientsController < ApplicationController
  def destroy
    ingredient = Ingredient.find(params[:id])
    ingredient.destroy
    redirect_to recipe_path(params[:recipe_id])
  end
end
