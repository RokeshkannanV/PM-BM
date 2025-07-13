import Bookmark from '../models/Bookmark.js';
import validator from 'validator';
import { fetchPageTitle } from '../utils/fetchTitle.js';

export const createBookmark = async (req, res) => {
  let { url, title, description, tags } = req.body;

  if (!url || !validator.isURL(url)) {
    return res.status(400).json({ error: 'Valid URL is required' });
  }

  if (!title || title.trim() === '') {
    title = await fetchPageTitle(url);
  }

  try {
    const bookmark = await Bookmark.create({ url, title, description, tags });
    res.status(201).json(bookmark);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getBookmarks = async (req, res) => {
  const { q, tags } = req.query;

  const query = {};
  if (q) query.$or = [
    { title: new RegExp(q, 'i') },
    { description: new RegExp(q, 'i') }
  ];
  if (tags) query.tags = { $in: tags.split(',') };

  try {
    const bookmarks = await Bookmark.find(query);
    res.json(bookmarks);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getBookmarkById = async (req, res) => {
  try {
    const bookmark = await Bookmark.findById(req.params.id);
    if (!bookmark) return res.status(404).json({ error: 'Not found' });
    res.json(bookmark);
  } catch {
    res.status(400).json({ error: 'Invalid ID' });
  }
};

export const updateBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bookmark) return res.status(404).json({ error: 'Not found' });
    res.json(bookmark);
  } catch {
    res.status(400).json({ error: 'Invalid ID' });
  }
};

export const deleteBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findByIdAndDelete(req.params.id);
    if (!bookmark) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch {
    res.status(400).json({ error: 'Invalid ID' });
  }
};
