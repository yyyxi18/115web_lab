# Week 7：React + TypeScript 入門

## 本週定位

前幾週使用 HTML、CSS 與 TypeScript 製作網頁。本週開始接觸 React，學習如何把畫面拆成可以重複使用的 Component（元件），並使用 Props 傳遞資料、使用 State 管理會變動的內容。

Week 6 使用 DOM 直接找到元素並修改畫面；React 則會根據資料與元件狀態，自動更新需要改變的畫面。

本週的學習流程是：

~~~text
建立 React 專案
      ↓
認識 Vite 專案結構
      ↓
撰寫 JSX / TSX
      ↓
拆分 Component
      ↓
使用 Props 傳遞資料
      ↓
使用 State 管理變化
      ↓
處理按鈕事件
~~~

---

## 一、本週學習目標

完成本週後，你應該能夠：

1. 說明 React、Vite 與 TypeScript 在專案中的角色。
2. 使用 Vite 建立 React + TypeScript 專案。
3. 看懂 React 專案的基本資料夾結構。
4. 撰寫 JSX／TSX。
5. 建立與使用 React Component。
6. 使用 Props 將資料傳入元件。
7. 使用 <code>useState</code> 管理會變動的資料。
8. 使用事件處理按鈕點擊。
9. 使用陣列與 <code>map</code> 顯示清單。
10. 使用 Git 記錄 React 專案。

---

## 二、React、Vite 與 TypeScript

| 工具或技術 | 主要角色 |
|---|---|
| React | 使用元件建立使用者介面 |
| Vite | 建立與執行前端開發環境 |
| TypeScript | 為 JavaScript 加入型別檢查 |
| TSX | 在 TypeScript 中撰寫類似 HTML 的畫面語法 |
| npm | 安裝套件與執行專案指令 |

React 不會取代 HTML、CSS 或 JavaScript，而是提供更有組織的方式管理複雜的網頁介面。

---

## 三、建立 React + TypeScript 專案

在 Repository 的 <code>Week07</code> 之外或指定的課程資料夾中執行：

~~~powershell
npm create vite@latest react-practice -- --template react-ts
cd react-practice
npm install
npm run dev
~~~

執行 <code>npm run dev</code> 後，終端機會顯示一個本機網址，通常類似：

~~~text
http://localhost:5173/
~~~

使用瀏覽器開啟該網址即可看到 React 預設頁面。

如果要停止開發伺服器，回到終端機按：

~~~text
Ctrl + C
~~~

---

## 四、Vite 專案結構

建立完成後，常見結構如下：

~~~text
react-practice
├── public
├── src
│   ├── assets
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
~~~

| 檔案或資料夾 | 用途 |
|---|---|
| <code>src</code> | 主要程式碼 |
| <code>App.tsx</code> | 主要 App 元件 |
| <code>main.tsx</code> | 將 React App 掛載到 HTML |
| <code>index.html</code> | 網頁的基本 HTML 容器 |
| <code>package.json</code> | 專案套件與指令設定 |
| <code>public</code> | 不需經過編譯的公開檔案 |
| <code>tsconfig.json</code> | TypeScript 設定 |
| <code>vite.config.ts</code> | Vite 設定 |

---

## 五、第一個 React Component

開啟 <code>src/App.tsx</code>，可以先改成：

~~~tsx
function App() {
  return (
    <main>
      <h1>我的第一個 React 網頁</h1>
      <p>我正在學習 React 與 TypeScript。</p>
    </main>
  );
}

export default App;
~~~

React Component 通常是一個回傳畫面內容的函式：

~~~text
App 函式
  ↓
回傳 TSX
  ↓
React 顯示畫面
~~~

Component 名稱通常使用大寫開頭，例如 <code>App</code>、<code>Profile</code>、<code>CourseCard</code>。小寫名稱會被 React 視為一般 HTML 標籤。

---

## 六、JSX 與 TSX

