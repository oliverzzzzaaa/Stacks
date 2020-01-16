class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "chat_channel"
    stream_for 'chat_channel'
  end

  def speak(data)

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
