student-deadline-tracker/
├─ backend/
│  ├─ config/
│  │  └─ db.js
│  ├─ controllers/
│  │  ├─ authController.js
│  │  └─ taskController.js
│  ├─ middleware/
│  │  └─ auth.js
│  ├─ models/
│  │  ├─ User.js
│  │  ├─ Task.js
│  │  └─ Notification.js
│  ├─ routes/
│  │  ├─ auth.js
│  │  └─ tasks.js
│  ├─ jobs/
│  │  └─ reminderJob.js
│  ├─ server.js
│  └─ package.json
└─ frontend/
   ├─ src/
   │  ├─ api/
   │  │  └─ api.js
   │  ├─ components/
   │  │  ├─ Login.jsx
   │  │  ├─ Register.jsx
   │  │  ├─ Dashboard.jsx
   │  │  ├─ TaskForm.jsx
   │  │  ├─ TaskList.jsx
   │  │  ├─ KanbanBoard.jsx
   │  │  └─ CalendarView.jsx
   │  ├─ context/
   │  │  └─ AuthContext.jsx
   │  ├─ App.js
   │  └─ index.js
   └─ package.json
