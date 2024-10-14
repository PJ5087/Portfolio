# Portfolio Website

This is a personal portfolio website built using **React.js** for the frontend, with a **Node.js** and **Express** backend to handle form submissions. The contact form is connected to a **MySQL** database to store the user-submitted data.

## Features

- **Responsive Design**: Fully responsive layout that looks great on all screen sizes.
- **Portfolio Showcase**: Displays work, projects, and professional information.
- **Contact Form**: Allows visitors to send messages directly from the website, which are stored in a MySQL database.
- **Backend**: Implemented using Node.js and Express for handling form submissions and data processing.
- **MySQL Integration**: Stores contact form submissions in a MySQL database.

## Technologies Used

### Frontend:
- React.js
- HTML5
- CSS3 (with custom styles and responsive design)
- JavaScript (ES6+)

### Backend:
- Node.js
- Express.js
- MySQL (for storing contact form submissions)

## Setup Instructions

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://www.mysql.com/)

### Installation

1. Clone this repository:

# Install backend dependencies
npm install

# Navigate to frontend folder and install frontend dependencies
cd client
npm install

# MySql setup
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'your_database_name',
});

module.exports = connection;

# To run the application
npm run dev

# In a separate terminal, navigate to the client folder and start the frontend:
npm start
