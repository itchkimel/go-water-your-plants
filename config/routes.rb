Rails.application.routes.draw do
  
  post "/signup", to: "users#signup"
  post "/login", to: "users#login"
  get "/me", to: "users#me"
  resources :user_plants
  resources :plants
  resources :users


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
