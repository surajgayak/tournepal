const fa = document.querySelector(".fa");
const okk = document.querySelector(".items");

fa.addEventListener("click", () => {
  fa.classList.toggle("fa-times");
  if (okk.style.transform == "translateX(0px)") {
    okk.style.transform = "translateX(-500px)";
    okk.style.transition = "1s";
  } else {
    okk.style.transform = "translateX(0)";
    okk.style.transition = "1s";
  }
});

var img = 1;
function slider(data) {
  var a = document.getElementsByClassName("slide");

  if (data == a.length) {
    data = 0;
    img = 0;
  }
  if (data < 0) {
    data = a.length - 1;
    img = a.length - 1;
  }
  for (let y of a) {
    y.style.display = "none";
  }

  a[data].style.display = "block";
}
slider(img);

function next(okk) {
  img = img + okk;
  slider(img);
}
var navigation = document.querySelector(".navbar");

if (window.pageYOffset >= navigation.offsetTop) {
  navigation.classList.add("sticky");
} else {
  navigation.classList.remove("sticky");
}
