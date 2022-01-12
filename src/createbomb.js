//폭탄 랜덤하게 만들기
const _ = require("lodash");

function createBomb(fieldInfo, arr) {
  for (var i = 0; i < fieldInfo.count; i++) {
    arr[_.random(fieldInfo.height - 1)][_.random(fieldInfo.width - 1)] = "*";
  }
  return arr;
}
module.exports = createBomb;
