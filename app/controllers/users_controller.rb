class UsersController < ApplicationController
  before_action :authenticate_user!, except: :show
  def show
    @user = User.find(params[:id])
  end

  def update
    current_user.update(user_params)
    redirect_to user_path
  end

  def edit
    @user = User.find(params[:id])
    redirect_to root_path unless @user.id == current_user.id
  end

  def change_user_name
    @user = User.find(params[:id])
    redirect_to root_path unless @user.id == current_user.id
  end

  def update_user_name
    current_user.update(user_params)
  end

  private
  def user_params
    params.require(:user).permit(:icon_image, :user_name)
  end
end