JSX 是可以在 JavaScript 中撰寫類似 HTML 語法的格式；在 TypeScript 檔案中使用時，副檔名通常是 <code>.tsx</code>，稱為 TSX。

### JSX 基本規則

~~~tsx
function App() {
  const title = "React 網頁";

  return (
    <main>
      <h1>{title}</h1>
      <p>這是 JSX 內容。</p>
    </main>
  );
}
~~~

- Component 必須回傳一個主要的根元素。
- HTML 的 <code>class</code> 在 JSX 中要寫成 <code>className</code>。
- JavaScript 或 TypeScript 表達式要放在大括號 <code>{}</code> 中。
- HTML 標籤必須正確關閉。
- 事件名稱使用 camelCase，例如 <code>onClick</code>。

### JSX 中的變數

~~~tsx
function App() {
  const studentName = "Amy";
  const age = 20;

  return (
    <section>
      <h1>{studentName} 的個人頁面</h1>
      <p>年齡：{age}</p>
    </section>
  );
}
~~~

大括號中可以放變數、運算式與函式呼叫：

~~~tsx
function App() {
  const score = 85;

  return (
    <p>
      狀態：{score >= 60 ? "及格" : "不及格"}
    </p>
  );
}
~~~

---

## 七、建立可重複使用的 Component

在 <code>src</code> 中建立 <code>CourseCard.tsx</code>：

~~~tsx
function CourseCard() {
  return (
    <article>
      <h2>HTML</h2>
      <p>學習網頁的基本結構。</p>
    </article>
  );
}

export default CourseCard;
~~~

在 <code>App.tsx</code> 匯入並使用：

~~~tsx
import CourseCard from "./CourseCard";

function App() {
  return (
    <main>
      <h1>我的學習內容</h1>
      <CourseCard />
      <CourseCard />
    </main>
  );
}

export default App;
~~~

這樣雖然可以重複使用元件，但兩張卡片的內容相同。下一節會使用 Props 傳入不同資料。

---

## 八、使用 Props 傳遞資料

### 定義 Props 型別

~~~tsx
interface CourseCardProps {
  title: string;
  description: string;
}
~~~

完整的 <code>CourseCard.tsx</code>：

~~~tsx
interface CourseCardProps {
  title: string;
  description: string;
}

function CourseCard({
  title,
  description
}: CourseCardProps) {
  return (
    <article className="course-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}

export default CourseCard;
~~~

在 <code>App.tsx</code> 傳入 Props：

~~~tsx
import CourseCard from "./CourseCard";

function App() {
  return (
    <main>
      <h1>我的學習內容</h1>

      <CourseCard
        title="HTML"
        description="學習網頁的基本結構。"
      />

      <CourseCard
        title="CSS"
        description="學習網頁的樣式與版面。"
      />
    </main>
  );
}

export default App;
~~~

Props 的資料流方向是：

~~~text
父元件 App
    ↓ 傳入 props
子元件 CourseCard
    ↓
顯示 title 與 description
~~~

Props 是由父元件傳給子元件的資料，子元件不應直接修改父元件傳入的 Props。

---

## 九、使用陣列與 map 顯示清單

先建立資料：

~~~tsx
const courses = [
  {
    id: 1,
    title: "HTML",
    description: "學習網頁結構。"
  },
  {
    id: 2,
    title: "CSS",
    description: "學習網頁樣式。"
  },
  {
    id: 3,
    title: "TypeScript",
    description: "學習程式型別與邏輯。"
  }
];
~~~

使用 <code>map</code> 將資料轉換成元件：

~~~tsx
import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "HTML",
    description: "學習網頁結構。"
  },
  {
    id: 2,
    title: "CSS",
    description: "學習網頁樣式。"
  },
  {
    id: 3,
    title: "TypeScript",
    description: "學習程式型別與邏輯。"
  }
];

