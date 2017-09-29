Rails.application.routes.draw do
  root "recipes#index"

  resources :users, only: [:show, :edit] do
    collection do
      get :user_name
      get :update_user_name
    end
  end

  resources :recipes, only: [:index, :show, :new, :create] do
    collection do
      get :search
    end
    member do
      get :list
    end
  end

end
