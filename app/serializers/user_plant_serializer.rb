class UserPlantSerializer < ActiveModel::Serializer
  attributes :id, :plant_id, :user_id, :watering_frequency, :watered_date

  belongs_to :user
  belongs_to :plant

end
