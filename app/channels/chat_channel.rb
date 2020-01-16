class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "chat_channel"
    stream_for 'chat_channel'
  end

  def speak(data)
    debugger
    message = Message.new(data["message"])
    socket = { message: message}
    ChatChannel.broadcast_to('chat_channel',socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
