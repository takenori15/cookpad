Rails.application.routes.draw do
  devise_for :users
  root "recipes#index"

  resources :users, only: [:show, :edit, :update] do
    member do
      get :change_user_name
    end
    collection do
      patch :update_user_name
    end
  end

  resources :recipes, only: [:index, :show, :new, :create, :update] do
    collection do
      patch :update_to_public
      get :recent_list
      get :search
      get :draft
    end
    member do
      patch :ingredients_update
      get :list
    end
    resources :ingredients, only: [:destroy]
  end

end
