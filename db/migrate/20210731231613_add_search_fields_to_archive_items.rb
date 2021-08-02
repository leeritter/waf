class AddSearchFieldsToArchiveItems < ActiveRecord::Migration[6.1]
  def change
    add_column :archive_items, :search_tags, :string
    add_column :archive_items, :search_locations, :string
    add_column :archive_items, :search_people, :string
  end
end
