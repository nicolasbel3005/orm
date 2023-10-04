# orm
E-Commerce 
Description
This is the back end for an e-commerce website. It uses Express.js API and Sequelize to interact with a MySQL database.

The API allows users to:

View all categories, products, tags and product tags
Create, update and delete categories, products and tags
Associate products with tags
User Story
Copy code

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
Acceptance Criteria
Copy code

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
Demo Video
View walkthrough video here: part 1: https://www.loom.com/share/651b75e64c364495bbdd076e580d10dd?sid=3e7a376b-34c9-4cbf-807d-459967a41a69

part 2: https://www.loom.com/share/5282cd9e6bfd46018b455aeee450b967?sid=aed70659-d64c-4b04-a5a4-5b0a2ba98fdd

Installation
Clone repo
Run npm install
Add your MySQL credentials to .env file
Run mysql -u root -p and source schema.sql
Run npm run seed to seed data
Run npm start to connect to db and start server
Use Insomnia to test API routes
Built With
JavaScript
Node.js
Express.js
MySQL
Sequelize
dotenv
Author
Nicolas Esquibel
