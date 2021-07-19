class CreateArchiveTags < ActiveRecord::Migration[6.1]
  def change
    create_table :archive_tags do |t|
      t.string :name

      t.timestamps
    end
  end
end
