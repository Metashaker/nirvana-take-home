# nirvana-take-home

## Basic structure
This project uses a monorepo structure, comprised of two main folders:
1. frontend
2. backend

## Backend

#### Instructions
First run the backend, since time didn't allow to add default por in FE or BE.
To run the backend simply run `yarn && yarn start` in the backend root folder, this should install all packages and start the development server.

#### API specs
I decided to build a REST API using express, with one suffixed route per model (therapists, therapistSession, payment) with it's corresponding GET and POST endpoints, except the therapist, since it was not required.

#### Data Layer
The fileSystem (async way) is being used as a data store, leveraging arrays of JSON objects for storing therapists, therapistSessions, and payments. This way we can retrieve and push new items into the array everytime a payment or a therapistSession is created.


## Frontend

To run the frontend simply run `yarn && yarn start` in the frontend root folder, this should install all packages and start the development server.

It has 3 routes:
1. index route `/`
2. new session `/new-session`, used for creating new sessions and payments
3. sessions `/sessions`, used to list all sessions sorted by date

### With more time I would had
1. Added eslint, babel, husky, all packages that guarantee quality code in the delivery pipeline



