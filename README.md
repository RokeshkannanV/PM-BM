Notes & Bookmarks Manager

A full-stack web app to manage personal notes and bookmarks — clean, responsive, and productivity-focused.

Tech Stack

- Frontend: Next.js + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB (Mongoose)
- Deployment: Vercel (Frontend), Render (Backend)

Features

Notes
- Create, update, delete notes
- Add tags for better filtering
- Search by text or tags

Bookmarks
- Save bookmarks with URL, title, and description
- Auto-fetch title from URL (optional)
- Filter by tags or search text

Extras
- Responsive UI (mobile + desktop)
- Modular code structure
- Clean error handling
- Elegant UI with TailwindCSS

Folder Structure

root/
│
├── backend/ # Express API
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ └── app.js / server.js
│
├── frontend/ # Next.js + Tailwind
│ ├── pages/
│ │ ├── notes.js
│ │ └── bookmarks.js
│ ├── components/
│ └── tailwind.config.js

API Endpoints

Notes

  Method     Endpoint                  Description         
|--------|------------------------|---------------------|
| POST   | `/api/notes`           | Create a note       
| GET    | `/api/notes`           | Get all notes       
| GET    | `/api/notes/:id`       | Get note by ID      
| PUT    | `/api/notes/:id`       | Update note         
| DELETE | `/api/notes/:id`       | Delete note         

Bookmarks

| Method | Endpoint                 | Description              |
|--------|--------------------------|--------------------------|
| POST   | `/api/bookmarks`         | Create a bookmark        |
| GET    | `/api/bookmarks`         | Get all bookmarks        |
| GET    | `/api/bookmarks/:id`     | Get bookmark by ID       |
| PUT    | `/api/bookmarks/:id`     | Update bookmark          |
| DELETE | `/api/bookmarks/:id`     | Delete bookmark          |

Credits
Dedication by Rokeshkannan Velrajan
Volunteer and Student @ Agaram Foundation