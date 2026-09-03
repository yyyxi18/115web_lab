# Week1：課程大綱、GitHub 與開發環境建立

### 實習：20%

- 出席：20%
- 作業：80%
- 請假：請附假單，並將 Teams 已核准的電子檔提供給助教。

### 聯絡方式

Teams：615630356@o365.tku.edu

---

## GitHub 與開發環境建立

本週定位：建立整學期 Web 開發所需的 GitHub Repository 與本機工作環境。第一週先學會建立 Repository、在 C 槽建立 `Projects` 資料夾，並將 Repository clone 到本機；Git 指令會在第二週進一步介紹。

---

## 一、課程與實習課定位

### 正課與實習課的分工

本課程的正課與實習課彼此配合，但學習重點不同：

| 正課「網路程式設計」 | 實習課「網路程式設計實習」 |
|---|---|
| 網路架構、通訊協定與學術知識 | Web 開發工具與實際製作 |
| 理解網路如何運作 | 把網頁與 Web Application 做出來 |
| 建立網路通訊的理論基礎 | 使用 Git、GitHub、HTML、CSS、JavaScript 與後端技術 |

你已經在大二接觸過基礎程式設計與網路通訊，因此實習課不會重新從變數、迴圈或 TCP/IP 基礎開始，而是將既有知識應用在完整的網站開發流程中。

### 本週學習目標

完成本週後，你應該能夠：

1. 說明 Git 與 GitHub 的基本概念及差異。
2. 說明版本控制對團隊開發的重要性。
3. 建立並設定 GitHub 帳號與 Repository。
4. 安裝 Git 與 Visual Studio Code（VS Code）。
5. 確認 Git 已正確安裝。
6. 在 GitHub 建立指定格式的 Repository：`115web_學號`。

---

## 二、整學期學習路線圖

```text
GitHub 與開發環境建立
        ↓
Git 基礎與版本控制
        ↓
HTML 網頁基礎
        ↓
CSS 與網頁版面設計
        ↓
JavaScript 與 TypeScript
        ↓
TypeScript 與 DOM 互動
        ↓
React + TypeScript
        ↓
React 網頁應用開發
        ↓
HTTP、RESTful API 與 Express
        ↓
MongoDB 與 Mongoose
        ↓
前後端資料串接
        ↓
MVC 與 Full Stack CRUD
        ↓
期末 Full Stack Web 專案
```

本週只需要完成第一個階段：**建立 GitHub 帳號、指定 Repository，並將 Repository clone 到本機**。本週不要求撰寫 HTML、設定 Git 使用者資訊、執行 commit 或上傳修改內容。

---

## 三、整學期課程規劃

本學期共 18 週，其中安排 15 週實習課程。第 9 週為期中考週，第 17、18 週為教師彈性教學週。實際上課與繳交日期仍以授課教師公告為準。

