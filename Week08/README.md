# Week 8：React 網頁應用開發

## 本週定位

Week 7 已學會建立 Component、使用 Props 與 State。本週將把多個元件組合成較完整的 React Application，並加入表單、事件、清單渲染與多頁導覽。

本週的練習會製作一個簡單的「課程管理網站」：

~~~text
App
├── Layout
│   ├── Header
│   └── Navigation
├── HomePage
├── CoursesPage
│   ├── CourseForm
│   └── CourseList
└── AboutPage
~~~

---

## 一、本週學習目標

完成本週後，你應該能夠：

1. 將大型畫面拆分成多個有責任的 Component。
2. 使用資料夾整理元件與頁面。
3. 使用事件處理按鈕點擊與表單提交。
4. 建立受控元件（Controlled Component）。
5. 使用 State 管理表單與清單資料。
6. 使用 <code>map</code> 渲染多筆資料。
7. 使用 <code>filter</code> 篩選清單。
8. 使用 React Router 建立多頁導覽。
9. 使用 <code>Link</code> 與 <code>NavLink</code> 切換頁面。
10. 綜合使用 Props、State、表單與路由完成小型 React Application。

---

## 二、為什麼要拆分 Component？

當所有程式都放在 <code>App.tsx</code> 時，檔案會越來越長，修改也不容易。可以依照畫面功能拆分：

| Component | 責任 |
|---|---|
| <code>Header</code> | 顯示網站標題 |
| <code>Navigation</code> | 顯示導覽連結 |
| <code>CourseCard</code> | 顯示一門課程 |
| <code>CourseForm</code> | 取得使用者輸入 |
| <code>CourseList</code> | 顯示課程清單 |
| <code>Layout</code> | 組合共用頁面結構 |

好的 Component 通常有清楚的責任，不要讓一個元件同時處理太多不相關的工作。

---

## 三、整理專案資料夾

以 Week 7 的 React 專案為基礎，建議結構如下：

~~~text
src
├── components
│   ├── CourseCard.tsx
│   ├── CourseForm.tsx
│   ├── CourseList.tsx
│   ├── Header.tsx
│   └── Layout.tsx
├── pages
│   ├── AboutPage.tsx
│   ├── CoursesPage.tsx
│   └── HomePage.tsx
├── App.tsx
├── App.css
├── index.css
└── main.tsx
~~~

Component 檔名通常使用 PascalCase，例如 <code>CourseCard.tsx</code>；頁面檔名可以用 <code>HomePage.tsx</code>、<code>AboutPage.tsx</code>。

---

## 四、使用事件處理互動

### onClick

~~~tsx
function WelcomeButton() {
  function handleClick(): void {
    alert("歡迎來到課程網站！");
  }

  return (
    <button type="button" onClick={handleClick}>
      顯示訊息
    </button>
  );
}

export default WelcomeButton;
~~~

React 事件名稱使用 camelCase：

- <code>onClick</code>
- <code>onChange</code>
- <code>onSubmit</code>
- <code>onMouseOver</code>

### 傳入事件參數

~~~tsx
function DeleteButton() {
  function handleDelete(id: number): void {
    console.log("準備刪除課程：" + id);
  }

  return (
    <button
      type="button"
      onClick={() => handleDelete(1)}
    >
      刪除
    </button>
  );
}

export default DeleteButton;
~~~

使用箭頭函式包住 <code>handleDelete(1)</code>，讓它在點擊時才執行。

---

## 五、受控元件與表單

受控元件是指表單欄位的值由 React State 管理。

~~~tsx
import { useState } from "react";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <label htmlFor="keyword">搜尋課程</label>
      <input
        id="keyword"
        type="text"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <p>目前搜尋：{keyword}</p>
    </div>
  );
}

export default SearchBox;
~~~

資料流程：

~~~text
使用者輸入
    ↓
onChange 取得值
    ↓
setKeyword 更新 State
    ↓
value 顯示最新 State
~~~

不要只讀取 DOM 而不更新 State，否則 React 的資料與畫面可能不同步。

---

## 六、處理表單提交

~~~tsx
import { FormEvent, useState } from "react";

function CourseForm() {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log("課程名稱：" + title);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="course-title">課程名稱</label>
      <input
        id="course-title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">送出</button>
    </form>
  );
}

export default CourseForm;
~~~

<code>FormEvent</code> 是表單事件的 TypeScript 型別。使用 <code>preventDefault()</code> 可以避免瀏覽器送出表單後重新整理頁面。

---

## 七、使用 State 管理表單資料

表單有多個欄位時，可以使用物件保存：

~~~tsx
import { ChangeEvent, FormEvent, useState } from "react";

interface CourseFormData {
  title: string;
  description: string;
  level: string;
}

const initialFormData: CourseFormData = {
  title: "",
  description: "",
  level: "初級"
};

