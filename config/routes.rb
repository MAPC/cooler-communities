Rails.application.routes.draw do
  resources :affiliations
  resources :user_surveys
  resources :survey_responses
  resources :survey_questions
  resources :surveys
  resources :categories
  resources :question_responses
  resources :responses
  resources :questions
  resources :users
 
  get '/register', to: 'users#new'
  post '/register', to: 'users#create'
  
  get '/login', to: 'sessions#new'
  post '/sessions', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  get '/current_user_id', to: 'users#current_user_id'

  get '/summary', to: 'surveys#summary'
  get '/user_summary_pdf/:id', to: 'users#user_summary_pdf'
  get '/user_summary_csv/:id', to: 'users#user_summary_csv'
  
  get '/all_users_summary_csv', to: 'users#all_users_summary_csv'
  get '/reset_password/:id', to: 'users#reset_password'

  get '/about', to: 'static#about'
  get '/eventbrite', to: 'static#eventbrite'
  get '/img_url/:id', to: 'static#img_url'
  
  post '/users', to: 'users#update'
  root 'surveys#survey'
  
  get '/community_total', to: 'responses#community_total'
  get '/category_total/:id', to: 'responses#category_total'
  get '/affiliation_total/:id', to: 'responses#affiliation_total'
end
