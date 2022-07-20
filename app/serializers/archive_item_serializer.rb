class ArchiveItemSerializer < ActiveModel::Serializer

  attributes :id, :medium, :year, :credit
  has_many :content_files
end