function CourseForm() {
  const [formData, setFormData] =
    useState<CourseFormData>(initialFormData);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): void {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">課程名稱</label>
      <input
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="description">課程說明</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label htmlFor="level">難度</label>
      <select
        id="level"
        name="level"
        value={formData.level}
        onChange={handleChange}
      >
        <option value="初級">初級</option>
        <option value="中級">中級</option>
        <option value="高級">高級</option>
      </select>

      <button type="submit">新增課程</button>
    </form>
  );
}

export default CourseForm;
~~~

<code>...formData</code> 會保留其他欄位，只更新目前被修改的欄位。

---

## 八、清單渲染與刪除資料

### 定義資料型別

~~~tsx
export interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
}
~~~

### 使用 Props 顯示清單

~~~tsx
import { Course } from "../types";
import CourseCard from "./CourseCard";

interface CourseListProps {
  courses: Course[];
  onDelete: (id: number) => void;
}

function CourseList({
  courses,
  onDelete
}: CourseListProps) {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default CourseList;
~~~

### CourseCard

~~~tsx
import { Course } from "../types";

interface CourseCardProps {
  course: Course;
  onDelete: (id: number) => void;
}

function CourseCard({
  course,
  onDelete
}: CourseCardProps) {
  return (
    <article className="course-card">
      <span>{course.level}</span>
      <h3>{course.title}</h3>
      <p>{course.description}</p>

      <button
        type="button"
        onClick={() => onDelete(course.id)}
      >
        刪除
      </button>
    </article>
  );
}

export default CourseCard;
~~~

### 在父元件管理刪除

~~~tsx
const [courses, setCourses] = useState<Course[]>(
  initialCourses
);

function handleDelete(id: number): void {
  setCourses((currentCourses) =>
    currentCourses.filter((course) => course.id !== id)
  );
}
~~~

State 應由擁有資料的父元件管理，再透過 Props 把資料與事件函式傳給子元件。

---

## 九、React Router

React Router 可以根據網址顯示不同頁面，而不需要整頁重新載入。

### 安裝

在 React 專案根目錄執行：

~~~powershell
npm install react-router-dom
npm install --save-dev @types/react-router-dom
~~~

較新的 <code>react-router-dom</code> 版本已內含型別；如果 npm 顯示不需要額外安裝型別套件，可以依安裝結果處理。

### 建立頁面

<code>src/pages/HomePage.tsx</code>：

~~~tsx
function HomePage() {
  return (
    <section>
      <h1>首頁</h1>
      <p>歡迎來到我的 React 課程網站。</p>
    </section>
  );
}

export default HomePage;
~~~

<code>src/pages/AboutPage.tsx</code>：

~~~tsx
function AboutPage() {
  return (
    <section>
      <h1>關於網站</h1>
      <p>這是一個用 React 與 TypeScript 製作的練習網站。</p>
    </section>
  );
}

export default AboutPage;
~~~

### 設定 Routes

<code>src/App.tsx</code>：

~~~tsx
import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>React 課程網站</h1>

        <nav>
          <Link to="/">首頁</Link>
          <Link to="/about">關於網站</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
~~~

### Link 與一般 a 的差異

在 React Router 中，頁面內部導覽使用：

~~~tsx
<Link to="/about">關於網站</Link>
~~~

不要使用：

~~~tsx
<a href="/about">關於網站</a>
~~~

<code>Link</code> 會進行前端路由切換，通常不會重新載入整個頁面；外部網站連結才使用一般的 <code>a</code>。

---

## 十、NavLink 與目前頁面樣式

<code>NavLink</code> 可以判斷目前是否為作用中的頁面：

~~~tsx
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active-link" : ""
        }
      >
        首頁
      </NavLink>

      <NavLink
        to="/courses"
        className={({ isActive }) =>
          isActive ? "active-link" : ""
        }
      >
        課程
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "active-link" : ""
        }
      >
        關於
      </NavLink>
    </nav>
  );
}

export default Navigation;
~~~

CSS：

~~~css
nav {
  display: flex;
  gap: 16px;
}

nav a {
  color: #234e70;
  text-decoration: none;
}

nav a.active-link {
  color: #1769aa;
  font-weight: bold;
  text-decoration: underline;
}
~~~

---

## 十一、Not Found 頁面

可以為不存在的網址設定頁面：

~~~tsx
function NotFoundPage() {
  return (
    <section>
      <h1>找不到頁面</h1>
      <p>請確認網址是否正確。</p>
    </section>
  );
}

export default NotFoundPage;
~~~

在 Routes 最後加入：

~~~tsx
<Route path="*" element={<NotFoundPage />} />
~~~

<code>*</code> 代表沒有符合其他路徑時，就顯示 Not Found 頁面。

---

## 十二、綜合練習：課程管理網站

