# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#               api_servers GET    /api/servers(.:format)                                                                   api/servers#index {:format=>:json}
#                           POST   /api/servers(.:format)                                                                   api/servers#create {:format=>:json}
#                api_server GET    /api/servers/:id(.:format)                                                               api/servers#show {:format=>:json}
#                           PATCH  /api/servers/:id(.:format)                                                               api/servers#update {:format=>:json}
#                           PUT    /api/servers/:id(.:format)                                                               api/servers#update {:format=>:json}
#                           DELETE /api/servers/:id(.:format)                                                               api/servers#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create]

    resource :session, only: [:create, :destroy]

    resources :servers, only: [:index, :show, :create, :update, :destroy]

    resources :channels, only: [:show, :create]

    resources :privateservers, only: [:index, :show, :create, :update]

    resources :messages, only: [:create]
  end 

  mount ActionCable.server => '/cable'

  root to: "static_pages#root"
end
