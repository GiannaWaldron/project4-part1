var bgcolors = ["#CC543A", "#B481BB", "#3A8FB7", "#1560BD", "#6D2E5B", "#8B81C3", "#51A8DD", "#006284", "#B5495B", "#EB7A77", "#C1693C", "#9ACD32", "#81C7D4", "#86C166", "#F05E1C", "#BFDAE5", "#33CC00", "#0C0C0C", "#FEDFE1", "#EEA9A9", "#E87A90", "#096148", "#5DAC81", "#EEED09", "#FFB11B", "#899BA9"]
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var bgimg = ["url(image/a.png)", "url(image/b.png)", "url(image/c.png)", "url(image/d.png)", "url(image/e.png)", "url(image/f.png)", "url(image/g.png)", "url(image/h.png)", "url(image/i.png)", "url(image/j.png)", "url(image/k.png)", "url(image/l.png)", "url(image/m.png)", "url(image/n.png)", "url(image/o.png)", "url(image/p.png)", "url(image/q.png)", "url(image/r.png)", "url(image/s.png)", "url(image/t.png)", "url(image/u.png)", "url(image/v.png)", "url(image/w.png)", "url(image/x.png)", "url(image/y.png)", "url(image/z.png)"];

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