function App() {
  return (
    <main>
      <h1>我的學習內容</h1>

      <section className="course-list">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
~~~

<code>key</code> 要使用每一筆資料中穩定且不重複的值，協助 React 辨認清單項目。

---

## 十、使用 useState 管理狀態

當畫面中的資料會改變時，可以使用 React 的 <code>useState</code>。

~~~tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>目前數字：{count}</h2>

      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        增加
      </button>
    </section>
  );
}

export default Counter;
~~~

這行程式：

~~~tsx
const [count, setCount] = useState(0);
~~~

可以理解成：

- <code>count</code>：目前的狀態值。
- <code>setCount</code>：更新狀態的函式。
- <code>useState(0)</code>：初始值是 0。

不要直接修改狀態：

~~~tsx
// 錯誤
// count = count + 1;

// 正確
setCount(count + 1);
~~~

呼叫 setter 後，React 會重新執行元件並更新畫面。

---

## 十一、處理按鈕事件

React 的事件屬性使用 camelCase：

~~~tsx
function App() {
  function handleClick(): void {
    console.log("按鈕被點擊了");
  }

  return (
    <button type="button" onClick={handleClick}>
      點擊我
    </button>
  );
}

export default App;
~~~

也可以使用箭頭函式：

~~~tsx
<button
  type="button"
  onClick={() => console.log("按鈕被點擊了")}
>
  點擊我
</button>
~~~

不要在 <code>onClick</code> 中直接呼叫函式：

~~~tsx
// 錯誤：元件載入時就會執行
// <button onClick={handleClick()}>

// 正確：點擊時才執行
// <button onClick={handleClick}>
~~~

---

## 十二、輸入框與 State

~~~tsx
import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  return (
    <section>
      <label htmlFor="name-input">姓名</label>

      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <p>你好，{name || "訪客"}！</p>
    </section>
  );
}

export default NameForm;
~~~

React 中常見的表單流程：

~~~text
使用者輸入
    ↓
onChange 取得新值
    ↓
setName 更新 State
    ↓
React 重新顯示畫面
~~~

JSX 中的 <code>for</code> 屬性要改成 <code>htmlFor</code>，因為 <code>for</code> 是 JavaScript 的保留字。

---

## 十三、綜合範例：課程清單與計數器

### CourseCard.tsx

~~~tsx
interface CourseCardProps {
  title: string;
  description: string;
}

function CourseCard({
  title,
  description
}: CourseCardProps) {
  return (
    <article className="course-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}

export default CourseCard;
~~~

### Counter.tsx

~~~tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="counter">
      <h2>練習次數：{count}</h2>

      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        完成一次練習
      </button>

      <button
        type="button"
        onClick={() => setCount(0)}
      >
        歸零
      </button>
    </section>
  );
}

export default Counter;
~~~

### App.tsx

~~~tsx
import CourseCard from "./CourseCard";
import Counter from "./Counter";

interface Course {
  id: number;
  title: string;
  description: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "HTML",
    description: "學習網頁結構。"
  },
  {
    id: 2,
    title: "CSS",
    description: "學習網頁樣式與版面。"
  },
  {
    id: 3,
    title: "TypeScript",
    description: "學習型別與程式邏輯。"
  }
];

function App() {
  return (
    <main>
      <h1>React 課程練習</h1>

      <section className="course-list">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
          />
        ))}
      </section>

      <Counter />
    </main>
  );
}

export default App;
~~~

---

## 十四、基本 CSS

在 <code>src/index.css</code> 中加入：

~~~css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: #243447;
  background-color: #f4f7fb;
  font-family: Arial, "Microsoft JhengHei", sans-serif;
}

main {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 0;
}

h1 {
  color: #234e70;
  text-align: center;
}

