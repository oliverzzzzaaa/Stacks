json.extract! @channel, :id, :host_id, :channel_name, :channel_topic, :private_message, :workspace_id

@channel.messages.each do |message|
    json.set! message.id do 
        json.extract! message, :id, :body, :user_id, :created_at, :updated_at
        json.author do 
            json.partial! '/api/users/user', user:  message.user
        end
    end
end

