Example showing how to integrate a Tauri Updater Server with a SQLite3 DB.

There is some data stored on the db for the sake of testing.  
Visiting `localhost:8000/update/linux-amd64/0` a json file will be returned, with a one-time token which can be used to download the pointed file.  
In the public repository the referenced file does not exist, an error code will be returned instead.
This demo is using an sqlite db, but since Sequelize is leveraged within the serve, this code is fully portable with only minimal configuration needed.
