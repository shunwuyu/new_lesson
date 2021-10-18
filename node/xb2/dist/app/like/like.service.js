"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserLikePost = void 0;
const mysql_1 = require("../app/database/mysql");
const createUserLikePost = async (userId, postId) => {
    const statement = `
    INSERT INTO
      user_like_post(userId, postId)
    VALUES(?,?)
  `;
    const [data] = await mysql_1.connection.promise().query(statement, [userId, postId]);
    return data;
};
exports.createUserLikePost = createUserLikePost;
//# sourceMappingURL=like.service.js.map