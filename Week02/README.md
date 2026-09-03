# Week 2：Git 基礎與版本控制

## 本週定位

Week 1 已完成 GitHub Repository 建立、Git 安裝與 clone。本週開始進入 Git 的核心操作，練習把「修改檔案」轉換成可追蹤、可回顧、可同步的版本紀錄。

本週的主要流程是：

~~~text
修改檔案
   ↓
git status
   ↓
git diff
   ↓
git add
   ↓
git commit
   ↓
git log
   ↓
git push
~~~

---

## 一、本週學習目標

完成本週後，你應該能夠：

1. 設定 Git 提交紀錄使用的姓名與電子郵件。
2. 說明工作目錄、暫存區、Repository 與 GitHub 遠端 Repository 的差異。
3. 使用 <code>git status</code> 查看檔案狀態。
4. 使用 <code>git diff</code> 查看尚未加入暫存區的修改。
5. 使用 <code>git add</code> 將修改加入暫存區。
6. 使用 <code>git commit</code> 建立清楚的版本紀錄。
7. 使用 <code>git log</code> 查看提交歷史。
8. 使用 <code>git push</code> 將本機 commit 同步到 GitHub。
9. 使用 <code>git pull</code> 取得遠端最新版本。
10. 使用 <code>.gitignore</code> 排除不應提交的檔案。

---

## 二、Git 的四個重要位置

可以把一次 Git Workflow 想成檔案依序經過四個位置：

| 位置 | 意義 |
|---|---|
| 工作目錄 Working Directory | 你目前正在編輯的檔案 |
| 暫存區 Staging Area | 下一次 commit 準備要記錄的修改 |
| 本機 Repository | 已經 commit、保存在本機的版本歷史 |
| 遠端 Repository | GitHub 上供備份與協作的 Repository |

~~~text
工作目錄 → 暫存區 → 本機 Repository → GitHub 遠端 Repository
 修改       git add      git commit          git push
~~~

<code>git pull</code> 則是將 GitHub 上的最新內容取得並整合到本機。

---

## 三、設定 Git 使用者資訊

第一次建立 commit 前，請設定提交紀錄會使用的姓名與電子郵件：

~~~powershell
git config --global user.name "你的姓名"
git config --global user.email "你的 GitHub 電子郵件"
~~~

查看目前設定：

~~~powershell
git config --global user.name
git config --global user.email
~~~

這些資訊會出現在 Git 的 commit 紀錄中，不是 GitHub 登入密碼。建議使用與 GitHub 帳號相關的電子郵件；若啟用 GitHub 隱私設定，也可以使用 GitHub 提供的 no-reply 電子郵件。

---

## 四、課堂實作：完成第一個 Git Workflow

### 步驟 1：確認目前位於自己的 Repository

開啟 VS Code 的 Terminal，進入 Week 1 clone 下來的專案資料夾：

~~~powershell
cd C:\Projects\115web_你的學號
pwd
dir
~~~

應該可以看到 Repository 中的 <code>README.md</code>。PowerShell 也可以使用 <code>ls</code> 查看目錄內容：

~~~powershell
ls
~~~

如果看不到自己的 Repository，請先確認目前路徑，不要在錯誤的資料夾執行 Git 指令。

### 步驟 2：設定 Git 使用者資訊

依照上一節指令完成設定，並再次查看姓名與電子郵件。

### 步驟 3：修改 README.md

使用 VS Code 開啟根目錄的 <code>README.md</code>，在檔案最後加入：

~~~markdown
## Week 2 練習

本週學習 Git 基礎與版本控制。
~~~

儲存檔案。這是本週第一次要被 Git 追蹤的修改。

### 步驟 4：查看狀態

~~~powershell
git status
~~~

你應該會看到 <code>README.md</code> 出現在「modified」或「Changes not staged for commit」相關訊息中。

<code>git status</code> 只會告訴你哪些檔案有狀態變化，不會顯示每一行的詳細差異。

### 步驟 5：查看修改內容

~~~powershell
git diff
~~~

確認畫面中的修改就是你剛剛加入的 Week 2 內容。若內容不正確，先回到編輯器修正，不要急著建立 commit。

### 步驟 6：加入暫存區

~~~powershell
git add README.md
git status
~~~

再次執行 <code>git status</code>，<code>README.md</code> 應該會出現在「Changes to be committed」中。

若確定目前所有修改都要加入，也可以使用：

~~~powershell
git add .
~~~

初學時建議先指定檔名，較容易知道這次準備提交哪些內容。

### 步驟 7：建立 commit

~~~powershell
git commit -m "Update README for Week 2"
~~~

commit 訊息應該簡短、清楚，說明這次完成的事情。不要使用「更新」、「修改」這類無法看出內容的訊息。

### 步驟 8：查看 commit 歷史

~~~powershell
git log --oneline
~~~

你應該可以看到剛剛建立的 commit。<code>--oneline</code> 會用較精簡的格式顯示短版 commit ID 與訊息。

### 步驟 9：推送到 GitHub

~~~powershell
git push
~~~

完成後重新整理 GitHub Repository 頁面，確認 README 已出現 Week 2 練習內容。

---

## 五、常用 Git 指令

| 指令 | 用途 |
|---|---|
| <code>git status</code> | 查看目前檔案狀態 |
| <code>git diff</code> | 查看尚未加入暫存區的修改 |
| <code>git diff --staged</code> | 查看已加入暫存區的修改 |
| <code>git add 檔名</code> | 將指定檔案加入暫存區 |
| <code>git add .</code> | 將目前資料夾中的修改加入暫存區 |
| <code>git commit -m "訊息"</code> | 建立一筆版本紀錄 |
| <code>git log</code> | 查看完整提交歷史 |
| <code>git log --oneline</code> | 以精簡格式查看歷史 |
| <code>git push</code> | 將本機 commit 推送到 GitHub |
| <code>git pull</code> | 取得並整合 GitHub 的最新內容 |

