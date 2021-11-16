- 标准的CSS盒子模型及其和低版本的IE盒子模型的区别？

标准（W3C）盒子模型：width = 内容宽度（content） + border + padding + margin
低版本IE盒子模型： width = 内容宽度（content + border + padding）+ margin

- CSS选择符有哪些？哪些属性可以继承？
  id选择器（#content），类选择器（.content）, 标签选择器（div, p, span等）, 相邻选择器（h1+p）, 子选择器（ul>li）, 后代选择器（li a）， 通配符选择器（*）, 属性选择器（a[rel = "external"]）， 伪类选择器（a:hover, li:nth-child）

  font-size, font-family, color, ul, li, dl, dd, dt;

  border, padding, margin, width, height