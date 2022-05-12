var bgcolors = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var bgimg = ["url(image/a3.png)", "url(image/b3.png)", "url(image/c3.png)", "url(imaje/d3.png)", "url(image/e3.png)", "url(image/f3.png)", "url(image/g3.png)", "url(image/h3.png)", "url(image/i3.png)", "url(image/j3.png)", "url(image/k3.png)", "url(image/l3.png)", "url(image/m3.png)", "url(image/n3.png)", "url(image/o3.png)", "url(image/p3.png)", "url(img/17.png)", "url(img/18.png)", "url(img/19.png)", "url(img/20.png)", "url(img/21.png)", "url(img/22.png)", "url(img/23.png)", "url(img/24.png)", "url(img/25.png)", "url(img/26.png)"];
document.onkeydown = function (e) {
  console.log("key down", event);
  document.querySelectorAll(".colors").forEach(a => {
    a.style.display = "none";
  })
  document.body.style.backgroundColor = "#f8f6f6";
  cursor.style.display = "none";
  document.body.style.backgroundImage = bgimg[e.keyCode - 65];
  if (e.key == "Enter") { 
    document.getElementById(letter[randomIndex]).style.display = "block";
    document.body.style.backgroundImage = backgroundImage[randomIndex];
  }
  else {
    document.getElementById(e.key).style.display = "block";
  }
}