# LikeMicroservice
Component microservice for a blogging application as part of a group assignment on Microservices.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for handling HTTP requests.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB.
- **JWT (JSON Web Token)**: Used for secure user authentication.


## Setup Instructions

### Prerequisites

- **Node.js**: Ensure Node.js is installed. [Download here](https://nodejs.org/)
- **MongoDB**: Ensure MongoDB is installed and running locally or use a cloud service (e.g., MongoDB Atlas).

### Setup


1. Install dependencies:

```bash
    npm install
```

2. Create a .env file in the server directory with the following variables:

```bash
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret
```

3. Start the server:

```bash
    npm run start
```

### Running the Application

Service will run on http://localhost:8000.

