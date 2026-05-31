# 🎓 Full Stack School Management System (MERN Stack)

A full-stack **School Management System Dashboard** built using the MERN stack (**MongoDB, Express.js, React.js, Node.js**).  
This project is designed to manage **students, teachers, schedules, and transportation modules** with a modern and responsive dashboard UI.

---

## 🔗 Live Demo

👉 https://full-stack-school-management-system-mern-nkjgheurf.vercel.app/

---

## 📁 GitHub Repository

👉 https://github.com/Anuj-789/Full-Stack-School-Management-System-Mern-.git

---

## 🧠 Project Overview

This system simulates a real-world **school ERP/dashboard system**.  
It uses a **separated backend (MVC pattern)** and a **React-based frontend dashboard**.

### Key Highlights:
- Full CRUD operations for Students & Teachers
- Modular dashboard UI
- REST API integration
- Clean MVC backend structure
- Static modules for expansion (Bus & Schedule)

---

## ✨ Features

### 👨‍🎓 Student Management (Full CRUD)
- Add students
- View student list
- Update student data
- Delete student
- Search by roll number
- Real-time student count

### 👨‍🏫 Teacher Management (Full CRUD)
- Add teachers
- View teacher list
- Search by Teacher ID
- Update teacher data
- Delete teacher
- Teacher count dashboard

### 🚌 Bus Module (Frontend UI)
- Bus list display
- Driver details
- Route management
- Seat capacity
- Status (Active / Maintenance / Inactive)

⚠️ Static UI (not connected to backend)

### 📅 Schedule Module (Frontend UI)
- Class-wise timetable (Class 5–10)
- Day-wise schedule system
- Subject & teacher mapping
- School timing visualization (9 AM – 3 PM)

⚠️ Static frontend module

### 📊 Dashboard System
- Sidebar navigation
- Dynamic page rendering (React state)
- Welcome screen
- Modular UI structure

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

---

## 📁 Project Structure

---

### 🔹 Backend Structure (Crud-Backend-Mern)

```
Backend/
│
├── config/
│   └── databaseconnection.js
│
├── controller/
│   ├── studentcontroller/
│   │   ├── addstudentdata.js
│   │   ├── deletestudentdatabyrollno.js
│   │   ├── getstudentdata.js
│   │   ├── getstudentdatabyrollno.js
│   │   └── updatestudentdata.js
│   │
│   └── teachercontroller/
│       ├── addteacher.js
│       ├── deleteteacher.js
│       ├── getteacherdata.js
│       ├── getteacherdatabyid.js
│       └── updateteacher.js
│
├── model/
│   ├── studentschema.js
│   └── teacherschema.js
│
├── routes/
│   ├── studentroutes.js
│   └── teacherroutes.js
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env
└── rough.js
```

---

### 🔹 Frontend Structure

```
frontend/
│
├── public/
├── src/
│
│   ├── assets/
│
│   ├── pages/
│   │
│   │   ├── Dashboard.jsx
│   │
│   │   ├── Students/
│   │   │   ├── Student.jsx
│   │   │   ├── AddStudent.jsx
│   │   │   ├── ViewStudent.jsx
│   │   │   └── EditStudent.jsx
│   │
│   │   ├── Teachers/
│   │   │   ├── Teacher.jsx
│   │   │   ├── AddTeacher.jsx
│   │   │   ├── ShowTeacher.jsx
│   │   │   ├── EditTeacher.jsx
│   │   │   └── GetTeacherList.jsx
│   │
│   │   ├── Buses/
│   │   │   └── Buses.jsx
│   │
│   │   ├── Schedules/
│   │   │   └── Schedule.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Anuj-789/Full-Stack-School-Management-System-Mern-.git
cd Full-Stack-School-Management-System-Mern-
```

---

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Run backend:
```bash
npm run dev
```

---

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Endpoints

### 👨‍🎓 Student APIs
- POST `/students/addstudent`
- GET `/students/getstudentdata`
- GET `/students/getstudent/rollno/:rollno`
- PUT `/students/updatestudent/rollno/:rollno`
- DELETE `/students/deletestudent/rollno/:rollno`

---

### 👨‍🏫 Teacher APIs
- POST `/teachers/addteacher`
- GET `/teachers/getteacherdata`
- GET `/teachers/getteacherdata/:teacherId`
- PUT `/teachers/updateteacher/:teacherId`
- DELETE `/teachers/deleteteacher/:teacherId`

---

## 🚀 What I Learned

- Full Stack MERN development
- REST API design & integration
- MongoDB schema design
- React dashboard architecture
- State management in React
- CRUD operations (frontend + backend)

---

## 🚀 Future Improvements

- Authentication system (JWT)
- Role-based access control
- Connect Bus & Schedule modules to backend
- Attendance system
- Fee management system
- Better UI/UX improvements

---

### 🔗 Connect with Me

[![💼 LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/anuj-k-549184327)
&nbsp;&nbsp;
[![🐙 GitHub](https://img.shields.io/badge/-GitHub-gray?style=for-the-badge&logo=github)](https://github.com/Anuj-789)
&nbsp;&nbsp;
[![✉️ Email](https://img.shields.io/badge/-Email-red?style=for-the-badge&logo=gmail)](mailto:anuj437795@example.com)

### 🌟Thanks for checking out this project! Hope you enjoyed exploring it 😊
