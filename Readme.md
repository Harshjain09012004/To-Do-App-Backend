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
  - Separation of **Models, Routes, Config**

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
│── models/           # Database models (MySQL + MongoDB)
│── routes/           # API routes
│── middlewares/      # Auth middleware (JWT verification)
│── .env              # Environment variables (not committed to GitHub)
│── index.js            # Express app entry point
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


### 4. Start the server

```bash
npm run dev
```

Your backend should now run on:
👉 `http://localhost:5000`

### 5. Test the APIs

Use [Postman](https://www.postman.com/):

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
* **POST** `/api/tasks` → Create a new task (JWT required)
* **PUT** `/api/tasks/:id` → Update a task (JWT required)
* **DELETE** `/api/tasks/:id` → Delete a task (JWT required)

---
