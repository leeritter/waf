class Api::V1::ArchiveItemsController < ApplicationController
  include ActiveStorage::SetCurrent
  def index
    archive_items = ArchiveItem.all.order(created_at: :desc)
    render json: archive_items, include: [content_files: {methods: :service_url}]
  end

  def show
    if archive_item
      render json: archive_item
    else
      render json: archive_item.errors
    end
  end

  private

  def archive_item
    @archive_item ||= ArchiveItem.find(params[:id])
  end
end
