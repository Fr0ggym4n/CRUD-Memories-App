import express from 'express';

import { 
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// CRUD routes for posts
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

// Routes for like button
router.patch('/:id/likePost', auth, likePost);


export default router;