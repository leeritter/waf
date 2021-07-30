class ArchiveItemsController < ApplicationController  
  layout 'admin'
  before_action :authenticate_user!, only: [:new, :edit, :update, :destroy, :index]
  PAGE_ITEMS = 25

  def get_items(sort)
    return pagy(ArchiveItem.all.order(sort), page: params[:page], items: PAGE_ITEMS)
  end

  def index
    if params[:sort] == 'subject'
      @pagy, @archive_items = get_items(title: :asc)
    elsif params[:sort] == 'subject-desc'
      @pagy, @archive_items = get_items(title: :desc)
    elsif params[:sort] == 'medium'
      @pagy, @archive_items = get_items(medium: :asc)
    elsif params[:sort] == 'medium-desc'
      @pagy, @archive_items = get_items(medium: :desc)
    elsif params[:sort] == 'year'
      @pagy, @archive_items = get_items(year: :asc)
    elsif params[:sort] == 'year-desc'
      @pagy, @archive_items = get_items(year: :desc)      
    else
      @pagy, @archive_items = get_items(created_at: :desc)
    end
  end

  def new
    @archive_item = ArchiveItem.new
    @submit_text = "Create Item"
    @tag_options = ArchiveTag.all.order(name: :desc).pluck(:name)
    @location_options = Location.all.order(name: :desc).pluck(:name)
    @person_options = Person.all.order(name: :desc).pluck(:name)
  end  

  def create
    archive_item = ArchiveItem.create(archive_item_params)
    flash.alert = "An item has been created."
    redirect_to archive_items_path
  end

  def show    
    @archive_item = ArchiveItem.find(params[:id])
  end

  def edit
    @archive_item = ArchiveItem.find(params[:id])
    @submit_text = "Update Item"
    @tag_options = ArchiveTag.all.order(name: :desc).pluck(:name)
    @location_options = Location.all.order(name: :desc).pluck(:name)
    @person_options = Person.all.order(name: :desc).pluck(:name)
  end

  def update
    @archive_item = ArchiveItem.find(params[:id])
    @archive_item.update(archive_item_params)
    flash.alert = "An item has been updated."

    redirect_to archive_items_path
  end

  def destroy
    @archive_item = ArchiveItem.find(params[:id])
    @archive_item.destroy

    redirect_to archive_items_path
  end

  private

  def archive_item_params
    params.require(:archive_item).permit(:title, :medium, :year, :credit, :location, :media, :tag_list, :location_list, :person_list, :date_is_approx, :notes, :medium_photo)
  end
end
