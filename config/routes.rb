Rails.application.routes.draw do
  resources :tasks do
    member do
      put :change
    end
  end

  devise_for :users
  root "pages#index"
  resources :pages
end
