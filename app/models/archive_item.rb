class ArchiveItem < ApplicationRecord
    has_one_attached :content_file
    has_one_attached :medium_photo
    acts_as_ordered_taggable
    acts_as_ordered_taggable_on :tags, :locations, :people, :comm_groups, :collections
    has_rich_text :content_notes
    has_rich_text :medium_notes
end
