class ApplicationController < ActionController::API

  def authenticate
    # byebug
    # check the user's token (from the headers)
    auth_header = request.headers["Authorization"]
    token = auth_header.split.last
    # parse that token using JWT
    payload = JWT.decode(token, ENV["itche"], true, { algorithm: 'HS256' }).first
    # lookup a user in the database using the parsed token payload
    # otherwise send back the user!
    @user = User.find_by(id: payload["user_id"])
    byebug
  rescue
    # if they don't exist, or have a bad token, or didn't send a token, send back an error
    render json: { errors: ["Unauthorized"] }, status: :unauthorized
  end

  # def authenticate
    
  # end

end
