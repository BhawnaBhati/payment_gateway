## Pre-requisites

- PostgreSQL and Node should be installed on machinewhere this application is being deployed

## Setting up database

- update database configuration parameters in .env file
- execute file server/database/schema.sql in database which is mentioned in connection parameters

## Starting API server

- review and update parameters in .env

cd server  
npm i  
npm start  

## Starting Client application

- review and update parameters in .env

cd client  
npm i  
npm start  

## Running unit test cases

cd client  
npm test  

## Other Details

- Server is running on port 4000 (PORT is configrable via .env)

## Items where some changes can still be made

- Payment gateway through which a payment was made in not being stored in DB
- Paypal payment gateway fetches a new access token for each payment request - this token can be cached and reused until expired
