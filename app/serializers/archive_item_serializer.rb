class ArchiveItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  cache key: 'archive_item', expires_in: 2400.hours
  attributes :id, :medium, :year, :content_files, :title

  def content_files
    content_files = object.content_files.map do |content_file|
      rails_blob_path(content_file , only_path: true) if object.content_files.attached?
    end
  end
end