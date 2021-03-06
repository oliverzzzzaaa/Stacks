class Api::MessagesController < ApplicationController

    def index
        # channel_id = Channel.find(params[:channel_id]).id
        # @messages = Message.find(:id)
        # @messages = Channel.includes(:messages).find(params[:channelId]).messages
        @messages = Message.all
        return @messages
    end

    def show
        @message = Message.find(params[:id])
        if @message
            render :show
        else
            render json: ['Message not found'], status: 404
        end
    end

    def update
        @message = Message.find(params[:id])
        if @message.update_attributes(message_params)
            @messages = Message.all
            render :index
        else
            render json: @message.errors.full_message, status: 422
        end
    end 

    def destroy
        @message = Message.find(params[:id])
        @message.destroy
        render json: @message.id
    end

    def create
        @message = Message.new(message_params)
        @message.user_id = current_user.id
        # @message.workspace_id = Workspace.find_by(workspace_name: "App-Academy").id
        if @message.save
            ActionCable.server.broadcast "chat_channel", message: @message
            @messages = Message.all
            render :index
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    private

    def message_params
        params.require(:message).permit(:body, :workspace_id, :channel_id)
    end
end
