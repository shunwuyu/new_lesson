https://juejin.cn/post/6844903917835436045

seq 10 20 >> spring
cat spring
cat -n spring
cat > index.html <<EOF
<html>
    <head><title></title></head>
    <body></body>
</html>
EOF

seq 10000000 > spring
du -h spring
less spring     空格向下滚屏  b 向上滚屏翻页  q 退出

stat spring
head -n 3 spring
tail -n 3 spring

stat spring | tail -n 3 | head -n 1
stat spring | grep Modify
stat spring | grep --color Modify

git add feature-1 ------- feature-7
git reset --hard f1
git add feature-7
git reflog 可以看到被删除的commitid,我们就可以买后悔药,恢复到被删除的那个版本
git reset --hard f6
git cherry-pick b0d9abb  将指定的提交用于其他提交