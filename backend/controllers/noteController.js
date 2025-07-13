import Note from '../models/Note.js';

export const createNote = async (req, res) => {
  const { title, content, tags } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  try {
    const note = await Note.create({ title, content, tags });
    // console.log("✅ Note saved to DB:", newNote);
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getNotes = async (req, res) => {
  const { q, tags } = req.query;

  const query = {};
  if (q) query.$or = [
    { title: new RegExp(q, 'i') },
    { content: new RegExp(q, 'i') }
  ];
  if (tags) query.tags = { $in: tags.split(',') };

  try {
    const notes = await Note.find(query);
    res.json(notes);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: 'Not found' });
    res.json(note);
  } catch {
    res.status(400).json({ error: 'Invalid ID' });
  }
};

export const updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!note) return res.status(404).json({ error: 'Not found' });
    res.json(note);
  } catch {
    res.status(400).json({ error: 'Invalid ID' });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch {
    res.status(400).json({ error: 'Invalid ID' });
  }
};
