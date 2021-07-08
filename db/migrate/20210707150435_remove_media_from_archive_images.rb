class RemoveMediaFromArchiveImages < ActiveRecord::Migration[6.1]
  def change
    remove_column :archive_items, :media
  end
end
