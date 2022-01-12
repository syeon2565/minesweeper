//폭탄 랜덤하게 만들기
const _ = require("lodash");

function createBomb(fieldInfo) {
  for (var i = 0; i < fieldInfo.count; i++) {
    var bomb = (arr[_.random(fieldInfo.height - 1)][
      _.random(fieldInfo.width - 1)
    ] = "*");
  }
}
module.exports = createBomb;
