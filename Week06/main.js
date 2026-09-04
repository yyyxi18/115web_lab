// Week 6：由 main.ts 編譯後提供瀏覽器執行的 JavaScript

// 第一部分：取得標題、訊息與按鈕元素
// querySelector 使用 CSS 選擇器尋找 HTML 元素
var title = document.querySelector("#title");
var message = document.querySelector("#message");
var changeButton = document.querySelector("#change-button");

// 監聽按鈕的 click 事件，修改畫面上的文字內容
changeButton.addEventListener("click", function () {
  title.textContent = "標題已經改變了！";
  message.textContent = "這段文字是由 TypeScript 修改的。";
});

// 第二部分：取得姓名輸入框、打招呼按鈕與結果區域
var nameInput = document.querySelector("#name-input");
var greetButton = document.querySelector("#greet-button");
var greeting = document.querySelector("#greeting");

// 監聽打招呼按鈕，讀取輸入框內容並顯示訊息
greetButton.addEventListener("click", function () {
  var name = nameInput.value.trim();

  if (name === "") {
    greeting.textContent = "請先輸入姓名。";
    return;
  }

  greeting.textContent = "你好，" + name + "！";
});

// 使用陣列保存多筆興趣物件資料
var interests = [
  { name: "閱讀", category: "休閒" },
  { name: "攝影", category: "創作" },
  { name: "程式設計", category: "學習" }
];

var interestForm = document.querySelector("#interest-form");
var interestInput = document.querySelector("#interest-input");
var interestList = document.querySelector("#interest-list");
var formMessage = document.querySelector("#form-message");

function renderInterests() {
  // 重新顯示前先清空舊的清單，避免內容重複
  interestList.innerHTML = "";

  // forEach 逐一處理每一筆興趣資料
  interests.forEach(function (interest) {
    // 建立新的 li 元素
    var listItem = document.createElement("li");
    // 將資料放入 li 的文字內容
    listItem.textContent =
      interest.name + "（" + interest.category + "）";
    interestList.appendChild(listItem);
  });
}

// 第三部分：處理表單提交事件
interestForm.addEventListener("submit", function (event) {
  // 阻止表單送出後重新整理頁面
  event.preventDefault();

  var newInterest = interestInput.value.trim();

  if (newInterest === "") {
    formMessage.textContent = "請輸入興趣內容。";
    return;
  }

  // 將使用者輸入的新興趣加入陣列
  interests.push({
    name: newInterest,
    category: "自訂"
  });

  interestInput.value = "";
  formMessage.textContent = "新增興趣成功！";
  renderInterests();
});

renderInterests();
