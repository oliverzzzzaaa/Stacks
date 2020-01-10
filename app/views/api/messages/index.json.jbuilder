@messages.each do |message|
    json.set! message.id do 
        json.extract! message, :id, :body, :user_id, :created_at, :updated_at
        json.author do 
            json.partial! '/api/users/user', user:  message.user
        end
    end
end