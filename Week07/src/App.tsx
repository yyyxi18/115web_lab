import { useState } from "react";
import CourseCard from "./CourseCard";
import Counter from "./Counter";
import "./App.css";

interface Course {
  id: number;
  title: string;
  description: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "HTML",
    description: "學習網頁的基本結構與常用標籤。"
  },
  {
    id: 2,
    title: "CSS",
    description: "學習顏色、盒模型、Flexbox 與 RWD。"
  },
  {
    id: 3,
    title: "TypeScript",
    description: "學習型別、函式與網頁程式邏輯。"
  }
];

function App() {
  const [name, setName] = useState("");

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">Week 7 Practice</p>
        <h1>React 課程練習</h1>
        <p>
          使用 Component、Props 與 State 建立一個簡單的課程介紹頁面。
        </p>
      </header>

      <section className="welcome-section">
        <label htmlFor="name-input">你的名字</label>
        <input
          id="name-input"
          type="text"
          value={name}
          placeholder="請輸入姓名"
          onChange={(event) => setName(event.target.value)}
        />
        <p className="welcome-message">
          {name ? "你好，" + name + "！" : "歡迎來到 React 練習。"}
        </p>
      </section>

      <section>
        <h2>本週學習內容</h2>
        <div className="course-list">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </section>

      <Counter />
    </main>
  );
}

export default App;

