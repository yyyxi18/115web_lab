# Week 5：JavaScript 與 TypeScript 入門

## 本週定位

前幾週學習了 HTML 結構、CSS 樣式與網頁版面。本週開始學習 JavaScript 與 TypeScript，讓程式能夠處理資料、做判斷、重複執行工作，並為下一週的 DOM 互動做準備。

本週先使用終端機執行程式，不急著操作網頁畫面。DOM 與事件會在 Week 6 介紹。

本週的學習流程是：

~~~text
安裝 Node.js
    ↓
使用 npm 管理專案
    ↓
執行 JavaScript
    ↓
加入變數與資料型別
    ↓
使用條件與迴圈
    ↓
撰寫函式
    ↓
使用 TypeScript 增加型別檢查
~~~

---

## 一、本週學習目標

完成本週後，你應該能夠：

1. 說明 JavaScript 與 TypeScript 的基本差異。
2. 使用 Node.js 執行 JavaScript 程式。
3. 使用 npm 建立與管理專案。
4. 使用 <code>const</code> 與 <code>let</code> 宣告變數。
5. 說明字串、數字、布林值與陣列等基本資料型別。
6. 使用運算子與條件判斷處理資料。
7. 使用 <code>for</code> 與 <code>while</code> 重複執行程式。
8. 撰寫並呼叫函式。
9. 使用 TypeScript 撰寫具有基本型別的程式。
10. 使用 Git 記錄本週練習。

---

## 二、JavaScript 與 TypeScript

### JavaScript 是什麼？

JavaScript 是網頁常用的程式語言，可以讓網頁具備互動與資料處理能力。它也可以透過 Node.js 在瀏覽器以外的環境執行。

### TypeScript 是什麼？

TypeScript 是 JavaScript 的擴充，加入了型別系統與其他開發功能。TypeScript 程式通常會先被編譯成 JavaScript，再交給瀏覽器或 Node.js 執行。

| 項目 | JavaScript | TypeScript |
|---|---|---|
| 型別 | 執行時才較容易發現錯誤 | 撰寫與編譯時可以檢查型別 |
| 檔案副檔名 | <code>.js</code> | <code>.ts</code> |
| 執行方式 | 可直接由 Node.js 執行 | 通常先編譯成 JavaScript |
| 適合用途 | 快速撰寫與執行程式 | 大型專案與多人協作 |

TypeScript 並不是完全不同的語言；學會 JavaScript 基礎後，就能逐步加入 TypeScript 型別。

---

## 三、安裝 Node.js 與使用 npm

### 安裝 Node.js

