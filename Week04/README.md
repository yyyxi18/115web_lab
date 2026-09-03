# Week 4：CSS 與網頁版面設計

## 本週定位

Week 3 使用 HTML 建立了網頁的結構與內容。本週學習 CSS（Cascading Style Sheets），為網頁加入顏色、字型、間距、邊框與版面配置，並讓頁面能適應不同螢幕尺寸。

本週的開發流程是：

~~~text
HTML 結構
   ↓
連結 style.css
   ↓
設定文字與顏色
   ↓
理解盒模型
   ↓
使用 Flexbox 排版
   ↓
加入 RWD
   ↓
在瀏覽器檢查不同畫面
~~~

---

## 一、本週學習目標

完成本週後，你應該能夠：

1. 說明 HTML 與 CSS 的分工。
2. 使用內嵌、內部與外部 CSS。
3. 使用元素、class 與 id 選擇器。
4. 設定文字、顏色、背景、邊框與間距。
5. 理解 CSS 盒模型。
6. 使用 Flexbox 排列網頁內容。
7. 使用媒體查詢製作基本 RWD。
8. 使用瀏覽器開發者工具檢查 CSS。
9. 使用 Git 記錄並同步本週修改。

---

## 二、HTML 與 CSS 的分工

| 技術 | 負責內容 | 例子 |
|---|---|---|
| HTML | 網頁結構與內容 | 標題、段落、圖片、表格 |
| CSS | 外觀與版面 | 顏色、字型、間距、排列 |
| JavaScript | 行為與互動 | 按鈕事件、資料更新 |

HTML 像房子的結構，CSS 像房子的裝潢。通常不要把大量外觀設定直接寫在 HTML 元素上，而是使用獨立的 CSS 檔案，讓內容與設計分開管理。

---

## 三、加入 CSS 的三種方式

### 1. 行內 CSS

直接寫在 HTML 元素的 <code>style</code> 屬性中：

~~~html
<p style="color: blue;">這段文字是藍色。</p>
~~~

行內 CSS 適合少量測試，但不適合整個網站，因為不容易維護。

### 2. 內部 CSS

在 HTML 的 <code>head</code> 中加入 <code>style</code>：

~~~html
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
~~~

適合單一頁面的快速練習。

### 3. 外部 CSS

建立獨立的 <code>style.css</code>，再從 HTML 連結：

~~~html
<head>
  <link rel="stylesheet" href="style.css">
</head>
~~~

這是本課程主要使用的方式。多個 HTML 頁面可以共用同一份 CSS。

---

## 四、建立 style.css

在 Week 3 的 <code>index.html</code> 所在資料夾建立 <code>style.css</code>：

~~~text
Week03
├── index.html
├── about.html
├── style.css
└── images
    └── profile.jpg
~~~

在 <code>index.html</code> 的 <code>head</code> 中加入：

~~~html
<link rel="stylesheet" href="style.css">
~~~

接著在 <code>style.css</code> 寫入：

~~~css
/* 設定整個網頁的基本文字與背景 */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f7fb;
  color: #243447;
  line-height: 1.6;
  margin: 0;
}

/* 設定頁首與頁尾 */
header,
footer {
  background-color: #234e70;
  color: white;
  padding: 24px;
  text-align: center;
}

/* 設定主要內容區域 */
main {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
}
~~~

儲存後重新整理瀏覽器，應該可以看到網頁背景、文字、頁首與頁尾發生變化。

---

## 五、CSS 基本語法

CSS 規則由選擇器、屬性與值組成：

~~~css
選擇器 {
  屬性: 值;
}
~~~

例如：

~~~css
h1 {
  color: #ffffff;
  font-size: 36px;
}
~~~

- <code>h1</code> 是選擇器。
- <code>color</code> 與 <code>font-size</code> 是屬性。
- <code>#ffffff</code> 與 <code>36px</code> 是值。
- 每一個屬性設定後通常以分號 <code>;</code> 結尾。

CSS 註解寫法：

~~~css
/* 這是 CSS 註解，不會顯示在網頁上 */
~~~

---

## 六、CSS 選擇器

### 元素選擇器

套用到所有相同的 HTML 元素：

~~~css
p {
  color: #34495e;
}

h2 {
  color: #234e70;
}
~~~

### class 選擇器

HTML：

~~~html
<p class="highlight">這是一段需要特別強調的文字。</p>
~~~

CSS：

~~~css
.highlight {
  background-color: #fff3cd;
  padding: 8px;
}
~~~

