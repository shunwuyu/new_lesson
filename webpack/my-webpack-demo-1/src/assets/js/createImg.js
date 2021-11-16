import dog1 from "../images/dog.jpg";
// import dog1 from "../images/animal-dog-1.png";
import style from "../styles/global.scss";

function createImg(root) {
  const img = new Image();
  img.src = dog1;
  img.classList.add(style.avatar); // 添加 avatar 类名
  root.append(img);
}

export default createImg;