### 建議資料夾結構

~~~text
src
├── components
│   ├── CourseCard.tsx
│   ├── CourseForm.tsx
│   ├── CourseList.tsx
│   ├── Navigation.tsx
│   └── Layout.tsx
├── pages
│   ├── AboutPage.tsx
│   ├── CoursesPage.tsx
│   ├── HomePage.tsx
│   └── NotFoundPage.tsx
├── types
│   └── course.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
~~~

### 功能需求

課程網站至少包含：

- 首頁：顯示網站介紹。
- 課程頁：顯示課程清單。
- 關於頁：顯示網站或作者資訊。
- 課程新增表單。
- 課程刪除按鈕。
- 導覽列與 React Router。
- 沒有資料時顯示提示文字。
- 手機寬度時課程卡片改成垂直排列。

### 沒有資料時的畫面

~~~tsx
{courses.length === 0 ? (
  <p>目前沒有課程資料。</p>
) : (
  <CourseList
    courses={courses}
    onDelete={handleDelete}
  />
)}
~~~

### 新增課程的資料流程

~~~text
CourseForm
    ↓ onAdd
CoursesPage
    ↓ 更新 courses State
CourseList
    ↓ Props
CourseCard
    ↓ 顯示新資料
~~~

子元件不直接修改父元件的 State，而是呼叫父元件傳入的函式。

---

## 十三、常見問題

### 點擊 Link 後整頁重新整理

請確認內部頁面使用的是：

~~~tsx
<Link to="/about">關於網站</Link>
~~~

而不是：

~~~tsx
<a href="/about">關於網站</a>
~~~

### 表單送出後頁面重新整理

請在 <code>onSubmit</code> 中加入：

~~~tsx
event.preventDefault();
~~~

### 輸入框無法輸入

受控輸入框必須同時設定 <code>value</code> 與 <code>onChange</code>：

~~~tsx
<input
  value={title}
  onChange={(event) => setTitle(event.target.value)}
/>
~~~

### 清單顯示 key 警告

請在最外層的 <code>map</code> 元件加入穩定且不重複的 <code>key</code>：

~~~tsx
{courses.map((course) => (
  <CourseCard key={course.id} course={course} />
))}
~~~

### 刪除按鈕刪錯資料

請把正確的 id 傳給事件函式：

~~~tsx
onClick={() => onDelete(course.id)}
~~~

不要直接在元件載入時執行：

~~~tsx
// 錯誤
// onClick={onDelete(course.id)}
~~~

### React Router 顯示空白頁面

請檢查：

- 是否安裝 <code>react-router-dom</code>。
- <code>BrowserRouter</code> 是否包住 <code>Routes</code>。
- <code>Route path</code> 是否與 <code>Link to</code> 一致。
- Component 是否正確匯入與 export。
- 瀏覽器網址是否輸入正確。

### TypeScript 顯示事件型別錯誤

表單與輸入事件可以匯入：

~~~tsx
import {
  ChangeEvent,
  FormEvent
} from "react";
~~~

再為事件參數指定型別：

~~~tsx
function handleSubmit(
  event: FormEvent<HTMLFormElement>
): void {
  event.preventDefault();
}
~~~

---

## 十四、本週完成檢核

- [ ] 已將畫面拆成多個 Component。
- [ ] 能使用 Props 傳遞資料與事件函式。
- [ ] 能使用 State 管理表單資料。
- [ ] 能處理按鈕點擊與表單提交。
- [ ] 能使用 <code>map</code> 顯示清單。
- [ ] 能使用 <code>filter</code> 刪除清單資料。
- [ ] 已建立首頁、課程頁與關於頁。
- [ ] 已使用 React Router 切換頁面。
- [ ] 已加入 Not Found 頁面。
- [ ] 已測試表單輸入、清單新增與刪除。
- [ ] 已測試桌面與手機版面。
- [ ] 已建立 Git commit 並 push 到 GitHub。

---

## 十五、使用 Git 記錄本週成果

在 Repository 根目錄執行：

~~~powershell
git status
git add Week08
git commit -m "Add React application practice"
git log --oneline
git push
~~~

請確認 <code>node_modules</code> 已被 <code>.gitignore</code> 排除，不要將套件資料夾上傳到 GitHub。

---

## 十六、本週重點回顧

- Component 應該有清楚且單一的責任。
- Props 用來傳遞資料與事件函式。
- State 用來管理會改變的資料。
- 受控元件的值由 React State 管理。
- <code>map</code> 用來渲染清單，<code>filter</code> 可以產生刪除後的新陣列。
- 內部頁面導覽使用 <code>Link</code> 或 <code>NavLink</code>。
- React Router 可以在單頁應用程式中管理不同網址與頁面。
- Week 9 為期中考週；後續將開始 HTTP、RESTful API 與 Express。

