# Week 6：TypeScript 與 DOM 互動

## 本週定位

Week 5 學習了 JavaScript、TypeScript、變數、型別、條件、迴圈與函式。本週將把這些程式能力放進網頁，使用 DOM（Document Object Model）讀取與修改 HTML，並透過事件讓按鈕與表單產生互動。

本週的核心流程是：

~~~text
HTML 元素
    ↓
TypeScript 取得元素
    ↓
監聽使用者事件
    ↓
讀取輸入資料
    ↓
更新網頁內容
~~~

---

## 一、本週學習目標

完成本週後，你應該能夠：

1. 說明 DOM 的用途。
2. 使用 TypeScript 取得 HTML 元素。
3. 使用型別註記處理 DOM 元素。
4. 使用 <code>addEventListener</code> 監聽事件。
5. 使用按鈕事件修改文字與 CSS class。
6. 讀取輸入框與表單內容。
7. 使用陣列與物件保存資料。
8. 使用 interface 描述資料結構。
9. 使用迴圈將資料顯示到網頁。
10. 將 TypeScript 編譯成 JavaScript 並在 HTML 中載入。

---

## 二、什麼是 DOM？
<img width="486" height="266" alt="image" src="https://github.com/user-attachments/assets/18284ca0-a91c-4cc4-b544-0545fe96104a" />
DOM 是瀏覽器將 HTML 文件轉換成的物件結構。TypeScript 或 JavaScript 可以透過 DOM：

- 讀取 HTML 元素。
- 修改文字。
- 修改屬性。
- 修改 CSS class。
- 建立或刪除元素。
- 回應按鈕、表單與滑鼠事件。

例如這段 HTML：

~~~html
<h1 id="title">原本的標題</h1>
~~~

可以使用 TypeScript 修改：

~~~typescript
const title = document.querySelector("#title");

if (title) {
  title.textContent = "新的標題";
}
~~~

---

## 三、建立 Week 6 練習環境

建議資料夾結構：

~~~text
Week06
├── index.html
├── main.ts
├── main.js
└── style.css
~~~

建立資料夾：

~~~powershell
cd C:\Projects\115web_你的學號
mkdir Week06
cd Week06
~~~

如果尚未安裝 TypeScript，可以在 Week 5 或 Repository 的 npm 專案中安裝：

~~~powershell
npm install --save-dev typescript
~~~

---

## 四、建立 HTML 頁面

建立 <code>index.html</code>：

~~~html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Week 6 DOM 練習</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <main>
    <h1 id="title">DOM 互動練習</h1>

    <p id="message">這段文字會被 TypeScript 修改。</p>

    <button id="change-button" type="button">
      修改文字
    </button>
  </main>

  <!-- defer 讓 HTML 載入完成後再執行 JavaScript -->
  <script src="main.js" defer></script>
</body>
</html>
~~~

注意：瀏覽器通常不能直接執行 <code>.ts</code> 檔案，因此要先編譯成 <code>main.js</code>，HTML 載入的是 <code>main.js</code>。

---

## 五、取得 HTML 元素

### 使用 getElementById

HTML：

~~~html
<p id="message">原本的文字</p>
~~~

TypeScript：

~~~typescript
const message = document.getElementById("message");

if (message) {
  message.textContent = "文字已經被修改了！";
}
~~~

<code>getElementById</code> 找不到元素時可能會得到 <code>null</code>，所以要先確認元素存在。

### 使用 querySelector

~~~typescript
const title = document.querySelector("h1");
const button = document.querySelector("#change-button");
~~~

<code>querySelector</code> 使用 CSS 選擇器語法：

~~~typescript
const firstParagraph = document.querySelector("p");
const card = document.querySelector(".card");
const contact = document.querySelector("#contact");
~~~

### 使用 querySelectorAll

取得多個元素：

~~~typescript
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  console.log(paragraph.textContent);
});
~~~

---

## 六、DOM 元素的型別

TypeScript 可以為 DOM 元素指定型別：

~~~typescript
const title = document.querySelector("h1") as HTMLHeadingElement;
const input = document.querySelector("#name") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;
~~~

如果元素可能不存在，可以先判斷：

