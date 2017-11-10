class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def edit
  end

  def change_user_name
  end

  def update_user_name
  end
end
