var bgcolors = ["#CC543A", "#B481BB", "#3A8FB7", "#1560BD", "#6D2E5B", "#8B81C3", "#51A8DD", "#006284", "#B5495B", "#EB7A77", "#C1693C", "#9ACD32", "#81C7D4", "#86C166", "#F05E1C", "#BFDAE5", "#33CC00", "#0C0C0C", "#FEDFE1", "#EEA9A9", "#E87A90", "#096148", "#5DAC81", "#EEED09", "#FFB11B", "#899BA9"]
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var bgimg = ["url(image/a2.png)", "url(image/b2.png)", "url(image/c2.png)", "url(image/d2.png)", "url(image/e2.png)", "url(image/f2.png)", "url(image/g2.png)", "url(image/h2.png)", "url(image/i2.png)", "url(image/j2.png)", "url(image/k2.png)", "url(image/l2.png)", "url(image/m2.png)", "url(image/n2.png)", "url(image/o2.png)", "url(image/p2.png)", "url(image/q2.png)", "url(image/r2.png)", "url(image/s2.png)", "url(image/t2.png)", "url(image/u2.png)", "url(image/v2.png)", "url(image/w2.png)", "url(image/x2.png)", "url(image/y2.png)", "url(image/z2.png)"];

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