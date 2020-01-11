@channels.each do |channel|
    json.set! channel.id do 
        json.extract! channel, :id, :channel_name, :private_message, :workspace_id
    end
end