~~~typescript
const message = document.querySelector("#message");

if (message instanceof HTMLParagraphElement) {
  message.textContent = "這是新的段落文字。";
}
~~~

常見 DOM 型別：

| 型別 | 對應元素 |
|---|---|
| <code>HTMLElement</code> | 一般 HTML 元素 |
| <code>HTMLHeadingElement</code> | <code>h1</code> 到 <code>h6</code> |
| <code>HTMLParagraphElement</code> | <code>p</code> |
| <code>HTMLInputElement</code> | <code>input</code> |
| <code>HTMLButtonElement</code> | <code>button</code> |
| <code>HTMLFormElement</code> | <code>form</code> |
| <code>HTMLUListElement</code> | <code>ul</code> |

---

## 七、監聽事件

事件代表使用者或瀏覽器發生的動作，例如點擊、輸入、提交表單與滑鼠移動。

基本語法：

~~~typescript
element.addEventListener("事件名稱", () => {
  // 事件發生後要執行的程式
});
~~~

### click 事件

~~~typescript
const button = document.querySelector("#change-button");
const message = document.querySelector("#message");

button?.addEventListener("click", () => {
  if (message) {
    message.textContent = "你按下了按鈕！";
  }
});
~~~

<code>?.</code> 是 optional chaining。當 <code>button</code> 不存在時，不會直接造成錯誤。

### 使用事件函式

~~~typescript
function changeMessage(): void {
  const message = document.querySelector("#message");

  if (message) {
    message.textContent = "文字已經更新。";
  }
}

const button = document.querySelector("#change-button");
button?.addEventListener("click", changeMessage);
~~~

函式名稱後面不要加括號：

~~~typescript
// 正確：事件發生時才呼叫函式
button?.addEventListener("click", changeMessage);

// 錯誤：載入程式時就先執行函式
// button?.addEventListener("click", changeMessage());
~~~

---

## 八、修改文字與 HTML

### 修改 textContent

~~~typescript
const message = document.querySelector("#message");

if (message) {
  message.textContent = "這是安全的文字內容。";
}
~~~

### 修改 innerHTML

~~~typescript
const result = document.querySelector("#result");

if (result) {
  result.innerHTML = "<strong>完成！</strong>";
}
~~~

如果內容來自使用者輸入，不要直接把輸入內容放入 <code>innerHTML</code>，避免安全問題。一般文字內容優先使用 <code>textContent</code>。

---

## 九、修改 CSS class

HTML：

~~~html
<p id="status">目前是一般狀態</p>
~~~

CSS：

~~~css
.highlight {
  color: white;
  background-color: #234e70;
  padding: 12px;
  border-radius: 8px;
}
~~~

TypeScript：

~~~typescript
const status = document.querySelector("#status");

status?.classList.add("highlight");
~~~

常用方法：

~~~typescript
status?.classList.add("highlight");
status?.classList.remove("highlight");
status?.classList.toggle("highlight");
~~~

- <code>add</code>：加入 class。
- <code>remove</code>：移除 class。
- <code>toggle</code>：有就移除，沒有就加入。

---

## 十、讀取輸入框

HTML：

~~~html
<label for="name-input">姓名</label>
<input id="name-input" type="text">

<button id="greet-button" type="button">
  打招呼
</button>

<p id="greeting"></p>
~~~

TypeScript：

~~~typescript
const nameInput = document.querySelector(
  "#name-input"
) as HTMLInputElement;

const greetButton = document.querySelector(
  "#greet-button"
) as HTMLButtonElement;

const greeting = document.querySelector("#greeting");

greetButton.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (greeting) {
    if (name === "") {
      greeting.textContent = "請先輸入姓名。";
      return;
    }

    greeting.textContent = "你好，" + name + "！";
  }
});
~~~

- <code>value</code> 取得輸入框內容。
- <code>trim()</code> 移除文字前後多餘空白。
- 使用 <code>return</code> 可以提前結束函式。

---

## 十一、處理表單提交

HTML：

~~~html
<form id="profile-form">
  <label for="email-input">Email</label>
  <input id="email-input" type="email">

  <button type="submit">送出</button>
</form>

