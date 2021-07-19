class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :lat
      t.string :lng
      t.text :description

      t.timestamps
    end
  end
end
