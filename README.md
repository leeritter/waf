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
To deploy the main branch run: `git push heroku main` to push to staging.

To deploy any other branch run `git push heroku <yourbranch>:master`.
Migrate production ready code from staging to prod using Heroku's "promote" UI.

### Third Party Tools
***Acts as taggable on*** <br/>
Using this gem for tagging functionality on the `ArchiveItem` model. <br/>
[https://github.com/mbleigh/acts-as-taggable-on](https://github.com/mbleigh/acts-as-taggable-on)

***Devise*** <br/>
Used for account management and authentication for the CMS. <br/>
[https://github.com/heartcombo/devise](https://github.com/heartcombo/devise)

***Ransack*** <br/>
Used for search. <br/>
[https://github.com/activerecord-hackery/ransack](https://github.com/activerecord-hackery/ransack)