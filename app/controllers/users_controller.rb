class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def update
    current_user.update(user_params)
    redirect_to user_path
  end

  def edit
  end

  def change_user_name
  end

  def update_user_name
  end

  private
  def user_params
    params.require(:user).permit(:icon_image)
  end
end