class 前面使用英文句點 <code>.</code>。同一個 class 可以套用到多個元素。

### id 選擇器

HTML：

~~~html
<section id="contact">
  <h2>聯絡方式</h2>
</section>
~~~

CSS：

~~~css
#contact {
  border: 2px solid #234e70;
}
~~~

id 前面使用井字號 <code>#</code>。同一個 HTML 頁面中，一個 id 通常只使用一次。

### 後代選擇器

只選取某個元素裡面的元素：

~~~css
nav a {
  color: white;
  text-decoration: none;
}
~~~

這會選取 <code>nav</code> 裡面的所有連結。

---

## 七、文字、顏色與背景

~~~css
body {
  color: #243447;
  font-family: Arial, sans-serif;
  font-size: 16px;
}

h1 {
  color: white;
  font-size: 2rem;
  text-align: center;
}

p {
  line-height: 1.8;
}

a {
  color: #1769aa;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
~~~

常用顏色格式：

~~~css
/* 顏色名稱 */
color: blue;

/* 十六進位色碼 */
color: #234e70;

/* RGB */
color: rgb(35, 78, 112);
~~~

常見文字設定包括：

- <code>color</code>：文字顏色。
- <code>font-family</code>：字型。
- <code>font-size</code>：文字大小。
- <code>font-weight</code>：文字粗細。
- <code>text-align</code>：文字對齊。
- <code>line-height</code>：行高。
- <code>text-decoration</code>：文字裝飾。

---

## 八、CSS 盒模型

HTML 元素可以想成一個盒子，由內到外依序是：

~~~text
content（內容）
   ↓
padding（內距）
   ↓
border（邊框）
   ↓
margin（外距）
~~~

~~~css
.card {
  width: 300px;
  padding: 20px;
  border: 2px solid #d0d7de;
  margin: 16px;
  background-color: white;
}
~~~

| 屬性 | 意義 |
|---|---|
| <code>width</code>、<code>height</code> | 內容區域的寬與高 |
| <code>padding</code> | 內容與邊框之間的距離 |
| <code>border</code> | 元素的邊框 |
| <code>margin</code> | 元素與其他元素之間的距離 |

建議加入：

~~~css
* {
  box-sizing: border-box;
}
~~~

這樣設定寬度時，<code>padding</code> 與 <code>border</code> 會被包含在元素總寬度中，比較容易控制版面。

---

## 九、使用 Flexbox 排版

Flexbox 適合將元素排列成一列或一欄。

HTML：

~~~html
<div class="course-list">
  <article class="course-card">
    <h3>HTML</h3>
    <p>學習網頁結構。</p>
  </article>

  <article class="course-card">
    <h3>CSS</h3>
    <p>學習網頁樣式。</p>
  </article>

  <article class="course-card">
    <h3>JavaScript</h3>
    <p>學習網頁互動。</p>
  </article>
</div>
~~~

CSS：

~~~css
.course-list {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: stretch;
}

.course-card {
  flex: 1;
  padding: 20px;
  background-color: white;
  border: 1px solid #d0d7de;
  border-radius: 8px;
}
~~~

常用 Flexbox 屬性：

| 屬性 | 用途 |
|---|---|
| <code>display: flex</code> | 啟用 Flexbox |
| <code>flex-direction</code> | 設定排列方向 |
| <code>justify-content</code> | 控制主軸對齊 |
| <code>align-items</code> | 控制交叉軸對齊 |
| <code>gap</code> | 設定子元素之間的間距 |
| <code>flex</code> | 控制子元素如何分配空間 |

---

## 十、圖片與表格的 CSS

圖片通常需要限制最大寬度，避免超出畫面：

~~~css
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
~~~

設定表格外觀：

~~~css
table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
}

th,
td {
  border: 1px solid #cbd5e1;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #dbeafe;
}
~~~

<code>max-width: 100%</code> 可以讓圖片在小螢幕中縮小，不超過父元素寬度。

---

## 十一、基本 RWD

RWD（Responsive Web Design，響應式網頁設計）是讓網頁在電腦、平板與手機上都能閱讀。

### 設定 viewport

請確認 HTML 的 <code>head</code> 中有：

~~~html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
~~~

### 媒體查詢

當螢幕寬度小於 600px 時，將卡片改成垂直排列：

~~~css
@media (max-width: 600px) {
  header,
  footer {
    padding: 16px;
  }

  main {
    padding: 16px;
  }

  .course-list {
    flex-direction: column;
  }

  nav a {
    display: block;
    margin: 8px;
  }
}
~~~

