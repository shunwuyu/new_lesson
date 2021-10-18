import {connection} from '../app/database/mysql';

export const createUserLikePost = async (
  userId: number,
  postId: number
) => {
  const statement = `
    INSERT INTO
      user_like_post(userId, postId)
    VALUES(?,?)
  `;
  // 执行查询
  const [data] = await connection.promise().query(statement, [userId, postId]);
  return data;
}