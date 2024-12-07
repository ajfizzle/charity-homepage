# charity-homepage

## Charity Organization - MERN Stack Donation App

## Table of Contents

- [About](#About)
- [Technologies](#Technologies)
- [Features](#Features)
- [File Structure](#FileStructure)
- [Environment Variables](#EnvironmentVariables)
- [Running the Project](#RunningtheProject)
- [Contributing](#Contributing)
- [License](#License)

## About

This project is a Charity Organization Donation App built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to make donations and stores the donation data in a MongoDB database. The app provides a simple form for users to enter their details and the amount they wish to donate.

## Technologies

- MongoDB: A NoSQL database for storing donation data.
- Express.js: Backend framework for handling routes and requests.
- React.js: Frontend library for building user interfaces.
- Node.js: Runtime environment for executing JavaScript on the server.

## Features

- Donation form with validation.
- Real-time form submission feedback (success or error message).
- Data persistence using MongoDB.
- RESTful API endpoints to handle donations.
- Modular, scalable file structure.

## File Structure

/charity-organization
│
├── /backend
│ ├── /config
│ │ └── db.js # Database connection
│ ├── /controllers
│ │ └── donationController.js # Donation logic
│ ├── /models
│ │ └── Donation.js # Donation model schema
│ ├── /routes
│ │ └── donationRoutes.js # API routes for donations
│ ├── /middleware
│ │ └── errorHandler.js # Error handling middleware
│ ├── server.js # Main backend file
│ └── package.json # Backend dependencies
│
├── /frontend
│ ├── /src
│ │ ├── /components
│ │ │ └── DonationForm.js # Donation form component
│ │ ├── /pages
│ │ │ └── HomePage.js # Homepage to show donation form
│ │ ├── /utils
│ │ │ └── api.js # API for calling donation routes
│ │ ├── App.js # Main App file
│ │ └── index.js # Entry point for React
│ ├── package.json # Frontend dependencies
│
├── .env # Environment variables
└── README.md # Project documentation

## Installation

# Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud-based, such as MongoDB Atlas)

## Backend Setup

1. Navigate to the /backend folder:
   - cd backend
2. Install backend dependencies:
   - npm install

## Frontend Setup

1. Navigate to the /frontend folder:
   - cd frontend
2. Install frontend dependencies:
   - npm install

## Environment Variables

You need to create a .env file in the /backend directory to store sensitive information like the MongoDB connection URI.

Example .env file:

- MONGO_URI=your_mongo_database_uri
- PORT=5000

## Running the Project

# Running Backend

1. Navigate to the /backend folder and start the server:

- cd backend
- npm start
  The backend server will run on http://localhost:5000.

# Running Frontend

1. Navigate to the /frontend folder and start the React app:
   - cd frontend
   - npm start
     The frontend app will run on http://localhost:3000.

## API Endpoints

# POST /api/donations

- Description: Creates a new donation.
  Request Body:

{
"name": "John Doe",
"email": "johndoe@example.com",
"amount": 100
}
Response:
{
"message": "Donation received successfully",
"data": {
"\_id": "donationId",
"name": "John Doe",
"email": "johndoe@example.com",
"amount": 100,
"date": "2024-09-05T15:20:30.123Z"
}
}

GET /api/donations
Description: Retrieves all donations.

Response:
[
{
"_id": "donationId1",
"name": "John Doe",
"email": "johndoe@example.com",
"amount": 100,
"date": "2024-09-05T15:20:30.123Z"
},
{
"_id": "donationId2",
"name": "Jane Doe",
"email": "janedoe@example.com",
"amount": 50,
"date": "2024-09-05T16:35:12.456Z"
}
]

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

- Fork the repository.
- Create a feature branch (git checkout -b feature-branch).
- Commit your changes (git commit -m 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Open a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
