import express from 'express';

import { 
    getPost,
    getPostsBySearch,
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
    commentPost
} from '../controllers/posts';
import auth from '../middleware/auth';

const router = express.Router();

// route for search
router.get('/search', getPostsBySearch);

// route to get single post
router.get('/:id', getPost);

// CRUD routes for posts
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

// Routes for like button
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', commentPost);


export default router;