class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.boolean :outdoor
      t.boolean :indoor
      t.string :image

      t.timestamps
    end
  end
end
