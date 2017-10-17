Rails.application.routes.draw do
  devise_for :users
  root "recipes#index"

  resources :users, only: [:show, :edit] do
    collection do
      get :change_user_name
      get :update_user_name
    end
  end

  resources :recipes, only: [:index, :show, :new, :create] do
    collection do
      get :search
      get :draft
    end
    member do
      get :list
    end
  end

end
