// Week 5：JavaScript 成績判斷練習

const studentName = "請填入姓名";
const chinese = 80;
const english = 75;
const programming = 90;

const average = (chinese + english + programming) / 3;

console.log("姓名：" + studentName);
console.log("國文：" + chinese);
console.log("英文：" + english);
console.log("程式設計：" + programming);
console.log("平均分數：" + average.toFixed(2));

if (average >= 90) {
  console.log("結果：優秀");
} else if (average >= 60) {
  console.log("結果：及格");
} else {
  console.log("結果：需要再努力");
}

