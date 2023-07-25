# Piiquante - Spicy Sauces Web Application

![16275605596354_PiiquanteLogo](https://github.com/andrewjumperdev/API-Project-Piiquante/assets/53949770/c2715322-4df7-4eba-9270-63b9e49c9659)

Piiquante is a web application dedicated to creating spicy sauces with secret recipes. The goal is to leverage its success and generate more buzz by allowing users to add their favorite sauces and like or dislike sauces added by others.

## Table of Contents

- [Introduction](#piiquante---spicy-sauces-web-application)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Data Models](#data-models)
- [Installation](#installation)
- [Usage](#usage)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (signup and login)
- View all sauces and individual sauce details
- Add new sauces with images
- Update existing sauces
- Like and dislike sauces
- Prevent unauthorized access to modify sauces
- Secure password hashing

## API Endpoints

- POST `/api/auth/signup` - Create a new user account
- POST `/api/auth/login` - User login and token generation
- GET `/api/sauces` - Retrieve all sauces
- GET `/api/sauces/:id` - Retrieve a single sauce by ID
- POST `/api/sauces` - Add a new sauce
- PUT `/api/sauces/:id` - Update an existing sauce by ID
- DELETE `/api/sauces/:id` - Delete a sauce by ID
- POST `/api/sauces/:id/like` - Like or dislike a sauce

## Data Models

### Sauce

- `userId`: String - Unique MongoDB identifier of the user who created the sauce
- `name`: String - Name of the sauce
- `manufacturer`: String - Sauce manufacturer
- `description`: String - Sauce description
- `mainPepper`: String - The main spicy ingredient of the sauce
- `imageUrl`: String - URL of the image uploaded by the user
- `heat`: Number - Rating of the sauce on a scale of 1 to 10
- `likes`: Number - Number of users who liked the sauce
- `dislikes`: Number - Number of users who disliked the sauce
- `usersLiked`: [ "String <userId>" ] - Array of user IDs who liked the sauce
- `usersDisliked`: [ "String <userId>" ] - Array of user IDs who disliked the sauce

### User

- `email`: String - User's email address [unique]
- `password`: String - Hashed user password

## Installation

1. Clone the repository
2. Open a terminal (Linux/Mac) or a command prompt/PowerShell (Windows)
3. Run `npm install` in the project directory

## Usage

1. Start the back-end server by running `npm start`
2. The back-end will be accessible at http://localhost:3000

## Security

- Passwords are securely hashed.
- Authentication is enforced on all required sauce routes.
- Email addresses in the database are unique, and a proper Mongoose plugin is used to ensure uniqueness and report errors.
- MongoDB database security does not prevent the application from running on users' machines.
- A Mongoose plugin ensures proper error handling from the database.
- The application uses the latest software versions with up-to-date security patches.
- The contents of the `images` folder are not uploaded to GitHub.

## Contributing

Contributions are welcome! If you find any issues or have improvements to suggest, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
