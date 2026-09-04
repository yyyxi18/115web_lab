// Week 6：TypeScript 與 DOM 互動範例

// 取得標題、訊息與按鈕元素
const title = document.querySelector("#title") as HTMLHeadingElement;
const message = document.querySelector("#message") as HTMLParagraphElement;
const changeButton = document.querySelector(
  "#change-button"
) as HTMLButtonElement;

// 監聽按鈕的 click 事件，修改文字內容
changeButton.addEventListener("click", () => {
  title.textContent = "標題已經改變了！";
  message.textContent = "這段文字是由 TypeScript 修改的。";
});

// 取得姓名輸入框、打招呼按鈕與結果區域
const nameInput = document.querySelector(
  "#name-input"
) as HTMLInputElement;
const greetButton = document.querySelector(
  "#greet-button"
) as HTMLButtonElement;
const greeting = document.querySelector(
  "#greeting"
) as HTMLParagraphElement;

// 讀取輸入框內容並顯示打招呼訊息
greetButton.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    greeting.textContent = "請先輸入姓名。";
    return;
  }

  greeting.textContent = "你好，" + name + "！";
});

// 用 interface 描述興趣資料
interface Interest {
  name: string;
  category: string;
}

// 使用陣列保存物件資料
const interests: Interest[] = [
  { name: "閱讀", category: "休閒" },
  { name: "攝影", category: "創作" },
  { name: "程式設計", category: "學習" }
];

const interestForm = document.querySelector(
  "#interest-form"
) as HTMLFormElement;
const interestInput = document.querySelector(
  "#interest-input"
) as HTMLInputElement;
const interestList = document.querySelector(
  "#interest-list"
) as HTMLUListElement;
const formMessage = document.querySelector(
  "#form-message"
) as HTMLParagraphElement;

// 將興趣陣列中的資料顯示到網頁
function renderInterests(): void {
  interestList.innerHTML = "";

  interests.forEach((interest) => {
    const listItem = document.createElement("li");
    listItem.textContent =
      interest.name + "（" + interest.category + "）";
    interestList.appendChild(listItem);
  });
}

// 處理表單提交事件
interestForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newInterest = interestInput.value.trim();

  if (newInterest === "") {
    formMessage.textContent = "請輸入興趣內容。";
    return;
  }

  interests.push({
    name: newInterest,
    category: "自訂"
  });

  interestInput.value = "";
  formMessage.textContent = "新增興趣成功！";
  renderInterests();
});

// 頁面載入時先顯示原本的興趣
renderInterests();

