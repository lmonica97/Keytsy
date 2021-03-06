Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resource :user, only: [:create]
    resources :users, only: [:index, :show]
    resource :session, only: [:create, :show, :destroy]
    resources :products, only: [:create, :index, :show] do 
      resources :reviews, only: [:index] 
    end
    resources :cartitems, only: [:create, :update, :destroy, :index]
    resources :reviews, only: [:create, :update, :destroy]
    resources :categories, only: [:index, :create, :show]
  end
end
