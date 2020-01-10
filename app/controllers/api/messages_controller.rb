class Api::MessagesController < ApplicationController

    def index
        @messages = Message.all
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
        # @message.user_id = current_user.id
        # @message.workspace_id = params[:workspace_id]
        if @message.save
            @messages = Message.all
            render :index
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    private

    def message_params
        params.require(:message).permit(:body, :workspace_id, :user_id)
    end
end
