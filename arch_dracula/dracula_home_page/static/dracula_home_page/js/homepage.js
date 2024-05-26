const img3 = document.querySelector(".img_clear_table3");
const img2 = document.querySelector(".img_clear_table2");
img3.addEventListener("mouseover", overimg3);
img3.addEventListener("mouseout", notovr);
img2.addEventListener("mouseover", overimg2);
img2.addEventListener("mouseout", notovr2);
function overimg3(event) {
  console.log("Курсор наведен на элемент:", event.currentTarget);
  getDiv = document.querySelectorAll(".post_header_1 p");
  getDiv.forEach(function (element) {
    element.style.left = "900px";
  });
}

function notovr() {
  getDiv = document.querySelectorAll(".post_header_1 p");
  getDiv.forEach(function (element) {
    element.style.left = "800px";
  });
}
function overimg2(event) {
  console.log("Курсор наведен на элемент:", event.currentTarget);
  getDiv = document.querySelectorAll(".post_header_2 p");
  getDiv.forEach(function (element) {
    element.style.left = "10px";
  });
}

function notovr2() {
  getDiv = document.querySelectorAll(".post_header_2 p");
  getDiv.forEach(function (element) {
    element.style.left = "50px";
  });
}
