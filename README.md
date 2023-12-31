# CSV Upload

CSVupload is a Node.js web application that allows users to upload CSV files, display a list of uploaded files, and view the data in a table on the front end. The application also includes a search box that can search through the data and display only the matching rows.
It is built using **MongoDB, ExpressJs, EJS, NodeJS and JavaScript.**

Hosted Link: [CSV Upload](https://csv-upload-fs7e.onrender.com/)

# Functionality

* Upload any csv file into the system
* Display a list of all uploaded csv files
* When the user selects a file, display all the data in a table on the page
* Search box which searches on the front end itself and displays the matching rows
  of the table only
* Sorting button (ascending and descending) for each column

## Getting Started
* Fork the project
* Clone the forked repository in your local system
* Create .env file in the root directory and add the following:-
    - PORT="Your port number"
    - MONGODB_URL="Your MongoDB URL"
* Install all required packages
```bash
npm install 
```
* Run project 
```bash
npm start
```
The project is running on the port number provided by you.

## Tools Used 
- NodeJS
- MongoDB
- ExpressJS
- EJS
- Bootstrap

### Libraries: 
* csv-parser
* dotenv
* ejs
* express
* express-ejs-layout
* express-session
* mongoose
* fs
* multer