Rails.application.routes.draw do
  resources :tasks
  devise_for :users
  root "pages#index"
  resources :pages
end
