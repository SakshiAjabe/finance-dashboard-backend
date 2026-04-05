# 💰 Finance Dashboard Backend

## 📌 Overview

This project is a backend system for a Finance Dashboard that manages users, financial records, and provides analytical insights.
It demonstrates clean backend architecture, role-based access control, and secure authentication.

---

## 🚀 Key Features

* 🔐 JWT-based Authentication (Login/Register)
* 👥 Role-Based Access Control (Admin, Analyst, Viewer)
* 💸 Financial Records Management (Create, Read)
* 📊 Dashboard Analytics (Income, Expense, Net Balance)
* 🔍 Filtering Records (by type, category, date)
* ⚠️ Error Handling & Input Validation
* 🧱 Modular & Scalable Code Structure

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Mongoose ODM)
* **Authentication:** JSON Web Token (JWT)
* **Security:** bcrypt.js

---

## 📂 Project Structure

```
backend/
│
├── config/          # Database connection
├── controllers/     # Business logic
├── middleware/      # Auth & role-based access
├── models/          # Mongoose schemas
├── routes/          # API routes
├── utils/           # Helper functions (JWT)
│
├── app.js
├── server.js
└── .env
```

---

## 🔐 Roles & Permissions

| Role    | Access                                    |
| ------- | ----------------------------------------- |
| Admin   | Full access (create records, manage data) |
| Analyst | View records + dashboard analytics        |
| Viewer  | View records only                         |

---

## 📡 API Endpoints

### 🔑 Authentication

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user

### 💸 Records

* `POST /api/records` → Create record (Admin only)
* `GET /api/records` → Get records

### 📊 Dashboard

* `GET /api/dashboard/summary` → Get income, expense, balance

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/finance-dashboard-backend.git
cd finance-dashboard-backend/backend
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Create `.env` File

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Server

```
npx nodemon server.js
```

---

## 🧪 Testing APIs

Use tools like:

* Postman
* Thunder Client

Example:

* Register → Get JWT token
* Use token in Authorization header
* Test protected routes

---

## 🧠 Design Decisions

* Used **JWT** for stateless authentication
* Implemented **middleware-based role authorization**
* Used **MongoDB aggregation** for dashboard analytics
* Followed **MVC architecture** for scalability

---


## 🔮 Future Enhancements

* Pagination & advanced filtering
* API documentation (Swagger)
* Unit & integration testing
* Role management UI

---

## 👩‍💻 Author

**Sakshi Ajabe**
B.E. Artificial Intelligence & Data Science
Dr. D. Y. Patil Institute of Technology, Pune

---
