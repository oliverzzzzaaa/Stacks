Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resources :workspaces, only: [:index, :create, :show]
    get '/workspacesearch', to: 'workspaces#search'
    resources :workspace_assignments, only: [:create, :destroy]
    resources :channel_memberships, only: [:create, :index, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :channels
    resources :messages
  end
  root "static_pages#root"
  mount ActionCable.server, at: '/'
end
  