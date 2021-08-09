class ArchiveItemsController < ApplicationController  
  layout 'admin'
  before_action :authenticate_user!, only: [:new, :edit, :update, :destroy, :index, :get_items, :sync_search_strings]
  PAGE_ITEMS = 25

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
    elsif params[:archive_q]
      @pagy, @archive_items = pagy(ArchiveItem.ransack(title_or_search_tags_or_search_locations_or_search_people_or_search_collections_cont: params[:archive_q]).result, page: params[:page], items: PAGE_ITEMS)
    else
      @pagy, @archive_items = get_items(created_at: :desc)
    end
  end

  def get_items(sort)
    return pagy(ArchiveItem.all.order(sort), page: params[:page], items: PAGE_ITEMS)
  end

  def sync_search_strings
    @archive_items = ArchiveItem.all
    @archive_items.each do |item|
      # Sync all tag fields
      item.update_columns(search_locations: item.location_list.join(', '), search_tags: item.tag_list.join(', '), search_people: item.person_list.join(', '), search_collections: item.collection_list.join(', '))
    end
  end

  def new
    @archive_item = ArchiveItem.new
    @submit_text = "Create Item"
    @tag_options = ArchiveTag.all.order(name: :desc).pluck(:name)
    @location_options = Location.all.order(name: :desc).pluck(:name)
    @person_options = Person.all.order(name: :desc).pluck(:name)
    @collection_options = Collection.all.order(name: :desc).pluck(:name)
    @current_user = current_user
  end  

  def create
    archive_item = ArchiveItem.create(archive_item_params)
    
    # Update search fields
    archive_item.update_columns(search_locations: params[:archive_item][:location_list], search_tags: params[:archive_item][:tag_list], search_people: params[:archive_item][:person_list], search_collections: params[:archive_item][:collection_list])

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
    @collection_options = Collection.all.order(name: :desc).pluck(:name)
  end

  def update    
    @archive_item = ArchiveItem.find(params[:id])
    @archive_item.update(archive_item_params)

    # Update search fields
    @archive_item.update_columns(search_locations: params[:archive_item][:location_list], search_tags: params[:archive_item][:tag_list], search_people: params[:archive_item][:person_list], search_collections: params[:archive_item][:collection_list])

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
    params.require(:archive_item).permit(:title, :medium, :year, :credit, :location, :content_file, :tag_list, :location_list, :person_list, :collection_list, :date_is_approx, :content_notes, :medium_notes, :medium_photo, :search_tags ,:search_locations, :search_people, :search_collections, :created_by)
  end
end
