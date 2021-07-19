class ArchiveItem < ApplicationRecord
    has_one_attached :media
    acts_as_ordered_taggable
    acts_as_ordered_taggable_on :tags, :locations
end
