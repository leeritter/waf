class Api::V1::TagsController < ApplicationController
  include ActiveStorage::SetCurrent
  def index
    tags = ArchiveTag.all.order(name: :asc)
    render json: tags
  end
end
