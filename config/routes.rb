Rails.application.routes.draw do
  root 'dashboard#index'
  namespace :api do
    resources :superheros, only: [:index, :create, :destroy] do
      get :search, on: :collection
    end
  end
  # get 'dashboard/index'
end
