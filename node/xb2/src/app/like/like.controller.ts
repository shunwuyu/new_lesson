import {Request, Response, NextFunction } from 'express'

import {createUserLikePost} from './like.service';

export const storeUserLikePost = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { postId} = request.params;
  const {id:userId} = request.user;
  
  try {
    const data = await createUserLikePost(userId, parseInt(postId, 10));
    //做出响应
    response.status(201).send(data)
  } catch(error){
    next(error)
  }
}