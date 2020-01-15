# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Message.destroy_all
ChannelMembership.destroy_all
Channel.destroy_all
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
user3 = User.create!({
    username: "Threeisaparty",
    password: "Threeisaparty",
    email: "Threeisaparty@gmail.com",
    name: "ThirdBestUser"
})
user4 = User.create!({
    username: "Fourismore",
    password: "fourismore",
    email: "fourismore@gmail.com",
    name: "FourMeansMore"
})

workspace = Workspace.create!({
    host_id: User.find_by(username: "DemoUser1").id,
    workspace_name: "App-Academy"
})
workspace2 = Workspace.create!({
    host_id: User.find_by(username: "Threeisaparty").id,
    workspace_name: "HR"
})
workspace_assignment1 = WorkspaceAssignment.create!({ 
    user_id: User.find_by(username: "DemoUser1").id, 
    workspace_id: Workspace.find_by(workspace_name: "App-Academy").id})
workspace_assignment2 = WorkspaceAssignment.create!({ 
    user_id: User.find_by(username: "DemoUser2").id, 
    workspace_id: Workspace.find_by(workspace_name: "App-Academy").id})
workspace_assignment3 = WorkspaceAssignment.create!({ 
    user_id: User.find_by(username: "Threeisaparty").id, 
    workspace_id: Workspace.find_by(workspace_name: "HR").id})
workspace_assignment4 = WorkspaceAssignment.create!({ 
    user_id: User.find_by(username: "Fourismore").id, 
    workspace_id: Workspace.find_by(workspace_name: "HR").id})
channel1 = Channel.create!({
    host_id: User.find_by(username: "DemoUser1").id,
    channel_name: "Aa General",
    channel_topic: "General",
    private_message: 0,
    workspace_id: Workspace.find_by(workspace_name: "App-Academy").id
})
channel2 = Channel.create!({
    host_id: User.find_by(username: "DemoUser2").id,
    channel_name: "Michelles Circle",
    channel_topic: "Best Circle",
    private_message: 0,
    workspace_id: Workspace.find_by(workspace_name: "HR").id
})
channel3 = Channel.create!({
    host_id: User.find_by(username: "Threeisaparty").id,
    channel_name: "HR General",
    channel_topic: "General",
    private_message: 0,
    workspace_id: Workspace.find_by(workspace_name: "HR").id
})
channel4 = Channel.create!({
    host_id: User.find_by(username: "Threeisaparty").id,
    channel_name: "HR > Aa",
    channel_topic: "Banter",
    private_message: 0,
    workspace_id: Workspace.find_by(workspace_name: "HR").id
})

channel5 = Channel.create!({
    host_id: User.find_by(username: "DemoUser1").id,
    channel_name: "DM 1",
    channel_topic: "DM",
    private_message: 1,
    workspace_id: Workspace.find_by(workspace_name: "App-Academy").id
})

channel_membership5 = ChannelMembership.create!({
    user_id: User.find_by(username: "DemoUser1").id,
    channel_id: Channel.find_by(channel_name: "DM 1").id
})
channel_membership6 = ChannelMembership.create!({
    user_id: User.find_by(username: "DemoUser2").id,
    channel_id: Channel.find_by(channel_name: "DM 1").id
})
channel_membership1 = ChannelMembership.create!({
    user_id: User.find_by(username: "DemoUser1").id,
    channel_id: Channel.find_by(channel_name: "Aa General").id
})
channel_membership2 = ChannelMembership.create!({
    user_id: User.find_by(username: "DemoUser2").id,
    channel_id: Channel.find_by(channel_name: "Aa General").id
})
channel_membership3 = ChannelMembership.create!({
    user_id: User.find_by(username: "DemoUser1").id,
    channel_id: Channel.find_by(channel_name: "Michelles Circle").id
})
channel_membership5 = ChannelMembership.create!({
    user_id: User.find_by(username: "DemoUser2").id,
    channel_id: Channel.find_by(channel_name: "Michelles Circle").id
})
channel_membership6 = ChannelMembership.create!({
    user_id: User.find_by(username: "Threeisaparty").id,
    channel_id: Channel.find_by(channel_name: "HR General").id
})
channel_membership7 = ChannelMembership.create!({
    user_id: User.find_by(username: "Threeisaparty").id,
    channel_id: Channel.find_by(channel_name: "HR > Aa").id
})
channel_membership8 = ChannelMembership.create!({
    user_id: User.find_by(username: "Fourismore").id,
    channel_id: Channel.find_by(channel_name: "HR General").id
})
channel_membership4 = ChannelMembership.create!({
    user_id: User.find_by(username: "Fourismore").id,
    channel_id: Channel.find_by(channel_name: "HR > Aa").id
})

message1 = Message.create!({
    body: "First!",
    user_id: User.find_by(username: "DemoUser1").id,
    workspace_id: Workspace.find_by(workspace_name: "App-Academy").id,
    channel_id: Channel.find_by(channel_name: "Aa General").id
})
message2 = Message.create! ({
    body: "Second!",
    user_id: User.find_by(username: "DemoUser2").id,
    workspace_id: Workspace.find_by(workspace_name: "App-Academy").id,
    channel_id: Channel.find_by(channel_name: "Aa General").id
})
message3 = Message.create!({
    body: "Third!",
    user_id: User.find_by(username: "DemoUser1").id,
    workspace_id: Workspace.find_by(workspace_name: "App-Academy").id,
    channel_id: Channel.find_by(channel_name: "Aa General").id
})
message4 = Message.create! ({
    body: "First in HR!",
    user_id: User.find_by(username: "Threeisaparty").id,
    workspace_id: Workspace.find_by(workspace_name: "HR").id,
    channel_id: Channel.find_by(channel_name: "HR General").id
})
message5 = Message.create!({
    body: "Second in HR!",
    user_id: User.find_by(username: "Fourismore").id,
    workspace_id: Workspace.find_by(workspace_name: "HR").id,
    channel_id: Channel.find_by(channel_name: "HR General").id
})
message6 = Message.create! ({
    body: "hahahahhahaha!",
    user_id: User.find_by(username: "Threeisaparty").id,
    workspace_id: Workspace.find_by(workspace_name: "HR").id,
    channel_id: Channel.find_by(channel_name: "HR > Aa").id
})