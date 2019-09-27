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
#              api_channels POST   /api/channels(.:format)                                                                  api/channels#create {:format=>:json}
#               api_channel GET    /api/channels/:id(.:format)                                                              api/channels#show {:format=>:json}
#        api_privateservers GET    /api/privateservers(.:format)                                                            api/privateservers#index {:format=>:json}
#                           POST   /api/privateservers(.:format)                                                            api/privateservers#create {:format=>:json}
#         api_privateserver GET    /api/privateservers/:id(.:format)                                                        api/privateservers#show {:format=>:json}
#                           PATCH  /api/privateservers/:id(.:format)                                                        api/privateservers#update {:format=>:json}
#                           PUT    /api/privateservers/:id(.:format)                                                        api/privateservers#update {:format=>:json}
#              api_messages POST   /api/messages(.:format)                                                                  api/messages#create {:format=>:json}
#                                  /cable                                                                                   #<ActionCable::Server::Base:0x00007f98f9da1dc8 @mutex=#<Monitor:0x00007f98f9da1da0 @mon_owner=nil, @mon_count=0, @mon_mutex=#<Thread::Mutex:0x00007f98f9da1d28>>, @pubsub=nil, @worker_pool=nil, @event_loop=nil, @remote_connections=nil>
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
