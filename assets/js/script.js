let ele = document.getElementById("ele1");

function pintar() {
  ele.style.backgroundColor = "yellow";
}

ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});
