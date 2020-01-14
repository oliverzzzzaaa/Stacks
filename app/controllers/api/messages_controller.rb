class Api::MessagesController < ApplicationController

    def index
        # channel_id = Channel.find(params[:channel_name]).id
        # @messages = Message.find(channel_id: channel_id)
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
        @message = Message.find(:id)
        if @message.save
            render :show
        else
            render json: @message.errors.full_message, status: 422
        end
    end 

    def destroy
        @message = Message.find(:id)
        @message.destroy
        render :show
    end

    def create
        @message = Message.new(message_params)
        @message.user_id = current_user.id
        @message.workspace_id = Workspace.find_by(workspace_name: "App-Academy").id
        # @message.workspace_id = params[:workspace_id]
        if @message.save
            # ActionCable.server.broadcast "chat_channel", message: @message
            @messages = Message.all
            render :index
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    private

    def message_params
        params.require(:message).permit(:body, :workspace_id)
    end
end