不要只用固定的寬度，例如 <code>width: 900px</code>。可以使用：

~~~css
main {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
~~~

---

## 十二、完整 style.css 範例

~~~css
/* 讓寬度計算更容易理解 */
* {
  box-sizing: border-box;
}

/* 整個網頁的基本設定 */
body {
  margin: 0;
  color: #243447;
  background-color: #f4f7fb;
  font-family: Arial, "Microsoft JhengHei", sans-serif;
  line-height: 1.6;
}

/* 頁首與頁尾 */
header,
footer {
  padding: 24px;
  color: white;
  text-align: center;
  background-color: #234e70;
}

/* 導覽列 */
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

/* 主要內容 */
main {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
}

/* 內容區段 */
section,
main > div {
  margin-bottom: 24px;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* 標題與文字 */
h1 {
  margin-top: 0;
}

h2 {
  color: #234e70;
}

p {
  line-height: 1.8;
}

/* 圖片 */
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

/* 清單 */
li {
  margin-bottom: 8px;
}

/* 表格 */
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px;
  border: 1px solid #cbd5e1;
  text-align: left;
}

th {
  background-color: #dbeafe;
}

/* 手機版面 */
@media (max-width: 600px) {
  header,
  footer {
    padding: 16px;
  }

  main {
    width: 100%;
    padding: 16px;
  }

  section,
  main > div {
    padding: 16px;
  }

  nav {
    flex-direction: column;
    gap: 8px;
  }

  table {
    font-size: 14px;
  }
}
~~~

---

## 十三、課堂練習

請以 Week 3 的 <code>index.html</code> 為基礎：

1. 建立 <code>style.css</code>。
2. 在 <code>index.html</code> 的 <code>head</code> 連結 CSS。
3. 設定頁首、頁尾與主要內容的背景色。
4. 設定標題、段落與連結的樣式。
5. 設定圖片寬度、圓角與表格框線。
6. 使用 Flexbox 排列導覽列。
7. 加入媒體查詢，測試手機畫面。
8. 將相同的 CSS 連結到 <code>about.html</code>。

建議資料夾結構：

~~~text
Week03
├── index.html
├── about.html
├── style.css
└── images
    └── profile.jpg
~~~

---

## 十四、使用瀏覽器檢查 CSS

開啟瀏覽器開發者工具：

1. 按下 <code>F12</code>，或在頁面上按右鍵選擇「檢查」。
2. 在 Elements 查看 HTML 結構。
3. 在 Styles 查看目前套用的 CSS。
4. 取消勾選某個 CSS 屬性，觀察畫面變化。
5. 使用裝置工具列切換手機與桌面尺寸。

如果樣式沒有生效，依序檢查：

- <code>link</code> 的 <code>href</code> 路徑是否正確。
- <code>style.css</code> 檔名是否拼寫正確。
- CSS 大括號是否成對。
- 屬性後面是否有冒號與分號。
- CSS 選擇器是否對應正確的 HTML 元素、class 或 id。
- 儲存檔案後是否重新整理頁面。

---

## 十五、使用 Git 記錄本週成果

在 Repository 資料夾執行：

~~~powershell
git status
git diff
git add style.css index.html about.html
git commit -m "Add CSS styles and responsive layout"
git log --oneline
git push
~~~

如果只修改了部分檔案，請依實際狀況調整 <code>git add</code> 後面的檔名。

---

## 十六、本週完成檢核

- [ ] 已建立 <code>style.css</code>。
- [ ] HTML 已正確連結外部 CSS。
- [ ] 已設定文字、顏色與背景。
- [ ] 已理解 padding、border 與 margin 的差異。
- [ ] 已使用元素、class 或 id 選擇器。
- [ ] 已設定圖片與表格樣式。
- [ ] 已使用 Flexbox 排列內容。
- [ ] 已加入基本媒體查詢。
- [ ] 已在手機與桌面尺寸檢查頁面。
- [ ] 已建立 Git commit 並 push 到 GitHub。

---

## 十七、本週重點回顧

- HTML 負責結構，CSS 負責外觀與版面。
- 外部 CSS 適合多頁共用與後續維護。
- class 可以套用到多個元素，id 通常代表單一元素。
- 盒模型由 content、padding、border 與 margin 組成。
- Flexbox 可以協助排列頁面內容。
- RWD 需要搭配 viewport 與媒體查詢。
- Week 5 將開始 JavaScript 與 TypeScript，讓網頁加入程式邏輯與互動功能。

