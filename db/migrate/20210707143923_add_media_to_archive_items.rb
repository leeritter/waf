class AddMediaToArchiveItems < ActiveRecord::Migration[6.1]
  def change
    add_column :archive_items, :media, :string
  end
end
