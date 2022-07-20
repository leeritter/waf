class ArchiveItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  cache key: 'archive_item', expires_in: 24.hours
  attributes :id, :medium, :year, :credit, :content_files

  def content_files
    content_files = object.content_files.map do |content_file|
      rails_blob_path(content_file , only_path: true) if object.content_files.attached?
    end
  end
end
