# Week 3：HTML 網頁基礎

## 本週定位

Week 2 已學會使用 Git 記錄與同步檔案。本週開始製作真正的網頁，學習 HTML（HyperText Markup Language）的文件結構與常用元素，並完成第一個個人自我介紹頁面。

本週的開發流程是：

~~~text
建立 index.html
      ↓
撰寫 HTML 文件結構
      ↓
加入文字、連結、圖片與清單
      ↓
加入表格與區塊元素
      ↓
在瀏覽器檢查結果
      ↓
使用 Git 記錄並同步
~~~

---

## 一、本週學習目標

完成本週後，你應該能夠：

1. 說明 HTML、CSS 與 JavaScript 的角色差異。
2. 建立符合基本結構的 HTML 文件。
3. 使用標題、段落、連結、圖片、清單與表格。
4. 理解 HTML 元素、標籤、屬性與巢狀結構。
5. 使用語意化元素組織網頁內容。
6. 使用瀏覽器與開發者工具檢查 HTML。
7. 將 HTML 檔案加入 Git，建立 commit 並同步到 GitHub。

---

## 二、HTML、CSS 與 JavaScript 的分工

可以把網頁想成一棟房子：

| 技術 | 角色 | 例子 |
|---|---|---|
| HTML | 結構與內容 | 標題、段落、圖片、表格 |
| CSS | 外觀與版面 | 顏色、字型、間距、排列 |
| JavaScript | 行為與互動 | 按鈕事件、表單檢查、資料更新 |

本週先專注 HTML。外觀會在 Week 4 使用 CSS 設計，互動功能則會在後續課程加入。

---

## 三、HTML 基本觀念

### 元素與標籤

HTML 通常由元素組成：

~~~html
<p>這是一個段落。</p>
~~~

<code>&lt;p&gt;</code> 是開始標籤，<code>&lt;/p&gt;</code> 是結束標籤，中間的文字是內容。開始標籤、內容與結束標籤合在一起，就是一個段落元素。

有些元素沒有成對的結束標籤，例如圖片：

~~~html
<img src="profile.jpg" alt="個人照片">
~~~

### 屬性

屬性提供元素額外資訊，寫在開始標籤中：

~~~html
<a href="https://www.tku.edu.tw/">淡江大學</a>
~~~

這裡的 <code>href</code> 是連結網址。屬性通常使用 <code>name="value"</code> 的格式。

### 巢狀結構

元素可以放在其他元素裡面，但必須正確關閉：

~~~html
<div>
  <h2>我的興趣</h2>
  <p>我喜歡閱讀與寫程式。</p>
</div>
~~~

縮排可以幫助閱讀，也能讓巢狀關係更清楚。

---

## 四、建立第一個 HTML 文件

### 步驟 1：建立 index.html

在 Week 2 的 Repository 資料夾中建立 <code>index.html</code>，輸入以下內容：

~~~html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的第一個網頁</title>
</head>
<body>
  <h1>你好，這是我的第一個網頁</h1>
  <p>我是淡江大學的學生，正在學習網頁程式設計。</p>
</body>
</html>
~~~

### 步驟 2：在瀏覽器開啟

在 VS Code 的檔案總管中，對 <code>index.html</code> 按右鍵並選擇「在檔案總管中顯示」，再用瀏覽器開啟檔案。

也可以在檔案總管中直接雙擊 <code>index.html</code>。修改並儲存後，回到瀏覽器重新整理頁面。

### 文件結構說明

| 元素 | 用途 |
|---|---|
| <code>&lt;!DOCTYPE html&gt;</code> | 宣告這是一份 HTML5 文件 |
| <code>&lt;html lang="zh-Hant"&gt;</code> | HTML 文件根元素，並標示繁體中文 |
| <code>&lt;head&gt;</code> | 放置編碼、標題與其他文件設定 |
| <code>&lt;meta charset="UTF-8"&gt;</code> | 支援中文等多國文字 |
| <code>&lt;meta name="viewport"...&gt;</code> | 讓手機瀏覽時能正確縮放 |
| <code>&lt;title&gt;</code> | 瀏覽器分頁顯示的標題 |
| <code>&lt;body&gt;</code> | 使用者在頁面上看到的內容 |

---

## 五、常用文字元素

### 標題與段落

HTML 有六層標題：

~~~html
<h1>頁面主標題</h1>
<h2>主要區段</h2>
<h3>次要區段</h3>
<h4>小節標題</h4>
<h5>較小標題</h5>
<h6>最小層級標題</h6>
~~~

通常一個頁面應有清楚的 <code>h1</code>，再依內容層級使用 <code>h2</code>、<code>h3</code>。不要只因為字體大小而跳過標題層級。

