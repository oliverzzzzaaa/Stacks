Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :workspaces, only: [:index, :create, :show]
    resources :workspace_assignments, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :channels
    resources :messages
  end
  root "static_pages#root"
  # mount ActionCable.server, at: '/'
end
  