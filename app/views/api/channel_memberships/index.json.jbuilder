@channel_memberships.each do |membership|
    json.set! membership.id do 
        json.extract! membership, :id, :user_id, :channel_id
        json.channel_name do 
            json.partial! '/api/channels/channel', channel:  membership.channel
        end
    end
end