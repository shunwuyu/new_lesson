// Bad 修改了参数
function updateUser(user) {
  user.age = 10;
}

// Good 返回新的对象
function updateUser(user) {
  return {
    ...user,
    age: 10,
  };
}