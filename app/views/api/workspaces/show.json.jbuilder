json.set! @workspace.id do
    json.extract! @workspace, :id, :workspace_name
    json.members do
        @workspace.users.each do |user|
            json.set! user.id do
                json.extract! user, :id, :name
            end
        end
    end
    json.channels do 
        @workspace.channels.each do |channel|
            json.extract! channel, :id, :host_id, :channel_name, :channel_topic, :private_message, :workspace_id
            json.messages do
                channel.messages.each do |message|
                    json.set! message.id do 
                        json.extract! message, :id, :body, :user_id, :created_at, :updated_at, :channel_id
                        json.author do 
                            json.partial! '/api/users/user', user:  message.user
                        end
                    end
                end
            end
        end
    end
end