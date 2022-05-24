# mongo-network-api     [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
The following is an application that allows the user to test api routes for a social network application. This application uses the mongo data base to store data about users and other content. Each user has a username, email, thoughts, and reactions. This application's main purpose is to test api routes, with that said there is not live site to view the code. However a walkthrough video is linked down below. 

![gif-page](/assets/insom.png)

# Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Instructions](#instructions)
- [Requirements](#requirements)
- [Installing](#installing)
- [Walkthrough](#walkthrough)
- [Aurthor](#aurthor)
- [Credits](#credits)
- [License](#license)

## Features 
* user model
* thought model
* reaction model

## Technologies
* JavaScrip
* Mongoose
* Express
* MongoDB

## Instructions
A quick walk-through to download the application. Once Installation is complete the file can be edited to include different images or text.

### Requirements
* IDE capable of running JavaScript
* Insomnia (or similar alternative)
* Mongodb
* Node.js

### Installing
* Fork the repository, or clone through terminal 
* Open the file, and perform a npm install in your terminal 
```
npm install
```
* Then create the database in Mongodb as `socialDB`
* The database will be empty, so the routes can be user to input data if desired
* At this point changes can be made if desired.
* To view the file perform a node index.js in the terminal and test routes in either a browser or Insomnia.
```
node index.js
```

### Walkthrough
* [CLICK HERE](https://drive.google.com/file/d/1WYg8czJPjTOsZQ5lNzELbnOF0E9WaVu0/view)


(The following can be done through Insomnia)
To add a user:
```
{
    "username" : "aUsername",
    "email" : "email@email.com"
}
```
  
To add a thought:
```
{
  "thoughtText": "add thought here",
  "username": "add username here",
  "userId": "add userId here"
}
```
  
To add a reaction:
```
{
    "reactionBody": "add text here",
	"username": "add username here"
}
```

### Aurthor
Richard Ferry
* [LinkedIn](https://www.linkedin.com/in/richard-ferry-83120514b/)
* [Github](https://github.com/rich-f-p)
* [email](mailto:richardfpro864@gmail.com)

### Resources
* Mongodb
* Insomnia

### License
* [License: MIT](https://opensource.org/licenses/MIT) : click to learn more