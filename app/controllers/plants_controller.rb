class PlantsController < ApplicationController

  def index 
    plants = Plant.all
    render json: plants
  end

  def create
    # byebug
    plant = Plant.new(plant_params)
    if plant.valid?
        plant.save
        render json: plant, status: 201
    else
        render json: {error: plant.errors.full_messages}, status: 422
    end
  end

  def show
      plant = Plant.find_by(id: params[:id])
      if plant
          render json: plant
      else
      render json: {error: "Plant not found"}, status: 404
      end
  end

  def update
      plant = Plant.find_by(id: params[:id])
      plant.assign_attributes(plant_params)

      if plant.valid?
          plant.save
          render json: plant, status: 201
      else
          render json: {errors: plant.errors.full_messages}, status: 422
      end
  end

  # def destroy
  #     guest = Guest.find_by(id: params[:id])
  #     if guest
  #     guest.destroy
  #     render json: {}, status: :no_content 
  #     else
  #     render json: {error: guest.errors.full_messages}, status: 404
  #     end
  # end

  # def login
  #     # find the user by their username
  #     guest = Guest.find_by(username: params[:username])

  #     # if the user exists and their password matches, log them in
  #     if guest 
  #         # && guest.authenticate(params[:password])
  #       # save user_id in session so we can use it in future requests
  #     #   session[:user_id] = user.id
  #       # return the user in the response
  #       render json: guest
  #     else
  #       # for invalid username/password combos, send error messages to the front end
  #       render json: { error: "Invalid username or password" }, status: :unauthorized
  #     end
  # end

private

  def plant_params
      params.permit(:name, :outdoor, :indoor, :image)
  end

end