<p id="form-message"></p>
~~~

TypeScript：

~~~typescript
const form = document.querySelector(
  "#profile-form"
) as HTMLFormElement;

const emailInput = document.querySelector(
  "#email-input"
) as HTMLInputElement;

const formMessage = document.querySelector("#form-message");

form.addEventListener("submit", (event) => {
  // 防止瀏覽器重新整理頁面
  event.preventDefault();

  const email = emailInput.value.trim();

  if (formMessage) {
    if (email === "") {
      formMessage.textContent = "請輸入 Email。";
      return;
    }

    formMessage.textContent = "表單送出成功！";
  }
});
~~~

表單事件中通常要使用 <code>event.preventDefault()</code>，避免瀏覽器執行預設的重新整理行為。

---

## 十二、使用陣列與物件

### 陣列

~~~typescript
const interests: string[] = [
  "閱讀",
  "攝影",
  "程式設計"
];

console.log(interests[0]);
~~~

### 物件

~~~typescript
const student = {
  name: "Amy",
  age: 20,
  department: "資訊管理學系"
};

console.log(student.name);
console.log(student.department);
~~~

### interface

當資料結構需要重複使用時，可以使用 <code>interface</code>：

~~~typescript
interface Student {
  name: string;
  age: number;
  department: string;
}

const student: Student = {
  name: "Amy",
  age: 20,
  department: "資訊管理學系"
};
~~~

如果物件缺少必要欄位，TypeScript 會在編譯時提醒錯誤。

---

## 十三、將陣列資料顯示到網頁

HTML：

~~~html
<h2>我的興趣</h2>
<ul id="interest-list"></ul>
~~~

TypeScript：

~~~typescript
const interests: string[] = [
  "閱讀",
  "攝影",
  "程式設計"
];

const interestList = document.querySelector(
  "#interest-list"
) as HTMLUListElement;

interests.forEach((interest) => {
  const listItem = document.createElement("li");
  listItem.textContent = interest;
  interestList.appendChild(listItem);
});
~~~

這段程式會：

1. 準備一個字串陣列。
2. 取得 HTML 的 <code>ul</code>。
3. 使用 <code>forEach</code> 逐一讀取興趣。
4. 建立 <code>li</code> 元素。
5. 將文字放入 <code>li</code>。
6. 將 <code>li</code> 加入 <code>ul</code>。

---

## 十四、綜合練習：互動式興趣清單

建立 <code>index.html</code>：

~~~html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的興趣清單</title>
</head>

<body>
  <main>
    <h1>我的興趣清單</h1>

    <form id="interest-form">
      <label for="interest-input">新增興趣</label>
      <input id="interest-input" type="text">
      <button type="submit">新增</button>
    </form>

    <p id="message"></p>
    <ul id="interest-list"></ul>
  </main>

  <script src="main.js" defer></script>
</body>
</html>
~~~

建立 <code>main.ts</code>：

~~~typescript
const interests: string[] = [
  "閱讀",
  "攝影",
  "程式設計"
];

const form = document.querySelector(
  "#interest-form"
) as HTMLFormElement;

const input = document.querySelector(
  "#interest-input"
) as HTMLInputElement;

const list = document.querySelector(
  "#interest-list"
) as HTMLUListElement;

const message = document.querySelector("#message");