| 週 | 日期 | 課程主題 | 學習重點 | 主要實作／產出 |
|---:|---|---|---|---|
| **1** | **9/15** | **GitHub 與開發環境建立** | Git、GitHub、Repository、VS Code、clone | 建立 `115web_學號` Repository 並 clone 至 `C:\Projects` |
| **2** | **9/22** | **Git 基礎與版本控制** | `status`、`add`、`commit`、`log`、`diff`、`push`、`pull`、`.gitignore` | 修改 README，完成 Git Workflow 練習 |
| **3** | **9/29** | **HTML 網頁基礎** | HTML 結構、Heading、Paragraph、Link、Image、List、Table、Div | HW1：製作 `about.html` 個人自我介紹 |
| **4** | **10/6** | **CSS 與網頁版面設計** | Selector、Class、ID、Box Model、Flexbox、基本 RWD | HW2：美化 About Me 並部署 GitHub Pages |
| **5** | **10/13** | **JavaScript 與 TypeScript 入門** | Node.js、npm、JS/TS 差異、型別、變數、條件、迴圈、函式 | HW3：TypeScript 基礎程式練習 |
| **6** | **10/20** | **TypeScript 與 DOM 互動** | Array、Object、Interface、Type、Arrow Function、DOM、Event | 使用 TypeScript 製作互動式網頁 |
| **7** | **10/27** | **React + TypeScript 入門** | Vite、React 專案結構、TSX、Component、Props、State | HW4：將 About Me 改寫成 React |
| **8** | **11/3** | **React 網頁應用開發** | Component 拆分、事件、表單、List Rendering、React Router | 建立多頁式 React Application |
| **9** | **11/10** | **期中考週** | 不上實習課 | — |
| **10** | **11/17** | **HTTP、RESTful API 與 Express** | Request、Response、JSON、Status Code、GET、POST、PUT、DELETE、Route | HW5：建立自己的 REST API |
| **11** | **11/24** | **MongoDB 與 Mongoose** | SQL／NoSQL、Database、Collection、Document、CRUD、Schema、Model | 建立 MongoDB 並由 Express 存取資料 |
| **12** | **12/1** | **前後端串接** | Fetch API、Async/Await、CORS、`.env`、React 呼叫 Express API | HW6：React + Express + MongoDB 串接 |
| **13** | **12/8** | **MVC 架構與 Full Stack CRUD** | Router、Controller、Service、Model、MVC、CRUD | 完成具備 CRUD 的小型 Web Application |
| **14** | **12/15** | **期末專案開發 I** | 專案需求、GitHub 協作、前端 Component、API 規劃、DB Schema | 建立團隊 Repository，完成架構與核心功能 |
| **15** | **12/22** | **期末專案開發 II** | 前後端整合、CRUD、表單驗證、錯誤處理、Git 協作 | 完成 Full Stack 網站主要功能 |
| **16** | **12/29** | **期末專案成果展示** | Demo、系統架構、功能說明、Repository 整理 | 完成網站 Demo 與成果展示 |
| **17** | **1/5** | **不上課** | 教師彈性教學週 | — |
| **18** | **1/12** | **不上課** | 教師彈性教學週 | — |

### 學期專案方向

期末將以一個完整的 Web Application 作為學習成果，例如：

- 活動或課程報名網站
- 社團活動管理網站
- 校園二手物品平台
- 簡易預約或登記系統

專案至少應包含前端頁面、表單、後端 API、資料庫，以及一項以上的 CRUD 功能。實際題目、分組方式與評分規準依授課教師公告為準。

本週請先完成個人 Repository；進入期末專案階段後，會再學習團隊 Repository 與協作流程。

---

## 四、Git 與 GitHub 基本概念

### Git 是什麼？

Git 是一套分散式版本控制系統，可以記錄檔案的修改歷史。它讓我們知道：

- 哪些檔案被修改。
- 修改前後的差異。
- 誰在什麼時間做了哪些修改。
- 需要時如何查看或回到先前的版本。

Git 是安裝在自己電腦上的工具，即使沒有網路，也可以進行許多版本管理工作。

### GitHub 是什麼？

GitHub 是提供 Git Repository 託管與協作功能的網路平台。除了存放程式碼，也常用於：

- 與同學共同開發。
- 備份專案。
- 撰寫 README 與專案文件。
- 追蹤問題與工作進度。
- 展示個人作品集。

### Git 與 GitHub 的差異

| 項目 | Git | GitHub |
|---|---|---|
| 性質 | 版本控制工具 | 線上協作與 Repository 平台 |
| 執行位置 | 本機電腦 | 網路服務 |
| 主要用途 | 記錄版本、查看差異 | 遠端儲存、分享、協作 |
| 是否一定需要網路 | 基本操作不一定需要 | 上傳、下載與協作通常需要 |

可以把 Git 想成「管理版本的工具」，把 GitHub 想成「放置與分享 Git 專案的線上空間」。

---

## 五、為什麼工程開發需要版本控制？

如果只用檔名保存不同版本，很快會出現以下問題：

```text
index_final.html
index_final2.html
index_final_really_final.html
```

版本控制可以改善這些情況：

1. **留下清楚的修改紀錄**：每次完成一個小功能，都可以留下說明。
2. **降低誤刪或改壞的風險**：能查看歷史版本，必要時找回內容。
3. **支援團隊協作**：多人可以在同一個專案中分工。
4. **方便查看學習歷程**：Repository 可以呈現你的學習與開發過程。
5. **建立專業開發習慣**：實際軟體開發通常不只依靠單一資料夾與檔案備份。

本學期會把 GitHub Repository 當作課程作品的主要紀錄位置。請使用自己能長期使用的 GitHub 帳號，並妥善保管登入資訊。

---

## 六、課前準備與工具安裝

### 1. 建立 GitHub 帳號

