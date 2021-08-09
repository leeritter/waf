class AddSearchCollectionsToArchiveItems < ActiveRecord::Migration[6.1]
  def change
    add_column :archive_items, :search_collections, :string
  end
end
