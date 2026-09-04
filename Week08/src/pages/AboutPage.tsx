function AboutPage() {
  return (
    <main className="container page">
      <section className="panel">
        <h2>關於網站</h2>
        <p>
          這是一個使用 React 與 TypeScript 製作的 Week 8 練習。
        </p>
        <p>
          學生名單由父元件管理，再透過 Props 傳給學生清單與學生卡片。
        </p>
      </section>
    </main>
  );
}

export default AboutPage;

