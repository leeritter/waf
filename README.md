# WORLD ARTS FOUNDATION INC

This site is built with Ruby on Rails, and a React front-end using the `webpacker` gem to bundle and compile js files. 

### Routes
Routes are handled as a SPA by react-router in the file: `app/javascript/routes/Index.jsx`

### Page Templates
Page templates are jsx components that are hydrated with data from the API at: `app/controllers/api/v1/`

### Database
This app is using a postgres database locally and in production.
To create a local database you can run `rails db:create`, and then seed it with data using `rails db:seed`.

### Deployment
Staging and production environments are hosted on Heroku.
To deploy you can run `git push heroku yourbranch:master` to push to staging.
Migrate production ready code from staging to prod using Heroku's "promote" UI.
