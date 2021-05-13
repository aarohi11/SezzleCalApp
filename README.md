# CalApp

Create a web app using any language which logs calculations as they happen and shares those calculations with everyone connected to the app.

For example, user A and user B go to your app at the same time. User A calculates “5 + 5”, which equals “10". This is logged below the calculator as “5 + 5 = 10”. User B is updated about this calculation right after user A posts it. Now, user B calculates “3 x 4". This calculates to “12” and displays “3 x 4=12" right below the prior calculation. User A sees this update immediately after user B posts it.

Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest. The calculator only needs to implement basic arithmetic operations, although you can add other math functions if you would like to impress. But don't forget to meet the basic requirements of the exercise first!

## Implementation

In order to log the calculations, calculations made by users are stored in PostgreSQL database, by sending the JSON data from Angular to Spring Boot, and every time 10 most recent calculations are retrieved from database to display to logged in users.

## Frontend: Angular and Bootstrap

The frontend of the application has been developed using Angular, with routing enabled to navigate between different pages. The following framework is implemeted: 
1) Model - Contains JSON object sent to backend spring to be stored in database
2) View - View generated consisting of Login and Calculator components, using form-control and form-group
3) Controller - The Component which sends data to service method, using asynchronous function calls and makes REST request to backend Spring Controller.

Proxy.config.json - To enable CORS by sending requests from Angular to Spring Backend

Components: Calculator and Login

## Backend: Spring Boot

The backend is implemented in Spring Boot, It uses following objects:
1) Model - Simple Java POJO class (User, Calculator) to store data into PostgreSQL database via Hibernate ORM.
2) View - The requests recieved from Angular via CORS functionality
3) Controller - This component recives HTTP GET and PUT requests from Angular Service method
4) Repository - Executes Hibernate queries on the database to store calculations
5) Service - Business layer on top of Repository to perform CRUD operations to store calculations

## Database: PostgreSQL

The database is deployed on Amazon Relational Database Service (RDS) PostgreSQL instance, and connected via driver from Spring Boot.

## Deployment on AWS

The whole project is deployed on AWS using Elastic BeanStalk NodeJS environment and publically available at URL : http://54.81.15.205:4200/calapp
