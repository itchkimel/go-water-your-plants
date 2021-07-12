class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :location

  has_many :user_plants
  has_many :plants, through: :user_plants
  
end
