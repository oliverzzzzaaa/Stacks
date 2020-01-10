# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Message.destroy_all
WorkspaceAssignment.destroy_all
Workspace.destroy_all
User.destroy_all

user = User.create!({
    username: "DemoUser1",
    password: "DemoUser1",
    email: "DemoUser1@aa.io",
    name: "Danny Demo"
})
user2 = User.create!({
    username: "DemoUser2",
    password: "DemoUser2",
    email: "DemoUser2@aa.io",
    name: "Danny Demo 2"
})

workspace = Workspace.create!({
    host_id: User.find_by(username: "DemoUser1").id,
    workspace_name: "App-Academy"
})
workspace2 = Workspace.create!({
    host_id: User.find_by(username: "DemoUser2").id,
    workspace_name: "HR"
})

message1 = Message.create!({
    body: "First!",
    user_id: User.find_by(username: "DemoUser2").id,
    workspace_id: Workspace.find_by(workspace_name: "App-Academy").id
})
message2 = Message.create! ({
    body: "Second!",
    user_id: User.find_by(username: "DemoUser1").id,
    workspace_id: Workspace.find_by(workspace_name: "HR").id
})

workspace_assignment1 = WorkspaceAssignment.create!({ 
    user_id: User.find_by(username: "DemoUser1").id, 
    workspace_id: Workspace.find_by(workspace_name: "App-Academy").id})
workspace_assignment1 = WorkspaceAssignment.create!({ 
    user_id: User.find_by(username: "DemoUser2").id, 
    workspace_id: Workspace.find_by(workspace_name: "HR").id})

# workspace_assignment2 = WorkspaceAssignment.create!(
#     {User.find_by(username: "DemoUser2").id, Workspace.find_by(workspace_name: "HR")})