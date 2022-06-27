# frozen_string_literal: true

class ContentFileToFiles < ActiveRecord::Migration[6.1]
  def up
    ActiveStorage::Attachment.where(name: "content_file")
      .where(record_type: "ArchiveItem")
      .update(name: "content_files")
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
