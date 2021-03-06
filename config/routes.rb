Rails.application.routes.draw do
  resources :comm_groups
  resources :collections
  resources :people
  devise_for :users
  namespace :api do
    namespace :v1 do
      get 'archive_items/index'
      get '/archive_items/:id', to: 'archive_items#show'
    end
  end

  get '/archive_items/sync_search' => 'archive_items#sync_search_strings';

  resources :archive_items
  resources :archive_tags
  resources :locations
  
  get 'archive_items/index'
  get 'archive_items/create'
  get 'archive_items/show'
  get 'archive_items/new'
  get 'archive_items/edit'
  get 'archive_items/destroy'

  get '/admin' => 'archive_items#index';

  root 'homepage#index'
  #get '/*path' => 'homepage#index'

  # Have to use this catch-all route to allow image attachments to work
  get '*all', to: 'homepage#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
