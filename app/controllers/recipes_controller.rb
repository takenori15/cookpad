class RecipesController < ApplicationController
  def index
  end

  def search
  end

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.save
    redirect_to recipe_path(id: @recipe.id)
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def update
    @recipe = Recipe.find(params[:id])
    @recipe.update(recipe_params)
    respond_to do |format|
      format.html
      format.json
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(:title, :main_image, :publicpage).merge(user_id: current_user.id)
  end
end
