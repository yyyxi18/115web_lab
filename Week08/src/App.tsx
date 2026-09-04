import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="*"
            element={
              <main className="container page">
                <section className="panel">
                  <h2>找不到頁面</h2>
                  <p>請確認網址是否正確。</p>
                </section>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

