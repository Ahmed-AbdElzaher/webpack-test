import "./style.css";
const element = document.createElement("header");

element.innerHTML = "this is webpack demo";
element.classList.add('info')
document.body.appendChild(element);
import photo from '../../assets/image.png'
const img = document.createElement("img");
img.src=photo;
img.style.width="50px"
img.style.height="50px"
element.appendChild(img);

import photo1 from "../../assets/cover.jpg"
const img1 = document.createElement("img");
img1.src=photo1;
img1.style.width="150px"
img1.style.height="150px"
document.body.appendChild(img1);
// nooo




