module ApplicationCable
  class Channel < ActionCable::Channel::Base
    delegate :check_current_user, to: :connection

    protected :check_current_user
  end
end
