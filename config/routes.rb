Rails.application.routes.draw do
  root 'home#index'
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete 'logout', to: 'sessions#delete'

  resources :postings
  resources :courses
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
