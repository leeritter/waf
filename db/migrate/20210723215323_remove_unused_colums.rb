class RemoveUnusedColums < ActiveRecord::Migration[6.1]
  def change
    remove_column :archive_items, :notes
    remove_column :archive_items, :location
  end
end
