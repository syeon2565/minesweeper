const _ = require("lodash");
const createArray = require("./createArray");
const createBomb = require("./createBomb");
const createNum = require("./createNum");

function createMineField(fieldInfo) {
  // 원하는 폭탄의 개수가 게임판의 개수보다 많을 경우에 대한 처리
  if (fieldInfo.count > fieldInfo.width * fieldInfo.height) {
    throw new Error("입력 값이 잘못되었습니다.");
  }

  // 2차원 배열을 사용자에게 입력받은 숫자에 맞게 생성한다
  const arr = createArray(fieldInfo);

  // 폭탄을 2차원 배열에 랜덤하게 넣는다
  const bombarr = createBomb(fieldInfo, arr);

  // 폭탄이 아닌 자리들에 알맞는 숫자를 채워넣는다
  const numarr = createNum(bombarr);

  // 2차원 배열을 반환한다
  console.log(numarr);
}

module.exports = createMineField;
