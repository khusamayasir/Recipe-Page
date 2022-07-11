let p = document.getElementsByTagName("p");
p[1].style.color = "orange";
p[0].style.color = "#BDBDBD";
p[2].style.color = "#BDBDBD";
p[3].style.color = "#BDBDBD";
p[4].style.color = "#BDBDBD";
p[7].style.color = "#BDBDBD";
p[7].style.marginBlockStart = "50px";
p[7].style.marginBlockEnd = "60px";
p[0].style.fontSize = "12px";
p[2].style.fontSize = "12px";
p[3].style.fontSize = "12px";
p[4].style.fontSize = "12px";

let dining = document.querySelector(".yield");
dining.classList.add("flex");

let prep = document.querySelector(".prep-time");
prep.classList.add("flex");

let cook = document.querySelector(".cook-time");
cook.classList.add("flex");

let total = document.querySelector(".total-time");
total.classList.add("flex");

let b = document.getElementsByTagName("b");
b[0].className = "font";