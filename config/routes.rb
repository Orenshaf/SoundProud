Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    get 'users/check_email', to: 'users#check_email'
    resources :users, only: [:create, :update, :show]
    resources :tracks, only: [:index, :create, :show, :destroy, :update] do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create, :destroy]
    resource :session, only: [:create, :destroy] 
  end

  root to: 'static_pages#root'
end
