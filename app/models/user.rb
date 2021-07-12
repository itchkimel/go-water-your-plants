class User < ApplicationRecord
  has_secure_password

  has_many :user_plants
  has_many :plants, through: :user_plants

  validates :email, uniqueness: { case_sensitive: false }

end
