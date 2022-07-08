import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

//instantiate router with express router method
const router = express.Router();

router.get('/', getPosts );
router.post('/', createPost );

export default router;