---

## 六、建立第二個版本

請再對 <code>README.md</code> 做一項小修改，例如加入：

~~~markdown
- 我已完成第一次 commit。
~~~

接著依序執行：

~~~powershell
git status
git diff
git add README.md
git diff --staged
git commit -m "Add Git practice note"
git log --oneline
git push
~~~

完成後，使用 <code>git log --oneline</code> 確認至少有兩筆本週建立的 commit。

---

## 七、git pull：先取得遠端更新

當多人共同使用一個 Repository，或你曾在 GitHub 網頁上修改檔案時，本機可能不是最新版本。此時可以執行：

~~~powershell
git pull
~~~

建議開始工作前先執行 <code>git pull</code>。如果本機有尚未提交的修改，先查看 <code>git status</code>，確認狀態後再決定是否暫存或提交。

本週個人練習中，若沒有其他遠端修改，<code>git pull</code> 可能會顯示已是最新版本，這是正常結果。

---

## 八、.gitignore：不要把不該提交的檔案放進 Repository

<code>.gitignore</code> 是一個檔案，列出 Git 不應追蹤的檔案或資料夾。例如：

~~~gitignore
node_modules/
.env
*.log
.DS_Store
~~~

常見不應提交的內容包括：

- 密碼、API Key、Token 等敏感資訊。
- <code>.env</code> 環境設定檔。
- <code>node_modules/</code> 套件資料夾。
- 編輯器或作業系統產生的暫存檔。
- 大型且可由套件管理工具重新產生的檔案。

### 練習建立 .gitignore

在 Repository 根目錄建立檔案 <code>.gitignore</code>，加入：

~~~gitignore
node_modules/
.env
*.log
~~~

接著查看狀態：

~~~powershell
git status
~~~

<code>.gitignore</code> 本身可以被提交，但符合規則的檔案不會出現在待提交清單中。

---

## 九、常見問題

### <code>Author identity unknown</code>

表示尚未設定 Git 使用者資訊。請執行：

~~~powershell
git config --global user.name "你的姓名"
git config --global user.email "你的 GitHub 電子郵件"
~~~

再重新執行 commit。

### <code>git push</code> 要求登入或驗證

GitHub 可能要求使用瀏覽器登入、Personal Access Token 或 SSH 驗證。請依畫面提示完成驗證，不要把密碼或 Token 寫進程式碼或提交紀錄。

### <code>nothing to commit, working tree clean</code>

表示目前沒有尚未提交的修改。請確認檔案已儲存，或先使用 <code>git log --oneline</code> 查看最近的提交。

### <code>git diff</code> 沒有內容

可能是檔案尚未修改、修改後尚未儲存，或修改已經加入暫存區。若要查看已暫存內容，請使用：

~~~powershell
git diff --staged
~~~

### <code>src refspec main does not match any</code>

通常表示本機尚未建立任何 commit。請先確認檔案狀態、加入暫存區並建立第一筆 commit，再進行 push。

### 不小心執行了 <code>git add</code>

可以先查看暫存內容：

~~~powershell
git diff --staged
~~~

如果只是不想提交某個檔案，可以執行：

~~~powershell
git restore --staged 檔名
~~~

這只會將檔案移出暫存區，不會刪除你的修改。

### commit 訊息寫錯了

如果尚未 push，可以使用以下指令修改最近一筆 commit 訊息：

~~~powershell
git commit --amend -m "新的 commit 訊息"
~~~

初學時若已經 push，請先詢問教師或助教，不要自行改寫已分享的歷史。

---

## 十、課堂練習與完成檢核

- [ ] 已設定 Git 使用者姓名與電子郵件。
- [ ] 已修改 README.md 並儲存。
- [ ] 能使用 <code>git status</code> 查看修改狀態。
- [ ] 能使用 <code>git diff</code> 查看修改內容。
- [ ] 已使用 <code>git add</code> 加入暫存區。
- [ ] 已使用 <code>git commit</code> 建立至少兩筆 commit。
- [ ] 能使用 <code>git log --oneline</code> 查看歷史。
- [ ] 已使用 <code>git push</code>，並在 GitHub 確認內容更新。
- [ ] 已理解 <code>git pull</code> 的用途。
- [ ] 已建立並理解 <code>.gitignore</code> 的基本規則。

---

## 十一、課後作業

請在自己的 Repository 完成：

1. 修改 <code>README.md</code>，加入本週學習摘要。
2. 建立至少兩筆有意義的 commit。
3. 將 commit push 到 GitHub。
4. 建立 <code>.gitignore</code>，至少包含 <code>node_modules/</code>、<code>.env</code> 與 <code>*.log</code>。


## 十二、本週重點回顧

- 修改檔案後，先用 <code>git status</code> 與 <code>git diff</code> 檢查。
- <code>git add</code> 將修改放入暫存區；<code>git commit</code> 建立本機版本紀錄。
- <code>git log</code> 可以查看提交歷史。
- <code>git push</code> 將本機 commit 同步到 GitHub；<code>git pull</code> 取得遠端更新。
- <code>.gitignore</code> 用來排除不應提交的檔案。
- 每次 commit 都應該是小而清楚、可以說明的工作單位。
- Week 3 將開始 HTML，建立 <code>index.html</code> 並學習網頁文件結構。

