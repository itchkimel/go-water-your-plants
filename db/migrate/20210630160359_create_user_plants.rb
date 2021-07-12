class CreateUserPlants < ActiveRecord::Migration[6.1]
  def change
    create_table :user_plants do |t|
      t.integer :plant_id
      t.integer :user_id
      t.integer :watering_frequency
      t.string :watered_date

      t.timestamps
    end
  end
end
