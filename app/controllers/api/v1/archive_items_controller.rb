class Api::V1::ArchiveItemsController < ApplicationController
  include ActiveStorage::SetCurrent
  include Rails.application.routes.url_helpers
  def index
    archive_items = ArchiveItem.all.order(created_at: :desc)
    render json: archive_items
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