.course-list {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.course-card,
.counter {
  flex: 1;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

button {
  margin: 4px;
  padding: 10px 16px;
  color: white;
  background-color: #234e70;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #1769aa;
}

@media (max-width: 600px) {
  .course-list {
    flex-direction: column;
  }
}
~~~

---

## 十五、課堂練習

請建立一個 React + TypeScript 課程介紹頁面，至少包含：

1. 一個 <code>App</code> 元件。
2. 一個可重複使用的 <code>CourseCard</code> 元件。
3. 使用 interface 定義課程資料型別。
4. 使用陣列保存至少三筆課程資料。
5. 使用 <code>map</code> 顯示課程卡片。
6. 使用 Props 傳遞課程標題與說明。
7. 使用 <code>useState</code> 製作一個可以增加數字的按鈕。
8. 使用 CSS 排列課程卡片。
9. 在手機寬度時改成垂直排列。

建議元件結構：

~~~text
src
├── App.tsx
├── CourseCard.tsx
├── Counter.tsx
├── App.css
├── index.css
└── main.tsx
~~~

---

## 十六、常見問題

### JSX 顯示錯誤

請檢查：

- HTML 標籤是否都有關閉。
- Component 是否只回傳一個根元素。
- <code>class</code> 是否改成 <code>className</code>。
- JavaScript 表達式是否放在 <code>{}</code> 中。

### <code>class</code> 在 React 中不能使用

React JSX 要使用：

~~~tsx
<div className="card">內容</div>
~~~

不是：

~~~tsx
// <div class="card">內容</div>
~~~

### <code>map</code> 顯示警告

通常是每個項目缺少 <code>key</code>：

~~~tsx
{courses.map((course) => (
  <CourseCard key={course.id} />
))}
~~~

<code>key</code> 應該是穩定且不重複的值。

### 按鈕沒有反應

請檢查：

- 是否使用 <code>onClick</code>，而不是 <code>onclick</code>。
- 函式是否傳入而不是立即執行。
- <code>useState</code> 是否使用 setter 更新資料。
- 瀏覽器與終端機是否有錯誤訊息。

### State 改變但畫面沒有更新

不要直接修改 State：

~~~tsx
// 錯誤
// count = count + 1;

// 正確
setCount(count + 1);
~~~

### Vite 開發伺服器無法啟動

請確認：

- 目前位於包含 <code>package.json</code> 的資料夾。
- 已執行 <code>npm install</code>。
- Node.js 與 npm 已正確安裝。
- 另一個程式沒有占用相同的連接埠。

---

## 十七、本週完成檢核

- [ ] 已使用 Vite 建立 React + TypeScript 專案。
- [ ] 能啟動與停止 Vite 開發伺服器。
- [ ] 能看懂 <code>src</code> 資料夾的基本結構。
- [ ] 能撰寫 JSX／TSX。
- [ ] 已建立可重複使用的 Component。
- [ ] 能使用 Props 傳遞資料。
- [ ] 能使用 interface 描述 Props 與資料。
- [ ] 能使用 <code>useState</code> 管理狀態。
- [ ] 能處理 <code>onClick</code> 與 <code>onChange</code>。
- [ ] 能使用 <code>map</code> 顯示清單。
- [ ] 已完成課程卡片與計數器練習。
- [ ] 已建立 Git commit 並 push 到 GitHub。

---

## 十八、使用 Git 記錄本週成果

在 Repository 根目錄執行：

~~~powershell
git status
git add Week07
git commit -m "Add React TypeScript practice"
git log --oneline
git push
~~~

請確認 <code>node_modules</code> 已被 <code>.gitignore</code> 排除，不要將套件資料夾上傳到 GitHub。

---

## 十九、本週重點回顧

- React 使用 Component 組合使用者介面。
- TSX 讓我們能在 TypeScript 中撰寫畫面結構。
- Props 用來由父元件傳遞資料給子元件。
- State 用來保存會改變的資料。
- React 事件使用 camelCase，例如 <code>onClick</code>。
- <code>map</code> 可以將陣列資料轉換成多個畫面元件。
- Week 8 將繼續學習 React 元件拆分、事件、表單、清單與 React Router。

