# Convocord

![](convocord_demo.gif)

# Background

[Convocord](https://convocord.herokuapp.com "Convocord Homepage") is a single page web application allowing users to join and interact in chat communities where people share common interests. Servers can be created or joined via an invite link and users can either communicate in text channels within a particular server, or privately message people in servers they both participate in. 

# Technologies Used

1. Ruby 
    * Using version 2.6.3 with Rails backend version 5.2.3
    * PostgreSQL as primary database for storing backend data (with Rails to interact with data)

2. Javascript 
    * Frontend leverages React and React-Modal
    * Application state and middleware tools managed with Redux 
    * Routing with React-Router (HashRouter etc.)
    * JQuery for AJAX calls and dealing with CSRF tokens

# Code Highlights

## Action Cable with Websockets for Live Chat

Using Rails Action Cable, I integrated websockets into the application so that public chat or private message channels would offer real-time messaging features to users. 

Setting up websockets required a few important steps. First, I had to connect a verified user: in this app, a logged in user. I stored the session token in cookies for easy access of the current user, which is already set once the user has initially logged in. 

```ruby
# app/channels/application_cable/connection.rb
...

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

...
```

In a room messages channel, a subscription is made so that streams in that channel will reach the verified consumer. When a new message is invoked and `speak` is called in a particular channel, the created message is eventually routed back to the identifier for that specific channel.  

```ruby
# app/channels/room_channel.rb
...

class RoomChannel < ApplicationCable::Channel
  def subscribed 
    if params[:channel_id].present?
      stream_from("room_channel_public-#{(params[:channel_id])}")
    elsif params[:privateserver_id].present?
      stream_from("room_channel_private-#{(params[:privateserver_id])}")
    end 
  end 

  def unsubscribed
  end

  def speak(data)
    # Data should be in format of params hash:  { message: {author_id: id, content: "", etc. }  }
    content = data["message"]["content"]
    messageable_id = data["message"]["messageable_id"]
    messageable_type = data["message"]["messageable_type"]

    Message.create!(author_id: logged_in_user.id, content: content, messageable_id: messageable_id, messageable_type: messageable_type)
  end 
end 
...
```

An ApplicationJob asynchronously broadcasts the newly created message from the backend in JSON format.

```ruby
# app/jobs/message_broadcast_job.rb
...

class MessageBroadcastJob < ApplicationJob 
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast build_channel_id(message), message: ActiveSupport::JSON.decode(render_message(message))
  end 

  private 

  def build_channel_id(message)
    if message.messageable_type == "Channel" 
      "room_channel_public-#{message.messageable.id}"
    else
      "room_channel_private-#{message.messageable.id}"
    end 
  end 

  def render_message(message)
    ApplicationController.renderer.render(partial: "api/messages/message.json.jbuilder", locals: {message: message})
  end 
end 
...
```

In the frontend, the consumer subscribes to a given RoomChannel after a corresponding component for a server's chat channel is mounted. Additionally, subscriptions also had to be cleaned up and disconnected upon moving to a different channel so that messages in other channels were not falsely received.

```jsx
// frontend/components/channels/channel_detail.jsx
...

class ChannelDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { requestSingleChannel, match, receiveMessage } = this.props;
    requestSingleChannel(match.params.channelId).then(
      (channel) => {
        App[`room_channel_public-${channel.channel.id}`] = App.cable.subscriptions.create({channel: "RoomChannel", channel_id: channel.channel.id}, {
          connected: function () { },
          disconnected: function () { App.cable.subscriptions.remove(this); },
          received: function (data) {
            if (data['message']['messageable_type'] === 'Channel' && data['message']['messageable_id'] === channel.channel.id) {
              receiveMessage(data['message']);
            }
          },
          speak: function (message) {
            return this.perform('speak', {
              message: message
            });
          }
        });
      }
    );
  }

}
...
```

# Future Plans for Implementation
  * Publicize server links within servers to allow users to join more possible servers
  * Use AWS S3 storage to open up space and allow users to select and save profile pictures 
  * Add friends to easily keep track of and message friends across different servers
  * Live update of user's online status in private chat
    