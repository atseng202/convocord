module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :logged_in_user

    def connect 
      self.logged_in_user = find_verified_user
      logger.add_tags logged_in_user.username
    end 

    private 

    def find_verified_user
      current_user = User.find_by(session_token: cookies.signed[:session_token])
      if current_user 
        current_user 
      else
        reject_unauthorized_connection 
      end 
    end 

  end
end
