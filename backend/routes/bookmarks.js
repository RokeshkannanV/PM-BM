import express from 'express';
import {
  createBookmark,
  getBookmarks,
  getBookmarkById,
  updateBookmark,
  deleteBookmark
} from '../controllers/bookmarkController.js';

const router = express.Router();

router.post('/', createBookmark);
router.get('/', getBookmarks);
router.get('/:id', getBookmarkById);
router.put('/:id', updateBookmark);
router.delete('/:id', deleteBookmark);

export default router;
