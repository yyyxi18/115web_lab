// Week 6：由 main.ts 編譯後提供瀏覽器執行的 JavaScript

var title = document.querySelector("#title");
var message = document.querySelector("#message");
var changeButton = document.querySelector("#change-button");

changeButton.addEventListener("click", function () {
  title.textContent = "標題已經改變了！";
  message.textContent = "這段文字是由 TypeScript 修改的。";
});

var nameInput = document.querySelector("#name-input");
var greetButton = document.querySelector("#greet-button");
var greeting = document.querySelector("#greeting");

greetButton.addEventListener("click", function () {
  var name = nameInput.value.trim();

  if (name === "") {
    greeting.textContent = "請先輸入姓名。";
    return;
  }

  greeting.textContent = "你好，" + name + "！";
});

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
  interestList.innerHTML = "";

  interests.forEach(function (interest) {
    var listItem = document.createElement("li");
    listItem.textContent =
      interest.name + "（" + interest.category + "）";
    interestList.appendChild(listItem);
  });
}

interestForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var newInterest = interestInput.value.trim();

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

renderInterests();

