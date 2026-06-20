# UTrend 企業官網 — 專案開發規範

## 🤖 AI 互動與回覆規範

- **指定語言**：請一律使用**繁體中文（台灣，zh-TW）**與使用者對話並回覆所有問題。
- **專有名詞**：請遵循台灣習慣的資訊工程術語（例如：使用「專案」而非「項目」、「檔案」而非「文件」、「程式碼」而非「代碼」、「重構」而非「重構」）。

## 技術堆疊

- 靜態 HTML5 + Tailwind CSS v3（CDN 引入）+ Vue 3（CDN 引入，僅表單頁）+ 原生 JavaScript
- 無 npm/Node.js、無建置步驟、無模組 bundler
- 字型：Inter（英文）+ Noto Sans TC（中文），字重 400/500/700/900
- 圖示：Material Symbols Outlined
- 分析：Google Analytics 4（G-XL95MJHYGS），每頁 `<head>` 皆須引入
- 深色模式：Tailwind `darkMode: "class"` 策略
- 部署網域：`getutrend.com`（GitHub Pages，CNAME），`.htaccess` 強制 HTTPS 轉址
- Vue 3：透過 `<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js">` CDN 引入，使用 `createApp` + Composition API 掛載於各頁 `<main id="app">`（目前僅 contact.html 等表單頁需要）
- API 層：`js/api.js` 提供 `apiGet()` / `apiPost()` 工具函式，`API_BASE_URL` 預設為 `http://localhost:3000/api`
- 共用互動：`js/shared.js` 於 `<body>` 結尾以 `<script src="js/shared.js">` 引入

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

> **目前狀態**：`index.html` 已完成專業化重構，作為**設計與結構的參考基準**。其他頁面的導覽列、頁腳、SEO、shared.js 尚未同步至新標準，待後續逐頁更新。

## 設計系統

- **色彩**：主色 primary `#2A52BE`、深主色 primary-dark `#1E3A8A`；強調色 accent `#FF7A00`、深強調 accent-dark `#E56A00`
- **視覺風格**：藍橘科技風 — 專業、現代、俐落。善用漸層（標題漸層字、藍色漸層區塊）、光暈裝飾（`blur-3xl` 色塊）、卡片 hover 浮起。
- 使用容器查詢 (`@container`) 實現區塊級響應式
- 色系變數與動畫透過 `<script id="tailwind-config">` 內嵌定義
- **自訂動畫**（定義於 tailwind config 或 `<style>`）：
  - `fade-in-up`：元素進場淡入上移
  - `float`：緩慢上下浮動（Hero 主圖）
  - `ken-burns`：圖片緩慢推近，營造電影感（Hero 主圖）
  - `glow-pulse`：背景光暈明暗脈動
  - `shine-sweep`：高光斜向掃過（`.hero-shine::after`）
  - `.reveal` → `.is-visible`：捲動進場（由 shared.js 的 IntersectionObserver 觸發）
- **無障礙**：所有動畫須以 `@media (prefers-reduced-motion: reduce)` 包覆，於使用者偏好減少動態時關閉

## SEO 與 Meta（每頁 `<head>` 必備）

- 完整 meta：`description`、`keywords`、`author`、`theme-color`、`canonical`
- Open Graph：`og:title`、`og:description`、`og:type`、`og:url`、`og:image`、`og:locale`、`og:site_name`
- Twitter Card：`summary_large_image`
- Favicon 全套：`favicon/favicon.svg`、`favicon-96x96.png`、`favicon.ico`、`apple-touch-icon.png`、`site.webmanifest`
- 結構化資料：JSON-LD（`Organization` schema）

## API 端點約定（RESTful）

| 方法 | 端點           | 頁面         | 說明                                                                |
| ---- | -------------- | ------------ | ------------------------------------------------------------------- |
| POST | `/api/contact` | contact.html | 接收表單 `{ name, email, company, phone, service, message, agree }` |

API 基底網址可透過 `window.API_BASE_URL` 覆蓋。API 不可用時，頁面以降級資料（fallback data）正常顯示。

> 備註：首頁 `index.html` 已改為**全靜態內容**（不再動態呼叫 `/api/home`），數據與服務內容直接寫於 HTML。

## 重複結構（所有頁面應一致）

- **頂部導覽列**：sticky + backdrop-blur，`id="navbar"`、內層 `id="navbar-inner"`
  - 左側 logo 使用 `<img src="favicon/favicon.svg">`（**勿**內嵌簡化版 SVG）+ 公司名稱（中文 `樂呈科技` + 英文 `UTrend Tech Co.`）
  - 桌機導覽連結 + accent CTA 按鈕
  - 手機漢堡鈕 `id="menu-toggle"`，展開選單 `id="mobile-menu"`（預設 `hidden`），含 `aria-expanded` / `aria-controls`
- **底部頁腳**：4 欄網格（品牌 / 服務 / 公司 / 聯繫）+ 版權宣告
  - 聯絡信箱：`support@findlife.com.tw`
  - 版權年份須維持當前年度（目前為 2026）
- GA4 分析程式碼片段（gtag）
- Tailwind config 與 Google Fonts CDN 連結

## `js/shared.js` 職責（原生 JS，無相依）

於 `DOMContentLoaded` 後執行，依存在的元素自動啟用：

1. **導覽列捲動效果**：`#navbar` 捲動超過 40px 時加 `shadow-md` 並縮小內距
2. **手機選單開關**：點 `#menu-toggle` 切換 `#mobile-menu` 顯示、切換 icon（menu↔close）、更新 `aria-expanded`，點選單連結後自動收合
3. **捲動進場動畫**：以 IntersectionObserver 為 `.reveal` 元素加上 `.is-visible`

## 程式碼規範

- 所有樣式使用 Tailwind utility classes；自訂樣式與 keyframes 寫在 `<style>` 區塊
- Vue 3 使用 Composition API（`createApp` + `setup()`），掛載於表單頁 `<main id="app">`
- 表單使用 `v-model` 雙向綁定 + `@submit.prevent` 提交，狀態回饋透過 `ref` / `reactive` 控制
- API 呼叫統一經由 `js/api.js` 提供的 `apiGet()` / `apiPost()` 工具函式
- DOM 操作使用原生 `document.getElementById` / `querySelector` / `addEventListener`（非 Vue 頁面）
- 嚴禁 `import/export` / `require()` / `npm install`
- 外部資源一律透過 CDN `<script>` / `<link>` 引入
- 圖片須有 `alt`；裝飾性元素加 `aria-hidden="true"`
- **信任原則**：不得放置未實際合作的客戶 logo 或誇大不實的內容

## 注意事項

- 導覽列與頁腳中的案例、團隊、觀點連結目前為註解狀態
- 首頁原本的假客戶 logo 輪播（Google/Amazon/Oracle）已移除，改為「核心服務」「為什麼選擇我們」「CTA」區塊
- Vue 表單提交經 `apiPost('/contact')` 送至後端；API 不可用時顯示降級資料
- API 基底網址預設為 `http://localhost:3000/api`，可透過 `window.API_BASE_URL` 覆蓋
- 部署為靜態網站，無需建置步驟
