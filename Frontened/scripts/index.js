var likeController = document.querySelectorAll(".likeController");
var likePics = document.getElementsByClassName("L");
var l = 0;
likeController[1].onclick = () => {
  l++;
  for (var i of likePics) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l == 4) {
      i.style.left = "-2960px";
    }
    if (l > 4) {
      l = 4;
    }
  }
};
likeController[0].onclick = () => {
  l--;
  for (var i of likePics) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l < 0) {
      l = 0;
    }
  }
};
var featuredController = document.querySelectorAll(".featuredController");
var dramaPics = document.getElementsByClassName("D");
var d = 0;
featuredController[1].onclick = () => {
  d++;
  for (var i of dramaPics) {
    if (d == 0) {
      i.style.left = "0px";
    }
    if (d == 1) {
      i.style.left = "-740px";
    }
    if (d == 2) {
      i.style.left = "-1480px";
    }
    if (d == 3) {
      i.style.left = "-2220px";
    }
    if (d == 4) {
      i.style.left = "-2960px";
    }
    if (d > 4) {
      d = 4;
    }
  }
};
featuredController[0].onclick = () => {
  d--;
  for (var i of dramaPics) {
    if (d == 0) {
      i.style.left = "0px";
    }
    if (d == 1) {
      i.style.left = "-740px";
    }
    if (d == 2) {
      i.style.left = "-1480px";
    }
    if (d == 3) {
      i.style.left = "-2220px";
    }
    if (d < 0) {
      d = 0;
    }
  }
};
var dealsController = document.querySelectorAll(".dealsController");
var dealsPics = document.getElementsByClassName("M");
var m = 0;
dealsController[1].onclick = () => {
  m++;
  for (var i of dealsPics) {
    if (m == 0) {
      i.style.left = "0px";
    }
    if (m == 1) {
      i.style.left = "-740px";
    }
    if (m == 2) {
      i.style.left = "-1480px";
    }
    if (m == 3) {
      i.style.left = "-2220px";
    }
    if (m == 4) {
      i.style.left = "-2960px";
    }
    if (m > 4) {
      m = 4;
    }
  }
};
dealsController[0].onclick = () => {
  m--;
  for (var i of dealsPics) {
    if (m == 0) {
      i.style.left = "0px";
    }
    if (m == 1) {
      i.style.left = "-740px";
    }
    if (m == 2) {
      i.style.left = "-1480px";
    }
    if (m == 3) {
      i.style.left = "-2220px";
    }
    if (m < 0) {
      m = 0;
    }
  }
};
var reviewController = document.querySelectorAll(".reviewController");
var reviewPics = document.getElementsByClassName("R");
var r = 0;
reviewController[1].onclick = () => {
  r++;
  for (var i of reviewPics) {
    if (r == 0) {
      i.style.left = "0px";
    }
    if (r == 1) {
      i.style.left = "-740px";
    }
    if (r == 2) {
      i.style.left = "-1480px";
    }
    if (r == 3) {
      i.style.left = "-2220px";
    }
    if (r == 4) {
      i.style.left = "-2960px";
    }
    if (r > 4) {
      r = 4;
    }
  }
};
reviewController[0].onclick = () => {
  r--;
  for (var i of reviewPics) {
    if (r == 0) {
      i.style.left = "0px";
    }
    if (r == 1) {
      i.style.left = "-740px";
    }
    if (r == 2) {
      i.style.left = "-1480px";
    }
    if (r == 3) {
      i.style.left = "-2220px";
    }
    if (r < 0) {
      r = 0;
    }
  }
};
