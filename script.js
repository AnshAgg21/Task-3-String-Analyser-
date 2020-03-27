function fn1() {
  var str = document.getElementById("text1").value;
  var x = str;
  var vowels = "aeiouAEIOU";
  var sc = "!@#$%^&*(){}:<>?|+=-_';,./[]";
  var space = " ";
  var countv = 0;
  var countc = 0;
  var counts = 0;
  var countsc = 0;
  var i = 0;
  while (i < x.length) {
    if (vowels.indexOf(x[i]) != -1) {
      countv += 1;
    } else if (
      vowels.indexOf(x[i]) == -1 &&
      space.indexOf(x[i]) == -1 &&
      sc.indexOf(x[i]) == -1
    ) {
      countc += 1;
    } else if (space.indexOf(x[i]) != -1) {
      counts += 1;
    } else if (sc.indexOf(x[i]) != -1) {
      countsc += 1;
    }
    i += 1;
  }
  document.getElementById("vowel").innerHTML = countv;
  document.getElementById("consonant").innerHTML = countc;
  document.getElementById("space").innerHTML = counts;
  document.getElementById("specialc").innerHTML = countsc;
}
