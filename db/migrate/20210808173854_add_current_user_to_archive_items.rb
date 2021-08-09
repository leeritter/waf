class AddCurrentUserToArchiveItems < ActiveRecord::Migration[6.1]
  def change
    add_column :archive_items, :created_by, :string
  end
end
