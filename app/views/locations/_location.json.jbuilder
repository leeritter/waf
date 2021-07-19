json.extract! location, :id, :name, :lat, :lng, :description, :created_at, :updated_at
json.url location_url(location, format: :json)
