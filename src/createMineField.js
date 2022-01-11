const _ = require("lodash");
function createMineField(fieldInfo) {
  // 원하는 폭탄의 개수가 게임판의 개수보다 많을 경우에 대한 처리
  if (fieldInfo.count > fieldInfo.width * fieldInfo.height) {
    throw new Error("입력 값이 잘못되었습니다.");
  }

  // 2차원 배열을 사용자에게 입력받은 숫자에 맞게 생성한다
  var arr = new Array(fieldInfo.height);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(fieldInfo.width);
    for (var j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }

  // 폭탄을 2차원 배열에 랜덤하게 넣는다
  for (var i = 0; i < fieldInfo.count; i++) {
    var bomb = (arr[_.random(fieldInfo.height - 1)][
      _.random(fieldInfo.width - 1)
    ] = "*");
  }

  // 폭탄이 아닌 자리들에 알맞는 숫자를 채워넣는다
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "*") {
        for (var a = i - 1; a <= i + 1; a++) {
          for (var b = j - 1; b <= j + 1; b++) {
            if (arr[a][b] != "*") arr[a][b]++;
          }
        }
      }
    }
  }

  // 2차원 배열을 반환한다
  console.log(fieldInfo.count);
}

module.exports = createMineField;
