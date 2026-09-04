import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="container page">
      <section className="hero-panel">
        <p className="eyebrow">React Application</p>
        <h2>歡迎來到課程管理網站</h2>
        <p>
          這個網站練習了 Component、Props、State、表單、
          清單渲染與 React Router。
        </p>
        <Link className="primary-link" to="/courses">
          查看課程與學生
        </Link>
      </section>
    </main>
  );
}

export default HomePage;

