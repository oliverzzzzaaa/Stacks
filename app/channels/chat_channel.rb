class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_channel"
    p "SUBSCRIBED"
    # stream_for "chat_channel"
  end

  def speak(data)
    socket = { message: data['message']}
    ChatChannel.broadcast_to("chat_channel", socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
