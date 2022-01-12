function createArray(fieldInfo) {
  var arr = new Array(fieldInfo.height);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(fieldInfo.width);
    for (var j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }
}
modulel.exports = createArray();
