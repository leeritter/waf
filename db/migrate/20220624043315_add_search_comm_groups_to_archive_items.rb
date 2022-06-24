class AddSearchCommGroupsToArchiveItems < ActiveRecord::Migration[6.1]
  def change
    add_column :archive_items, :search_comm_groups, :string
  end
end
