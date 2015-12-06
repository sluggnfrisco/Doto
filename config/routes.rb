Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api do
    resources :todos, except: [:new, :edit] do  # makes sense -- this is an API
      resources :steps, except: [:new, :edit]   # not member (need new resource)
    end
  end
end
