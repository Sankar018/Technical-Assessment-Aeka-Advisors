# Smart ToDo API

A RESTful backend application for task management built using Flask and MongoDB.
The API supports user authentication using JWT and allows authenticated users to perform CRUD operations on their personal tasks.

## 🚀 Features

User Signup & Login

JWT-based Authentication

Create, Read, Update, Delete (CRUD) tasks

Each user can access only their own tasks

NoSQL database using MongoDB

## 🛠️ Technology Stack

**Backend:** Python (Flask)

**Database:** MongoDB

**Authentication:** JWT (JSON Web Tokens)

**API Testing:** Postman

## 📂 Project Structure

smart-todo-api/
│
├── app.py
├── db.py
├── requirements.txt
├── Smart_ToDo_API.postman_collection.json
└── README.md

## 📌 API Endpoints

Authentication
Method	Endpoint	Description
POST	/signup	Register a new user
POST	/login	Login and receive JWT token
Tasks (JWT Required)
Method	Endpoint	Description
POST	/tasks	Create a new task
GET	/tasks	Retrieve all tasks for logged-in user
PUT	/tasks/{id}	Update an existing task
DELETE	/tasks/{id}	Delete a task

**🔐 Authentication Details**

JWT token is returned on successful login

Token must be sent in request headers for all task APIs

**Header format:**

**Authorization:** Bearer <JWT_TOKEN>

### ▶️ How to Run the Project Locally

### 1️⃣ Start MongoDB

Ensure MongoDB is running as a service on your system.

### 2️⃣ Install Dependencies
pip install -r requirements.txt

### 3️⃣ Run the Application
python app.py


**The server will start at:**

http://127.0.0.1:5000

## 🧪 API Testing

**A Postman collection is included in this repository:**

Smart_ToDo_API.postman_collection.json

How to use:

Open Postman

Click Import

Select the JSON file

Test all endpoints easily

## 🧠 Example Task Object
{
  "title": "Complete Task 2",
  "description": "Build Smart ToDo API",
  "completed": false
}

## ⚠️ Notes

MongoDB must be running before starting the server

JWT token is mandatory for task-related endpoints

This project is intended for educational and technical assessment purposes

## 👤 Author

Sankar Bhunia