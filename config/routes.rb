Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :images, only: [:create, :index, :show, :update, :destroy]
    resources :follows, only: [:index, :show, :create, :destroy]
    resources :likes, only: [:index, :show, :create, :destroy]
    resources :comments, only: [:index, :show, :create, :destroy]
  end
end
