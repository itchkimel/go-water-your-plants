class UserPlantsController < ApplicationController
 
  def update
    # user_plant_params = params.permit(:plant_id, :user_id, :watered_date, :watering_frequency)
    user_plant = UserPlant.find_by(id: params[:id])
    user_plant.update(user_plant_params)
    render json: user_plant, status: 200    
  end

  private

  def user_plant_params
    params.permit(:plant_id, :user_id, :watering_frequency, :watered_date)
  end

end