~~~html
<p>段落使用 p 元素表示。不同段落應分開使用不同的 p 元素。</p>
<p>HTML 的換行與空白不等同於文字編輯器中的排版。</p>
~~~

### 強調文字

~~~html
<strong>重要內容</strong>
<em>需要強調的內容</em>
~~~

<code>strong</code> 表示重要性，<code>em</code> 表示語氣上的強調；不要只為了粗體或斜體外觀而濫用。

### 註解

~~~html
<!-- 這段文字不會顯示在網頁上，但可以提供開發者備註 -->
~~~

註解不應放入密碼、Token 或其他敏感資訊，因為使用者仍可在瀏覽器查看原始碼。

---

## 六、連結與圖片

### 超連結

~~~html
<a href="https://www.tku.edu.tw/">淡江大學</a>
<a href="about.html">關於我</a>
<a href="mailto:example@example.com">寄信給我</a>
~~~

若要在新分頁開啟外部連結，可以使用：

~~~html
<a href="https://github.com/" target="_blank" rel="noreferrer">
  GitHub
</a>
~~~

使用 <code>target="_blank"</code> 時，建議同時加入 <code>rel="noreferrer"</code>。

### 圖片

~~~html
<img src="images/profile.jpg" alt="穿著白色上衣的個人照片">
~~~

- <code>src</code> 指定圖片路徑。
- <code>alt</code> 提供圖片替代文字，對無法看到圖片的使用者很重要。
- 圖片檔案建議放在 Repository 中的 <code>images</code> 資料夾。
- 檔名避免使用空格與特殊符號，並注意大小寫。

不要使用不存在的圖片路徑，也不要把他人的圖片當成自己的作品。若使用網路圖片，請確認授權與來源。

---

## 七、清單

### 無序清單

適合表示沒有先後順序的項目：

~~~html
<h2>我的興趣</h2>
<ul>
  <li>閱讀</li>
  <li>攝影</li>
  <li>學習程式設計</li>
</ul>
~~~

### 有序清單

適合表示有順序的步驟：

~~~html
<h2>建立網頁的步驟</h2>
<ol>
  <li>建立 HTML 文件</li>
  <li>加入內容</li>
  <li>在瀏覽器檢查結果</li>
</ol>
~~~

不要用一堆空白或符號取代清單元素，正確的 HTML 結構比較容易閱讀，也有助於輔助科技理解內容。

---

## 八、表格

表格適合呈現具有欄列關係的資料，不適合拿來排版整個網頁。

~~~html
<table>
  <caption>本學期學習內容</caption>
  <thead>
    <tr>
      <th scope="col">週次</th>
      <th scope="col">主題</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Week 1</td>
      <td>GitHub 與開發環境</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Git 基礎與版本控制</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>HTML 網頁基礎</td>
    </tr>
  </tbody>
</table>
~~~

| 元素 | 用途 |
|---|---|
| <code>table</code> | 整個表格 |
| <code>caption</code> | 表格標題 |
| <code>thead</code> | 表頭區域 |
| <code>tbody</code> | 資料內容區域 |
| <code>tr</code> | 一列 |
| <code>th</code> | 表頭儲存格 |
| <code>td</code> | 一般資料儲存格 |

---

## 九、區塊與語意化元素

### div 與 span

<code>div</code> 是一般區塊容器，<code>span</code> 是一般行內容器。它們本身沒有特殊語意，通常會在 CSS 或 JavaScript 中使用。

~~~html
<div>
  <span>這是一段行內文字。</span>
</div>
~~~

不要所有內容都使用 <code>div</code>；能使用更適合的語意化元素時，應優先使用語意化元素。

### 常見語意化元素

~~~html
<header>
  <h1>我的個人網站</h1>
</header>

<nav>
  <a href="index.html">首頁</a>
  <a href="about.html">關於我</a>
</nav>

<main>
  <section>
    <h2>自我介紹</h2>
    <p>這是主要內容。</p>
  </section>
</main>

<footer>
  <p>© 2026 我的名字</p>
</footer>
~~~

| 元素 | 適合內容 |
|---|---|
| <code>header</code> | 頁首或區段開頭 |
| <code>nav</code> | 主要導覽連結 |
| <code>main</code> | 頁面的主要內容，每頁通常一個 |
| <code>section</code> | 有主題標題的內容區段 |
| <code>article</code> | 可獨立閱讀或分享的內容 |
| <code>footer</code> | 頁尾或區段結尾 |

語意化 HTML 能讓結構更清楚，也有助於搜尋引擎、螢幕閱讀器與後續維護。

---

## 十、課堂練習：製作個人自我介紹頁面

請將 <code>index.html</code> 擴充成個人自我介紹頁面，至少包含：

