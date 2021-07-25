class AddAproximateCheckAndNotes < ActiveRecord::Migration[6.1]
  def change
    add_column :archive_items, :date_is_approx, :boolean
    add_column :archive_items, :notes, :text
  end
end
