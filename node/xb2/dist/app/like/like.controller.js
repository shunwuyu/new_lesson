"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeUserLikePost = void 0;
const like_service_1 = require("./like.service");
const storeUserLikePost = async (request, response, next) => {
    const { postId } = request.params;
    const { id: userId } = request.user;
    try {
        const data = await like_service_1.createUserLikePost(userId, parseInt(postId, 10));
        response.status(201).send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.storeUserLikePost = storeUserLikePost;
//# sourceMappingURL=like.controller.js.map