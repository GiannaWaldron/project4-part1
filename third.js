var bgcolors = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var bgimg = ["url(img/1.png)", "url(img/2.png)", "url(img/3.png)", "url(img/4.png)", "url(img/5.png)", "url(img/6.png)", "url(img/7.png)", "url(img/8.png)", "url(img/9.png)", "url(img/10.png)", "url(img/11.png)", "url(img/12.png)", "url(img/13.png)", "url(img/14.png)", "url(img/15.png)", "url(img/16.png)", "url(img/17.png)", "url(img/18.png)", "url(img/19.png)", "url(img/20.png)", "url(img/21.png)", "url(img/22.png)", "url(img/23.png)", "url(img/24.png)", "url(img/25.png)", "url(img/26.png)"];

document.onkeydown = function (e) {
  console.log("key down", event);
  document.querySelectorAll(".colors").forEach(a => {
    a.style.display = "none";
  })
  document.body.style.backgroundColor = "#000000";
  cursor.style.display = "block";
  var randomIndex = Math.floor(Math.random() * bgcolors.length);
  if (e.key == " ") { return };
  cursor.style.display = "none";
  document.body.style.backgroundColor = bgcolors[e.keyCode - 65];
  document.body.style.backgroundImage = bgimg[randomIndex];
  if (e.key == "Enter") { 
    document.getElementById(letter[randomIndex]).style.display = "block";
    document.body.style.backgroundColor = bgcolors[randomIndex];
  }
  else {
    document.getElementById(e.key).style.display = "block";
  }
}