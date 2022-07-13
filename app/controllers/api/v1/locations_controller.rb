class Api::V1::LocationsController < ApplicationController
  include ActiveStorage::SetCurrent
  def index
    locations = Location.all.order(name: :asc)
    render json: locations
  end
end
