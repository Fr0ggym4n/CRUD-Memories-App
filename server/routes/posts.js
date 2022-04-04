import express from 'express';

import { 
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
} from '../controllers/posts.js';

const router = express.Router();

// CRUD routes for posts
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

// Routes for like button
router.patch('/:id/likePost', likePost);

export default router;