- 一個頁面主標題 <code>h1</code>。
- 一段自我介紹 <code>p</code>。
- 一張有正確 <code>alt</code> 的圖片。
- 一個外部連結與一個本機頁面連結。
- 一份興趣或技能清單。
- 一個包含至少三列資料的表格。
- 使用 <code>header</code>、<code>nav</code>、<code>main</code>、<code>section</code> 與 <code>footer</code> 組織頁面。

建議頁面結構：

~~~text
你的 Repository
├── index.html
└── images
    └── profile.jpg
~~~

完成後，建立 <code>about.html</code> 作為個人介紹頁，並從 <code>index.html</code> 連結到它：

~~~html
<a href="about.html">關於我</a>
~~~

兩個頁面至少要有一個可以互相連回去的導覽連結。

---

## 十一、檢查 HTML

### 瀏覽器檢查

1. 儲存檔案。
2. 用瀏覽器開啟 <code>index.html</code>。
3. 重新整理頁面。
4. 逐項確認文字、連結、圖片、清單與表格是否正確顯示。
5. 點擊所有連結，確認沒有連到錯誤位置。

### 開發者工具

在瀏覽器按下 <code>F12</code>，開啟 Developer Tools：

- 在 Elements 查看 HTML 結構。
- 在 Console 查看錯誤訊息。
- 右鍵頁面選擇「檢查」也可以開啟工具。

若圖片無法顯示，先檢查 <code>src</code> 路徑、檔名大小寫與檔案位置。若連結無法開啟，先檢查 <code>href</code> 是否拼寫正確。

---

## 十二、使用 Git 記錄本週成果

完成 HTML 後，在 Repository 資料夾執行：

~~~powershell
git status
git diff
git add index.html about.html images/
git commit -m "Create personal introduction pages"
git log --oneline
git push
~~~

如果沒有建立 <code>about.html</code> 或 <code>images</code> 資料夾，請依實際檔案調整 <code>git add</code> 後面的內容。

確認 GitHub 頁面已出現本週的 HTML 檔案。若只想查看這次準備提交的內容，可先執行：

~~~powershell
git diff --staged
~~~

---

## 十三、常見問題

### 瀏覽器顯示原始 HTML 文字

通常是檔案副檔名錯誤，例如實際檔名是 <code>index.html.txt</code>。請在檔案總管開啟「顯示副檔名」後確認。

### 中文顯示成亂碼

請確認 <code>head</code> 中包含：

~~~html
<meta charset="UTF-8">
~~~

並確認檔案以 UTF-8 編碼儲存。

### 圖片顯示破損圖示

請檢查：

1. 圖片檔案是否真的存在。
2. <code>src</code> 路徑是否正確。
3. 檔名大小寫是否完全相同。
4. 圖片格式是否為瀏覽器支援的格式。

### 點擊連結後找不到頁面

本機檔案連結要使用相對路徑。例如同一層的 <code>about.html</code> 使用 <code>href="about.html"</code>；放在子資料夾的檔案則需寫出正確資料夾名稱。

### 表格看起來沒有框線

HTML 負責表格結構，外觀與框線會在 Week 4 使用 CSS 處理。只要資料列與欄位結構正確即可。

### Git 沒有追蹤圖片

請確認圖片檔案位於 Repository 內，並使用 <code>git status</code> 查看狀態。圖片太大時，先詢問教師或助教適合的處理方式。

---

## 十四、本週完成檢核

- [ ] 已建立結構完整的 <code>index.html</code>。
- [ ] 已正確使用 <code>h1</code>、<code>h2</code> 與段落。
- [ ] 已加入外部連結與本機頁面連結。
- [ ] 已加入具有 <code>alt</code> 的圖片。
- [ ] 已加入無序清單或有序清單。
- [ ] 已建立具有表頭與資料列的表格。
- [ ] 已使用語意化元素組織頁面。
- [ ] 已建立 <code>about.html</code> 並完成頁面互連。
- [ ] 已在瀏覽器檢查頁面與所有連結。
- [ ] 已建立 Git commit 並 push 到 GitHub。

---

## 十五、本週重點回顧

- HTML 負責網頁的結構與內容。
- 元素由標籤、內容與屬性組成，巢狀結構要正確關閉。
- <code>h1</code> 到 <code>h6</code> 表示標題層級；<code>p</code> 表示段落。
- <code>a</code> 建立連結，<code>img</code> 顯示圖片，圖片應提供 <code>alt</code>。
- <code>ul</code>、<code>ol</code>、<code>li</code> 建立清單；<code>table</code> 建立資料表格。
- 優先使用有意義的語意化元素，而不是所有內容都放在 <code>div</code> 裡。
- Week 4 將使用 CSS 美化頁面、處理版面與響應式設計。

