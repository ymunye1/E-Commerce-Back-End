# 13 Object-Relational Mapping (ORM): E-Commerce Back End
## Description
E-Commerce back end that utilizes C.R.U.D. methods
You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

## [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents


- [Links](#links)
- [UserStory](#User Story)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)




## Links
To my video using screencastify part 1 https://drive.google.com/file/d/1tABwM8GOaNjJNLL-tXJe3bEF_SbAaox5/view
To my video using screencastify part 2 https://drive.google.com/file/d/1iKdInnNZJlo_H1SxVbOEZoN_guFIQyJB/view
My github code link for program https://github.com/ymunye1/E-Commerce-Back-End


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```


```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with  data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Postman
THEN I am able to successfully create, update, and delete data in my database
```

## Installation

To install necessary dependencies use the following command:
```
npm i
```
## Usage 
npm run seed
```
npm start
```

## Screenshots  ## Gif of my work

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Postman:

![In POSTMAN, testing “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/E-Commerce-All-Get-Route.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Postman:

![In POSTMAN, testing “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/E-Commerce-Single-Get-Route-All.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Postman:

![In POSTMAN, testing “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/E-Commerce-POST-PUT-DELETE-CATEGORIES.gif)

