import express from 'express';
import cors from 'cors';
import noteRoutes from './routes/notes.js';
import bookmarkRoutes from './routes/bookmarks.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/notes', noteRoutes);
app.use('/api/bookmarks', bookmarkRoutes);

export default app;
