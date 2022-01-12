function createNum() {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "*") {
        for (var a = i - 1; a <= i + 1; a++) {
          for (var b = j - 1; b <= j + 1; b++) {
            if (arr[a][b] != "*" && a) arr[a][b]++;
          }
        }
      }
    }
  }
}
module.exports = createNum;