function renderInterests(): void {
  list.innerHTML = "";

  interests.forEach((interest) => {
    const listItem = document.createElement("li");
    listItem.textContent = interest;
    list.appendChild(listItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newInterest = input.value.trim();

  if (newInterest === "") {
    if (message) {
      message.textContent = "請輸入興趣內容。";
    }
    return;
  }

  interests.push(newInterest);
  input.value = "";

  if (message) {
    message.textContent = "新增成功！";
  }

  renderInterests();
});

renderInterests();
~~~

---

## 十五、編譯與執行

在 <code>Week06</code> 資料夾執行：

~~~powershell
npx tsc main.ts
~~~

這會產生 <code>main.js</code>。接著使用瀏覽器開啟 <code>index.html</code>。

如果想讓 TypeScript 編譯後的檔案放到指定資料夾，可以使用：

~~~powershell
npx tsc main.ts --outDir dist
~~~

此時 HTML 需要改成：

~~~html
<script src="dist/main.js" defer></script>
~~~

每次修改 <code>main.ts</code> 後，都要重新執行 <code>npx tsc main.ts</code>，讓 <code>main.js</code> 更新。

---

## 十六、使用瀏覽器開發者工具

按下 <code>F12</code> 開啟開發者工具：

- 在 Console 查看 <code>console.log()</code> 與錯誤訊息。
- 在 Elements 查看 DOM 是否正確更新。
- 在 Sources 查看載入的 JavaScript。
- 在 Network 確認檔案是否成功載入。

常見錯誤：

~~~text
Uncaught TypeError: Cannot read properties of null
~~~

通常表示：

- HTML 的 id 拼寫與 TypeScript 不一致。
- JavaScript 在 HTML 元素建立前就執行。
- HTML 沒有載入正確的 JavaScript 檔案。

可以使用 <code>defer</code>，或將 <code>script</code> 放在 <code>body</code> 最後面。

---

## 十七、常見問題

### TypeScript 檔案沒有作用

瀏覽器不會直接執行 <code>.ts</code>。請先執行：

~~~powershell
npx tsc main.ts
~~~

並確認 HTML 載入的是產生的 <code>main.js</code>。

### 按鈕按了沒有反應

請檢查：

- 按鈕的 <code>id</code> 是否正確。
- <code>addEventListener</code> 的事件名稱是否為 <code>click</code>。
- HTML 是否載入正確的 JavaScript。
- Console 是否有錯誤訊息。
- 修改後是否重新編譯 TypeScript。

### 表單送出後頁面重新整理

請在 <code>submit</code> 事件中加入：

~~~typescript
event.preventDefault();
~~~

### 找不到輸入框的內容

請確認使用的是：

~~~typescript
const input = document.querySelector(
  "#name-input"
) as HTMLInputElement;

console.log(input.value);
~~~

不要讀取一般元素的 <code>textContent</code> 來取得 <code>input</code> 的值。

### 使用 innerHTML 後畫面沒有更新

請確認：

- 元素確實存在。
- HTML 字串格式正確。
- JavaScript 已重新編譯。
- 若只是顯示使用者輸入，優先改用 <code>textContent</code>。

---

## 十八、本週完成檢核

- [ ] 能說明 DOM 的用途。
- [ ] 能使用 <code>getElementById</code> 或 <code>querySelector</code> 取得元素。
- [ ] 能為 DOM 元素加入適合的 TypeScript 型別。
- [ ] 能使用 <code>addEventListener</code> 處理按鈕事件。
- [ ] 能讀取輸入框的 <code>value</code>。
- [ ] 能使用 <code>preventDefault()</code> 阻止表單重新整理。
- [ ] 能使用陣列與物件保存資料。
- [ ] 能使用 interface 描述物件型別。
- [ ] 能使用迴圈將資料顯示到網頁。
- [ ] 能將 TypeScript 編譯成 JavaScript。
- [ ] 已完成互動式興趣清單。
- [ ] 已建立 Git commit 並 push 到 GitHub。

---

## 十九、使用 Git 記錄本週成果

在 Repository 根目錄執行：

~~~powershell
git status
git add Week06
git commit -m "Add TypeScript DOM practice"
git log --oneline
git push
~~~

如果 <code>main.js</code> 是由 <code>main.ts</code> 編譯產生，請依課程的檔案管理方式決定是否提交。至少要確保其他同學依照 README 的步驟可以重新產生 JavaScript。

---

## 二十、本週重點回顧

- DOM 是 HTML 文件在瀏覽器中的物件表示。
- <code>querySelector</code> 可以使用 CSS 選擇器尋找元素。
- <code>addEventListener</code> 可以監聽按鈕與表單事件。
- 輸入框使用 <code>value</code> 取得內容。
- 表單通常需要使用 <code>preventDefault()</code>。
- 陣列適合保存多筆資料，interface 可以描述物件結構。
- TypeScript 要先編譯成 JavaScript，瀏覽器才能執行。
- Week 7 將開始 React + TypeScript，學習 Component、Props 與 State。

