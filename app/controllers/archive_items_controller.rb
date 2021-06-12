class ArchiveItemsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :edit, :update, :destroy, :index]

  def index
    @archive_items = ArchiveItem.all.order(created_at: :desc)
  end

  def new
    @archive_item = ArchiveItem.new
  end  

  def create
    archive_item = ArchiveItem.create(archive_item_params)
    redirect_to archive_items_path
  end

  def show    
    @archive_item = ArchiveItem.find(params[:id])
  end

  def edit
    @archive_item = ArchiveItem.find(params[:id])
  end

  def update
    @archive_item = ArchiveItem.find(params[:id])
    @archive_item.update(archive_item_params)

    redirect_to archive_item_path(@archive_item)
  end

  def destroy
    @archive_item = ArchiveItem.find(params[:id])
    @archive_item.destroy

    redirect_to archive_items_path
  end

  private

  def archive_item_params
    params.require(:archive_item).permit(:title, :medium, :year, :credit, :location)
  end
end