1. 開啟 [Node.js 官方網站](https://nodejs.org/)。
2. 建議下載 LTS（長期支援）版本。
3. 使用預設選項完成安裝。
4. 重新開啟 PowerShell 或 VS Code 終端機。

確認安裝成功：

~~~powershell
node --version
npm --version
~~~

只要能顯示版本號，就代表安裝完成。不同電腦顯示的版本可能不同。

### 建立練習資料夾

在課程 Repository 中建立 <code>Week05</code> 資料夾：

~~~powershell
cd C:\Projects\115web_你的學號
mkdir Week05
cd Week05
~~~

### 建立 npm 專案

~~~powershell
npm init -y
~~~

執行後會產生 <code>package.json</code>。它會記錄專案名稱、版本與套件設定。

---

## 四、第一個 JavaScript 程式

建立 <code>hello.js</code>：

~~~javascript
console.log("Hello, JavaScript!");
console.log("我正在學習網路程式設計。");
~~~

在終端機執行：

~~~powershell
node hello.js
~~~

<code>console.log()</code> 會將內容輸出到終端機，常用來觀察程式執行結果。

JavaScript 註解：

~~~javascript
// 這是一行註解

/*
  這是多行註解
  不會被程式執行
*/
~~~

註解應該用來說明「為什麼這樣做」，而不是重複描述程式表面上已經看得懂的內容。

---

## 五、變數與常數

### const 與 let

~~~javascript
const school = "淡江大學";
let score = 80;

score = 85;

console.log(school);
console.log(score);
~~~

- <code>const</code> 用於不會重新指定的變數。
- <code>let</code> 用於之後可能改變的變數。
- 不建議使用舊式的 <code>var</code> 宣告變數。
- 變數名稱應該清楚表達內容。

~~~javascript
const studentName = "小明";
const courseName = "網路程式設計實習";
~~~

避免使用沒有意義的名稱：

~~~javascript
const a = "小明";
const x = 80;
~~~

### 變數命名規則

~~~javascript
const userName = "Amy";
let totalScore = 90;
~~~

常用 camelCase 命名方式：

- 可以使用英文字母、數字、底線與美元符號。
- 不可以用數字作為開頭。
- 大小寫不同會被視為不同名稱。
- 避免使用 JavaScript 保留字。

---

## 六、基本資料型別

### 字串 String

~~~javascript
const name = "Amy";
const message = '你好';
~~~

可以使用樣板字串將變數放入文字中：

~~~javascript
const studentName = "Amy";
const message = `你好，我是 ${studentName}。`;

console.log(message);
~~~

### 數字 Number

~~~javascript
const age = 20;
const height = 168.5;

console.log(age + 1);
console.log(height);
~~~

### 布林值 Boolean

布林值只有 <code>true</code> 或 <code>false</code>：

~~~javascript
const isStudent = true;
const hasSubmitted = false;
~~~

### undefined 與 null

~~~javascript
let futureValue;
const emptyValue = null;

console.log(futureValue);
console.log(emptyValue);
~~~

<code>undefined</code> 通常表示尚未指定值，<code>null</code> 通常表示刻意表示「沒有值」。

### 陣列 Array

~~~javascript
const interests = ["閱讀", "攝影", "聽音樂"];

console.log(interests[0]);
console.log(interests.length);
~~~

陣列的索引從 <code>0</code> 開始，因此第一個元素是 <code>interests[0]</code>。

### 使用 typeof 檢查型別

~~~javascript
const name = "Amy";
const age = 20;
const isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
~~~

---

## 七、運算子

### 算術運算子

~~~javascript
const a = 10;
const b = 3;

console.log(a + b); // 加法
console.log(a - b); // 減法
console.log(a * b); // 乘法
console.log(a / b); // 除法
console.log(a % b); // 取餘數
~~~

### 比較運算子

~~~javascript
const score = 85;

console.log(score >= 60);
console.log(score === 85);
console.log(score !== 100);
~~~

建議使用嚴格相等 <code>===</code> 與嚴格不相等 <code>!==</code>，避免不同型別被自動轉換造成難以發現的問題。

### 邏輯運算子

~~~javascript
const score = 85;
const hasSubmitted = true;

console.log(score >= 60 && hasSubmitted);
console.log(score < 60 || hasSubmitted);
console.log(!hasSubmitted);
~~~

| 運算子 | 意義 |
|---|---|
| <code>&&</code> | 且：兩邊都為 true |
| <code>||</code> | 或：至少一邊為 true |
| <code>!</code> | 反轉布林值 |

---

## 八、條件判斷

### if、else if、else

~~~javascript
const score = 85;

if (score >= 90) {
  console.log("優秀");
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("需要再努力");
}
~~~

條件區塊要使用大括號包住，並且注意縮排。

### 三元運算子

簡單的兩種結果可以使用三元運算子：

~~~javascript
const score = 85;
const result = score >= 60 ? "及格" : "不及格";

console.log(result);
~~~

初學時若條件較複雜，使用完整的 <code>if...else</code> 會比較容易閱讀。

### switch

當同一個變數有多種固定值時，可以使用 <code>switch</code>：

~~~javascript
const week = 3;

switch (week) {
  case 1:
    console.log("GitHub");
    break;
  case 2:
    console.log("Git");
    break;
  case 3:
    console.log("HTML");
    break;
  default:
    console.log("其他課程");
}
~~~

---

## 九、迴圈

### for 迴圈

~~~javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
~~~

<code>for</code> 通常包含：

1. 初始值：<code>let i = 1</code>
2. 繼續條件：<code>i <= 5</code>
3. 每次執行後的變化：<code>i++</code>

### 使用 for 讀取陣列

~~~javascript
const subjects = ["HTML", "CSS", "JavaScript"];

for (let i = 0; i < subjects.length; i++) {
  console.log(subjects[i]);
}
~~~

### while 迴圈

~~~javascript
let count = 1;

while (count <= 3) {
  console.log(count);
  count++;
}
~~~

迴圈中的條件必須有機會變成 <code>false</code>，否則可能形成無限迴圈。

---

## 十、函式

函式是可以重複使用的程式區塊。

### 宣告與呼叫函式

~~~javascript
function sayHello() {
  console.log("Hello!");
}

sayHello();
~~~

### 參數與回傳值

~~~javascript
function add(a, b) {
  return a + b;
}

const result = add(3, 5);
console.log(result);
~~~

- 參數是函式接收的資料。
- <code>return</code> 將結果傳回呼叫函式的位置。
- 函式名稱應該清楚描述它做的事情。

### 箭頭函式

~~~javascript
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(4, 5));
~~~

只有一個運算式時，可以簡寫成：

~~~javascript
const square = number => number * number;

console.log(square(6));
~~~

DOM 事件中也常使用箭頭函式，但實際操作會在 Week 6 說明。

---

## 十一、使用 TypeScript

### 安裝 TypeScript

在 <code>Week05</code> 資料夾執行：

~~~powershell
npm install --save-dev typescript
~~~

確認 TypeScript 可以使用：

~~~powershell
npx tsc --version
~~~

### 第一個 TypeScript 程式

建立 <code>practice.ts</code>：

~~~typescript
const studentName: string = "Amy";
const age: number = 20;
const isStudent: boolean = true;

