# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Workspace.delete_all
WorkspaceAssignment.delete_all

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
    host_id: 1,
    workspace_name: "App-Academy"
})
workspace2 = Workspace.create!({
    host_id: 2,
    workspace_name: "HR"
})

message1 = Message.create! ({
    body: "First!",
    user_id: 1,
    workspace_id: 1
})
message2 = Message.create! ({
    body: "Second!",
    user_id: 2,
    workspace_id: 1
})

workspace_assignments = WorkspaceAssignment.create!([{ user_id: 1, workspace_id: 1 }, { user_id: 2, workspace_id: 2 }])