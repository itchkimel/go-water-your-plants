class UsersController < ApplicationController
  before_action :authenticate, only: [:me]

  def login
    # find the user by their username
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      # if they're good, create a token
      token = JWT.encode({ user_id: @user.id }, ENV['ITCHE'], 'HS256')

      # save user_id in session so we can use it in future requests
    #   session[:user_id] = user.id
      # return the user in the response
      render json: { user: UserSerializer.new(@user), token: token }
    else
      # for invalid useremail/password combos, send error messages to the front end
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end

  def signup
    # byebug
    user_params = params.permit(:name, :email, :password, :location)
    user = User.create(user_params)
    if user.valid?
      token = JWT.encode({ user_id: user.id }, ENV['ITCHE'], 'HS256')
      render json: { user: UserSerializer.new(user), token: token }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def me
    # byebug
    render json: @user
  end

end
