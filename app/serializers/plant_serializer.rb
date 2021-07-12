class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :outdoor, :indoor, :image

  has_many :user_plants
  has_many :users, through: :user_plants
  
end
