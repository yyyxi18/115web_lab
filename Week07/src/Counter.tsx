import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="counter">
      <div>
        <p className="eyebrow">State Practice</p>
        <h2>練習次數：{count}</h2>
        <p>按下按鈕，觀察 State 改變後畫面如何重新更新。</p>
      </div>

      <div className="button-group">
        <button
          type="button"
          onClick={() => setCount(count + 1)}
        >
          完成一次練習
        </button>

        <button
          type="button"
          className="secondary-button"
          onClick={() => setCount(0)}
        >
          歸零
        </button>
      </div>
    </section>
  );
}

export default Counter;

