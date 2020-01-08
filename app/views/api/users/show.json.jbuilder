json.extract! @user, :id, :username, :email, :name

json.partial! "api/users/user", user: @user