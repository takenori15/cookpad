class AdvicesController < ApplicationController
  def create
    @advice = Advice.create(advice_params)
  end

  def update
  end

  private
  def advice_params
    params.require(:advice).permit(:making_image, :advice_body).merge(recipe_id: Advice.recipe.id)
  end
end