console.log(studentName);
console.log(age);
console.log(isStudent);
~~~

<code>string</code>、<code>number</code> 與 <code>boolean</code> 是型別註記。

### 編譯 TypeScript

~~~powershell
npx tsc practice.ts
~~~

執行後會產生 <code>practice.js</code>。再使用 Node.js 執行編譯後的 JavaScript：

~~~powershell
node practice.js
~~~

TypeScript 會在編譯階段協助發現型別錯誤：

~~~typescript
let score: number = 80;

// 這一行會產生型別錯誤
// score = "八十分";
~~~

### 具有型別的函式

~~~typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));
~~~

參數型別與回傳型別讓函式的使用方式更加清楚。

---

## 十二、課堂練習：成績判斷程式

建立 <code>score.js</code>，完成以下功能：

1. 宣告學生姓名。
2. 宣告三科成績。
3. 計算平均分數。
4. 判斷平均分數是否及格。
5. 將結果輸出到終端機。

參考架構：

~~~javascript
const studentName = "請填入姓名";
const chinese = 80;
const english = 75;
const programming = 90;

const average = (chinese + english + programming) / 3;

console.log(`姓名：${studentName}`);
console.log(`平均分數：${average}`);

if (average >= 60) {
  console.log("結果：及格");
} else {
  console.log("結果：不及格");
}
~~~

接著建立 <code>score.ts</code>，為變數與函式加入 TypeScript 型別：

~~~typescript
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

const average: number = calculateAverage(
  chinese,
  english,
  programming
);

console.log(`姓名：${studentName}`);
console.log(`平均分數：${average}`);

if (average >= 60) {
  console.log("結果：及格");
} else {
  console.log("結果：不及格");
}
~~~

---

## 十三、常見問題

### <code>node</code> 不是可辨識的命令

通常表示 Node.js 尚未安裝，或安裝後終端機尚未重新開啟。請重新開啟 VS Code 或 PowerShell，再執行 <code>node --version</code>。

### <code>npm</code> 不是可辨識的命令

npm 通常會隨 Node.js 一起安裝。請確認 Node.js 安裝完成，並重新開啟終端機。

### TypeScript 編譯失敗

先閱讀錯誤訊息，檢查：

- 變數型別是否正確。
- 括號與大括號是否成對。
- 函式參數數量是否正確。
- 檔案名稱與路徑是否正確。

### 為什麼 TypeScript 不能直接用 <code>node</code> 執行？

Node.js 主要執行 JavaScript。TypeScript 通常要先使用 <code>npx tsc</code> 編譯成 JavaScript，再執行產生的 <code>.js</code> 檔案。

### 小數平均分數太長

可以使用 <code>toFixed()</code> 控制顯示的小數位數：

~~~javascript
console.log(average.toFixed(2));
~~~

這會顯示兩位小數，但回傳結果是字串；後續若要繼續計算，請保留原本的數字。

### 程式沒有輸出結果

請確認：

- 檔案已經儲存。
- 終端機目前位於正確資料夾。
- 執行的檔案名稱正確。
- <code>console.log()</code> 確實存在。

---

## 十四、課堂練習與完成檢核

- [ ] 已安裝 Node.js，且能顯示版本。
- [ ] 已使用 npm 建立專案。
- [ ] 能使用 Node.js 執行 JavaScript。
- [ ] 能使用 <code>const</code> 與 <code>let</code>。
- [ ] 能使用字串、數字、布林值與陣列。
- [ ] 能使用算術、比較與邏輯運算子。
- [ ] 能使用 <code>if...else</code> 判斷條件。
- [ ] 能使用 <code>for</code> 或 <code>while</code> 迴圈。
- [ ] 能建立具有參數與回傳值的函式。
- [ ] 已安裝 TypeScript 並成功編譯 <code>.ts</code> 檔案。
- [ ] 已完成成績判斷練習。
- [ ] 已建立 Git commit 並 push 到 GitHub。

---

## 十五、使用 Git 記錄本週成果

在 Repository 根目錄執行：

~~~powershell
git status
git add Week05
git commit -m "Add JavaScript and TypeScript practice"
git log --oneline
git push
~~~

請不要提交不必要的套件資料夾。若專案會產生 <code>node_modules</code>，請確認 <code>.gitignore</code> 已包含：

~~~gitignore
node_modules/
~~~

---

## 十六、本週重點回顧

- JavaScript 可以處理資料、判斷條件、重複執行工作與建立函式。
- <code>const</code> 用於不重新指定的變數，<code>let</code> 用於可能改變的變數。
- 使用 <code>===</code> 與 <code>!==</code> 進行嚴格比較。
- 迴圈要確認有機會停止，避免無限迴圈。
- 函式可以將重複的邏輯整理成可重複使用的程式區塊。
- TypeScript 透過型別檢查協助提早發現錯誤。
- Week 6 將把 TypeScript 應用到 DOM 與網頁事件。

