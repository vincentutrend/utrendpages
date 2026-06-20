# UTrend 企業官網 — 專案開發規範

## 🤖 AI 互動與回覆規範

- **指定語言**：請一律使用**繁體中文（台灣，zh-TW）**與使用者對話並回覆所有問題。
- **專有名詞**：請遵循台灣習慣的資訊工程術語（例如：使用「專案」而非「項目」、「資料案/檔案」而非「文件」、「重構」而非「重構」、「程式碼」而非「代碼」）。

## 技術堆疊

- 靜態 HTML5 + Tailwind CSS v3（CDN 引入）+ Vue 3（CDN 引入）+ 原生 JavaScript
- 無 npm/Node.js、無建置步驟、無模組 bundler
- 字型：Inter（英文）+ Noto Sans TC（中文）
- 圖示：Material Symbols Outlined
- 分析：Google Analytics 4（G-XL95MJHYGS）
- 深色模式：Tailwind `darkMode: "class"` 策略
- Vue 3：透過 `<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js">` CDN 引入，使用 `createApp` + Options/Composition API 掛載在各頁 `<main id="app">`
- API 層：`js/api.js` 提供 `apiGet()` / `apiPost()` 工具函式，`API_BASE_URL` 預設為 `http://localhost:3000/api`

## 頁面架構（7頁）

| 檔案          | 路徑             | 頁面     |
| ------------- | ---------------- | -------- |
| index.html    | `/`              | 首頁     |
| about.html    | `/about.html`    | 關於我們 |
| services.html | `/services.html` | 服務項目 |
| cases.html    | `/cases.html`    | 成功案例 |
| team.html     | `/team.html`     | 顧問團隊 |
| insights.html | `/insights.html` | 最新觀點 |
| contact.html  | `/contact.html`  | 聯絡我們 |

## 設計系統

- 主色 primary: #2A52BE / 強調色 accent: #FF7A00
- 使用容器查詢 (`@container`) 實現區塊級響應式
- CSS 自定義動畫（`infinite-scroll` 客戶輪播）
- 色系變數透過 `<script id="tailwind-config">` 內嵌定義

## API 端點約定（RESTful）

| 方法 | 端點           | 頁面         | 說明                                                                |
| ---- | -------------- | ------------ | ------------------------------------------------------------------- |
| GET  | `/api/home`    | index.html   | 回傳 `{ stats, clients }` 供首頁動態渲染                            |
| POST | `/api/contact` | contact.html | 接收表單 `{ name, email, company, phone, service, message, agree }` |

API 基底網址可透過 `window.API_BASE_URL` 覆蓋。API 不可用時，頁面會以降級資料（fallback data）正常顯示。

## 重複結構（所有頁面一致）

- **頂部導航欄**：sticky + backdrop-blur，含 SVG logo + 公司名稱 + 導航連結 + CTA 按鈕 + 漢堡選單
- **底部頁腳**：4 欄網格（品牌 / 服務 / 公司 / 聯繫）+ 版權宣告
- GA4 分析程式碼片段（gtag）
- Tailwind config 與 Google Fonts CDN 連結

## 程式碼規範

- 所有樣式使用 Tailwind utility classes；自訂樣式寫在 `<style>` 區塊
- Vue 3 使用 Composition API（`createApp` + `setup()`），掛載於各頁 `<main id="app">`
- 表單使用 `v-model` 雙向綁定 + `@submit.prevent` 提交，狀態回饋透過 `ref` / `reactive` 控制
- API 呼叫統一經由 `js/api.js` 提供的 `apiGet()` / `apiPost()` 工具函式
- DOM 操作使用原生 `document.getElementById` / `querySelector` / `addEventListener`（僅限非 Vue 頁面）
- 嚴禁 `import/export` / `require()` / `npm install`
- 外部資源一律透過 CDN `<script>` / `<link>` 引入
- 嚴格維持「極簡絲線、現代藝文、莫蘭迪色系」視覺風格

## 注意事項

- 導航列與頁腳中的案例、團隊、觀點連結目前為註解狀態
- Vue 表單提交經 `apiPost('/contact')` 送至後端；API 不可用時顯示降級資料
- API 基底網址預設為 `http://localhost:3000/api`，可透過 `window.API_BASE_URL` 覆蓋
- 部署為靜態網站，無需建置步驟
