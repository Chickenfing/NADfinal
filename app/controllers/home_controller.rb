class HomeController < ApplicationController
  def index
    render component: 'HelloWorld', props: {greeting: 'Hello' }
  end
end
