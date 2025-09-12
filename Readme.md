# 🔐 To-Do App Backend

Backend service for the **To-Do Application**.  
This backend provides **authentication, user management, and task handling APIs** using **MySQL** and **MongoDB**, secured with **JWT** and **bcrypt password hashing**.  

It follows the **MVC architecture** for scalability and maintainability.  

---

## 🚀 Features

- 👤 **User Authentication**
  - Register new users
  - Login with JWT token generation
  - Passwords stored securely with **bcrypt hashing**
- 📂 **Task Management**
  - Create, Read, Update, Delete (CRUD) tasks
  - Tasks stored in **MongoDB**
- 🗄️ **User Data**
  - User information stored in **MySQL (Cloud-hosted)**
- 🔑 **Secure APIs**
  - Authentication & authorization via **JWT**
- 🏗️ **MVC Architecture**
  - Separation of **Models, Controllers, Routes, Config**

---

## 🛠️ Tech Stack

- **Backend Framework:** Node.js + Express.js  
- **Database 1 (Users):** MySQL (Cloud)  
- **Database 2 (Tasks):** MongoDB (Cloud)  
- **Authentication:** JWT (JSON Web Token)  
- **Password Security:** bcrypt  
- **Architecture:** MVC  

---

## 📂 Project Structure

```

to-do-app-backend/
│── config/           # DB connection setup
│── controllers/      # Request handling logic
│── models/           # Database models (MySQL + MongoDB)
│── routes/           # API routes
│── middlewares/      # Auth middleware (JWT verification)
│── utils/            # Helper functions (e.g., bcrypt utils)
│── .env              # Environment variables (not committed to GitHub)
│── app.js            # Express app entry point
│── package.json      # Dependencies and scripts
│── README.md         # Documentation

````

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following variables:  

```env
# Server
PORT=5000

# MySQL (User Data)
MYSQL_HOST=your-cloud-mysql-host
MYSQL_USER=your-mysql-username
MYSQL_PASSWORD=your-mysql-password
MYSQL_NAME=your-database-name

# MongoDB (Task Data)
MONGODB_URL=your-mongodb-cloud-url

# JWT
JWT_SECRET=your-secret-key
````

---

## 📦 Installation & Setup

Follow these steps to run the backend locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/To-Do-App-Backend.git
cd To-Do-App-Backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

* Create a `.env` file in the project root.
* Copy the variables listed above and replace them with your **Cloud MySQL** and **Cloud MongoDB** credentials.

### 4. Setup MySQL Database

Run the following SQL script to create a **users table**:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Start the server

```bash
npm start
```

Your backend should now run on:
👉 `http://localhost:5000`

### 6. Test the APIs

Use [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to test endpoints:

* Register → `POST /api/auth/register`
* Login → `POST /api/auth/login`
* CRUD tasks → `GET/POST/PUT/DELETE /api/tasks` (JWT required)

---

## 🔑 API Endpoints

### 👤 Authentication (MySQL)

* **POST** `/api/auth/register` → Register a new user (password hashed with bcrypt)
* **POST** `/api/auth/login` → Login & receive JWT

### 📝 Tasks (MongoDB)

* **GET** `/api/tasks` → Get all tasks (JWT required)
* **POST** `/api/tasks` → Create a new task
* **PUT** `/api/tasks/:id` → Update a task
* **DELETE** `/api/tasks/:id` → Delete a task

---
