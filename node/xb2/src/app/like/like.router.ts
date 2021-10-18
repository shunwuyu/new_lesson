import express from 'express';
import * as likeController from './like.controller';
import { authGard } from '../auth/auth.middleware';
const router = express.Router();

router.post('/posts/:postId/like', authGard, likeController.storeUserLikePost);

export default router;