# Real-Time Messenger App
A Secure, Real-Time Messaging Solution built with the MERN Stack.

---
![](https://img.shields.io/badge/-Node.js-brightgreen?style=for-the-badge)
![](https://img.shields.io/badge/-React-blue?style=for-the-badge)
![](https://img.shields.io/badge/-MongoDB-brightgreen?style=for-the-badge)
![](https://img.shields.io/badge/-Socket.io-green?style=for-the-badge)
![](https://img.shields.io/badge/-JWT-orange?style=for-the-badge)

This application is a full-stack messaging platform designed for high performance
and secure communication. Built with a focus on simplicity and modularity, it
leverages modern web technologies to provide a seamless user experience.

## Features
- **Real-Time Communication:** Instant message delivery using Socket.io.
- **User Presence:** Real-time tracking of online and offline users.
- **Secure Authentication:** JWT-based auth with HTTP-only cookies and bcrypt
password encryption.
- **Responsive Design:** Fully optimized for desktop and mobile browsers using
React.
- **Database Integration:** Persistent chat history and user profiles managed via
MongoDB.

## Tech Stack
| Layer    | Technologies |
| -------- | ------------ |
| Frontend  | React.js, Tailwind CSS |
| Backend   | Node.js, Express.js |
| Database  | MongoDB (Mongoose) |
| Real-Time | Socket.io |
| Security  | JWT, Bcryptjs, HTTP-only Cookies |

## Installation & Setup
**Prerequisites**
- Node.js installed
- MongoDB database (Local or Atlas)

**Steps**
1. Clone the repository
  `git clone https://github.com/shvanshusonwani/messenger.git`
2. Install Backend Dependencies
  npm install
3. Install Frontend Dependencies
  cd client
  npm install
4. Environment Variables
  Create a .env file in the root directory:
  - PORT=8000
  - MONGO_URI=your_mongodb_connection_string
  - JWT_SECRET=your_secret_key
  - CLIENT_URL=frontend_url

## Development Philosophy
This project adheres to the **Simplicity First** rule. By starting with a robust Minimum
Viable Product (MVP), the architecture remains clean and maintainable, allowing for
features like confidence-based AI escalation or complex file sharing to be added
seamlessly in the future.
