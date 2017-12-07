class RecipesController < ApplicationController
  def index
  end

  def search
  end

  def recent_list
    @recipes = Recipe.all.where(publicpage: "2").order("id DESC").page(params[:page]).per(5)
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
    @recipe_person = Recipe.select("person").find(params[:id])
    @ingredients = Ingredient.where(recipe_id: params[:id])
    @new_ingredient = Ingredient.where(recipe_id: params[:id]).last
    @first_ingredient = Ingredient.new
  end

  def create_first_ingredient
    @recipe = Recipe.find(params[:id])
    @ingredient = Ingredient.create(first_ingredient_params)
    @recipe.update(person_params)
    redirect_to recipe_path(id: @ingredient.recipe_id)
  end


  def update
    @recipe = Recipe.find(params[:id])
    @recipe.update(recipe_params)

    respond_to do |format|
      format.html
      format.json
    end
  end

  def update_to_public
    @recipe = Recipe.find(params[:recipe][:id])
    @recipe.update(public_params)
    redirect_to recent_list_recipes_path
  end

  def ingredients_update
    @recipe = Recipe.find(params[:id])
    @new_ingredient = Ingredient.new
    @ingredients = ingredient_params.map do |id, ingredient_param|
      if Ingredient.exists?(id: id)
        ingredient = Ingredient.find(id)
        merged_ingredient = ingredient_param.merge(recipe_id: params[:id])
        ingredient.update(merged_ingredient)
      else
        merged_ingredient = ingredient_param.merge(recipe_id: params[:id])
        Ingredient.create(merged_ingredient)
      end
    end
    @recipe.update(person_params)
    redirect_to recipe_path(params[:id])
  end

  private
  def recipe_params
    params.require(:recipe).permit(:id, :title, :main_image, :catchphrase, :first_body, :second_body, :third_column, :tips, :background, :publicpage).merge(user_id: current_user.id)
  end

  def public_params
    params.require(:recipe).permit(:id, :publicpage)
  end

  def person_params
    params.require(:recipe).permit(:person).merge(user_id: current_user.id)
  end

  def ingredient_params
    params.permit(ingredients: [:id, :ingredient_name, :weight])[:ingredients]
  end

  def first_ingredient_params
    binding.pry
    params.require(:recipe).require(:ingredient).permit(:ingredient_name, :weight).merge(recipe_id: params[:id])
  end
end
