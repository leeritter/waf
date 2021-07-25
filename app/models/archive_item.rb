class ArchiveItem < ApplicationRecord
    has_one_attached :media
    has_one_attached :medium_photo
    acts_as_ordered_taggable
    acts_as_ordered_taggable_on :tags, :locations, :people
    has_rich_text :notes
end