1. 開啟 [GitHub](https://github.com/)。
2. 註冊或登入帳號。
3. 建議使用容易辨識的使用者名稱，因為之後可能會放在作品連結中。
4. 完成電子郵件驗證。

請不要在 Repository、README 或程式碼中公開密碼、API Key、個人存取權杖等敏感資訊。

### 2. 安裝 Git

1. 開啟 [Git 官方網站](https://git-scm.com/downloads)。
2. 下載適合自己作業系統的版本。
3. Windows 安裝時，大多數選項可先使用預設值。
4. 安裝完成後，重新開啟 PowerShell 或終端機。

### 3. 確認 Git 是否安裝成功

在 PowerShell、命令提示字元或 VS Code 終端機輸入：

```bash
git --version
```

若安裝成功，會看到類似以下結果：

```text
git version 2.xx.x
```

版本號不同並不代表錯誤；只要能正常顯示 Git 版本即可。

### 4. 安裝 Visual Studio Code

1. 開啟 [Visual Studio Code 官方網站](https://code.visualstudio.com/)。
2. 下載並安裝適合自己作業系統的版本。
3. 開啟 VS Code。
4. 從「檔案」→「開啟資料夾」開啟專案資料夾。

本課程先使用 VS Code 的基本編輯功能，不要求本週安裝大量擴充功能。若要安裝擴充功能，請先確認它的用途與來源。

---

## 七、VS Code 基本操作

| 區域 | 用途 |
|---|---|
| Explorer／檔案總管 | 查看與管理專案檔案 |
| Editor／編輯區 | 編輯目前開啟的檔案 |
| Search／搜尋 | 在專案中搜尋文字 |
| Source Control／原始檔控制 | 查看 Git 修改狀態 |
| Terminal／終端機 | 執行 Git 或其他指令 |

在 VS Code 選擇「終端機」→「新增終端機」，或使用快捷鍵：

```text
Ctrl + `
```

建議操作習慣：

- 一次開啟整個專案資料夾，不只開單一檔案。
- 檔案與資料夾名稱避免使用空格及特殊符號。
- 儲存檔案後再進行預覽或上傳。
- 看到錯誤訊息時，先完整閱讀訊息，不要直接重複輸入指令。

---

## 八、本週實作範圍說明

第一週的實作包含「在 GitHub 建立 Repository」與「將 Repository clone 至本機」。請先完成下方步驟；本週不需要建立網頁內容、設定 Git 使用者資訊或進行版本提交。

本週不需要：

- 撰寫或修改 `README.md`、`index.html`。
- 設定 `git config user.name` 或 `git config user.email`。
- 在本機執行 `git init`、`git add`、`git commit` 或 `git push`。
- 修改內容或上傳檔案到 GitHub。

---

## 九、建立課程用 GitHub Repository

### 步驟 A：在 GitHub 建立 Repository

1. 登入 GitHub，按右上角「+」→「New repository」。
![GitHub 建立 Repository](https://hackmd.io/_uploads/Bk2YTTm_fe.png)
2. Repository name 輸入：`115web_學號`，將「學號」替換成自己的學號。例如學號為 `412345678`，Repository 名稱就是 `115web_412345678`。
3. 選擇 Public，方便課程檢查與展示；若老師另有要求，依課程規定調整。
4. 勾選「Add a README file」，讓 Repository clone 到本機後已有基本檔案。
![Repository 名稱設定](https://hackmd.io/_uploads/H1lrRT7ufl.png)
5. 按下「Create repository」。
![建立 Repository](https://hackmd.io/_uploads/By4hATXOfe.png)

### 本週完成後的確認

開啟你剛建立的 GitHub Repository 頁面，確認：

- Repository 名稱符合 `115web_學號` 格式。
- Repository 位於自己的 GitHub 帳號下。
- Repository 頁面可以正常開啟。
- 已記下 Repository 網址，供課程繳交或後續操作使用。

> 注意：本週只進行 clone，不需要修改檔案、建立 commit 或 push 上傳。

+### 步驟 B：在 C 槽建立 `Projects` 資料夾

請在本機 C 槽建立名為 `Projects` 的資料夾，作為本學期課程專案的工作位置。完成後，資料夾路徑應為：

```text
C:\Projects
```

你可以使用檔案總管建立，也可以在 PowerShell 執行：

```powershell
cd C:\
mkdir Projects
cd C:\Projects
```

如果 `Projects` 已經存在，請直接使用該資料夾，不需要重複建立。

### 步驟 C：將 GitHub Repository clone 到本機

1. 回到 GitHub 上的 `115web_學號` Repository 頁面。
2. 按下「Code」，選擇「HTTPS」，複製 Repository 網址。
3. 在 PowerShell 或 VS Code 終端機確認目前位置是 `C:\Projects`。
4. 執行以下指令，將網址替換成你複製的網址：

```powershell
cd C:\Projects
git clone https://github.com/你的帳號/115web_你的學號.git
```

例如：

```powershell
git clone https://github.com/example/115web_412345678.git
```

clone 完成後，`C:\Projects` 應該會出現一個資料夾：

```text
C:\Projects
└── 115web_你的學號
```

5. 進入 clone 下來的資料夾：

```powershell
cd C:\Projects\115web_你的學號
```

6. 使用 VS Code 開啟目前資料夾：

```powershell
code .
```

如果 `code .` 無法使用，也可以開啟 VS Code，選擇「檔案」→「開啟資料夾」，選取 `C:\Projects\115web_你的學號`。



### 後續課程預告

- **Week 2**：修改 `README.md`，設定 `git config user.name` 與 `git config user.email`，並學習 `status`、`add`、`commit`、`log`、`diff`、`push`、`pull` 與 `.gitignore`，完成 Git Workflow。
- **Week 3**：開始 HTML，建立 `index.html`，學習文件結構、標題、段落、連結、圖片、清單、表格與區塊元素。

因此，本週完成 Repository 建立與 clone 即可，不必提前進行 Week 2 或 Week 3 的操作。

---

## 十、課堂實作與完成檢核

請依照本教材完成 GitHub Repository 建立。第一週不要求進行 Git 提交、遠端連結或檔案上傳。

### 本週完成檢核

- [ ] 已登入可使用的 GitHub 帳號。
- [ ] 已建立名為 `115web_學號` 的 GitHub Repository。
- [ ] Repository 位於自己的 GitHub 帳號下。
- [ ] 已確認 Repository 名稱中的學號正確無誤。
- [ ] 已在 C 槽建立 `Projects` 資料夾。
- [ ] 已將 Repository clone 到 `C:\Projects\115web_學號`。
- [ ] 已使用 VS Code 開啟 clone 下來的資料夾。
- [ ] 已記下 Repository 網址。

完成後，請依授課教師公告提交你的 GitHub Repository 網址。

---

## 十一、常見問題

### `git` 不是可辨識的命令

通常表示 Git 尚未安裝完成，或終端機尚未重新開啟。請先重新開啟 VS Code；若仍無法使用，重新安裝 Git 並確認安裝選項包含命令列工具。

### README 顯示格式很奇怪

本週只需要完成 Repository 建立與 clone，不需要修改 README。Week 2 會說明 README 的修改與 Git Workflow。

---

## 十二、課後作業

### 作業：建立課程用 Repository

請完成以下事項：

1. 登入自己的 GitHub 帳號。
2. 建立一個名為 `115web_學號` 的 Repository。
3. 確認學號已正確替換，沒有保留「學號」兩字。
4. 在 C 槽建立 `Projects` 資料夾。
5. 將 Repository clone 到 `C:\Projects\115web_學號`。
6. 繳交 GitHub Repository 網址。

本週作業的重點是熟悉 GitHub 介面、Repository 與 clone 的基本概念。本週不需要：

```text
修改檔案 → 建立 commit → 上傳檔案
```

### 建議繳交格式

```text
姓名：
學號：
班級：
GitHub Repository：
```

### 評量重點

| 項目 | 比例參考 |
|---|---:|
| Repository 名稱符合 `115web_學號` 格式 | 60% |
| Repository 位於自己的 GitHub 帳號下 | 20% |
| 繳交網址正確且可以開啟 | 20% |

---

## 十三、本週重點回顧

- Git 是版本控制工具；GitHub 是線上託管與協作平台。
- 版本控制能留下修改歷史，並降低開發與協作風險。
- 本週要完成 GitHub 帳號、`115web_學號` Repository，以及本機 clone。
- 本週只需將 Repository 複製到 `C:\Projects`，不需要修改檔案或上傳檔案。
- `README.md`、`index.html` 與 Git 提交會在後續課程進行。
- Branch、merge、conflict 會在更後面的 Git 協作課程說明。
- 下一週將正式學習 Git 常用指令與更完整的版本控制流程。
