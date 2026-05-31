# 🎓 School Management System (MERN Stack)

A full-stack **School Management System Dashboard** built using the MERN stack (**MongoDB, Express.js, React.js, Node.js**).  
This project provides a centralized platform to manage students, teachers, schedules, and transportation in a school environment with a modern UI dashboard.

---

## 🚀 Live Demo

🌐 https://full-stack-school-management-system-mern-nkjgheurf.vercel.app/

---

## ✨ Features

### 👨‍🎓 Student Management (Full CRUD)
- Add new students
- View student details
- Update student information
- Delete students
- Search/view by roll number
- Student count dashboard

### 👨‍🏫 Teacher Management (Full CRUD)
- Add new teachers
- View teacher list
- Search teacher by ID
- Update teacher details
- Delete teacher
- Teacher count dashboard

### 🚌 Bus Management (Frontend Module)
- Bus listing UI
- Driver details
- Route management
- Seat capacity tracking
- Status indicators (Active / Maintenance / Inactive)

> ⚠️ This module currently uses static data (not connected to backend).

### 📅 Schedule / Timetable Module
- Class-wise timetable (Class 5–10)
- Day-wise schedule view
- Subject & teacher mapping
- School timing visualization (9 AM – 3 PM)

> ⚠️ This module is frontend-based (static data).

### 📊 Dashboard
- Sidebar navigation system
- Dynamic component rendering using React state
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

```
backend/
├── config/
├── controller/
│   ├── studentcontroller/
│   └── teachercontroller/
├── model/
├── routes/
├── index.js

frontend/
├── pages/
│   ├── Students/
│   ├── Teachers/
│   ├── Buses/
│   ├── Schedules/
│   └── Dashboard.jsx
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/school-management-system.git
cd school-management-system
```

---

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Run backend server:
```bash
npm run dev
```

---

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Endpoints

### 👨‍🎓 Student Routes
- POST `/students/addstudent`
- GET `/students/getstudentdata`
- GET `/students/getstudent/rollno/:rollno`
- PUT `/students/updatestudent/rollno/:rollno`
- DELETE `/students/deletestudent/rollno/:rollno`

### 👨‍🏫 Teacher Routes
- POST `/teachers/addteacher`
- GET `/teachers/getteacherdata`
- GET `/teachers/getteacherdata/:teacherId`
- PUT `/teachers/updateteacher/:teacherId`
- DELETE `/teachers/deleteteacher/:teacherId`

---

## 🧠 What I Learned

- Building full-stack MERN applications
- REST API development with Express.js
- MongoDB schema design using Mongoose
- React state management for dashboard UI
- Component-based architecture
- CRUD operations integration (frontend + backend)

---

## 🚀 Future Improvements

- Authentication (Login/Signup system)
- Role-based access (Admin / Teacher / Student)
- Connect Bus & Schedule modules to backend
- Attendance system
- Fee management system
- Improved UI/UX dashboard

---

## 👨‍💻 Author

**Anuj Gupta**

- GitHub: https://github.com/your-username
- Project Live: https://full-stack-school-management-system-mern-nkjgheurf.vercel.app/

---

## ⭐ Support

If you like this project, feel free to ⭐ star the repository.
