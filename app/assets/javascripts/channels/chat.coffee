App.chat = App.cable.subscriptions.create "ChatChannel",
  connected: ->
#     # Called when the subscription is ready for use on the server

  disconnected: ->
#     # Called when the subscription has been terminated by the server

  received: (data) ->
        # $('').append("<li key={message.id} className="message-li">" + 
        #                 "<div className="chat-profile-pic">" + 
        #                     "<img src={window.defaultPicture}/>" + 
        #                 "</div>" + 
        #                 "<div>" + 
        #                     "<div className="chat-top-row">" + 
        #                         "<span className="chat-author-name">" +
        #                             "{message.author.name}" +
        #                         "</span>" + 
        #                         "<h5 className="chat-timestamp">" + 
        #                             "{(new Date(message.created_at).toLocaleTimeString())}" + 
        #                         "</h5>" + 
        #                     "</div>" + 
        #                     "<h4 className="chat-message-body">" + 
        #                         "{message.body} " + 
        #                     "</h4>" + 
        #                 "</div>" + 
        #             "</li>" )
#     # Called when there's incoming data on the websocket for this channel
