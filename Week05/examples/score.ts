// Week 5：TypeScript 成績判斷練習

const studentName: string = "請填入姓名";
const chinese: number = 80;
const english: number = 75;
const programming: number = 90;

function calculateAverage(
  first: number,
  second: number,
  third: number
): number {
  return (first + second + third) / 3;
}

function getResult(average: number): string {
  if (average >= 90) {
    return "優秀";
  }

  if (average >= 60) {
    return "及格";
  }

  return "需要再努力";
}

const average: number = calculateAverage(
  chinese,
  english,
  programming
);

console.log("姓名：" + studentName);
console.log("平均分數：" + average.toFixed(2));
console.log("結果：" + getResult(average));

