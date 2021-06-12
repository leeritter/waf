Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      get 'archive_items/index'
      get '/archive_items/:id', to: 'archive_items#show'
    end
  end

  resources :archive_items
  get 'archive_items/index'
  get 'archive_items/create'
  get 'archive_items/show'
  get 'archive_items/new'
  get 'archive_items/edit'
  get 'archive_items/destroy'

  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
