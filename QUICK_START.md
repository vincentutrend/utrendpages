# 🚀 UTrend Tech Co. 網站 - 快速開始指南

## 📦 包含的檔案

```
✅ index.html          (首頁 - 14 KB)
✅ about.html          (關於我們 - 14 KB)
✅ services.html       (服務項目 - 15 KB)
✅ cases.html          (成功案例 - 16 KB)
✅ team.html           (顧問團隊 - 15 KB)
✅ insights.html       (最新觀點 - 16 KB)
✅ contact.html        (聯絡我們 - 14 KB)
✅ README.md           (說明文檔 - 4.6 KB)
✅ SITEMAP.md          (網站地圖 - 6.3 KB)
✅ QUICK_START.md      (本檔案)

總代碼行數: 1,916 行
總檔案大小: ~114 KB
```

## ⚡ 5分鐘快速開始

### 步驟 1️⃣ - 準備檔案
- 將所有 `.html` 檔案放在同一個文件夾中
- 不需要任何額外配置或依賴

### 步驟 2️⃣ - 本地預覽
**方法 A: 直接打開**
- 雙擊 `index.html` 檔案
- 或右鍵 → 用瀏覽器打開

**方法 B: 使用 HTTP 伺服器 (推薦)**
```bash
# 使用 Python 3
python -m http.server 8000

# 使用 Node.js
npx http-server

# 使用 PHP
php -S localhost:8000
```
然後在瀏覽器中訪問: `http://localhost:8000`

### 步驟 3️⃣ - 測試導航
- 點擊頂部導航欄的所有連結
- 確認所有頁面都能正常加載
- 測試移動設備預覽（按 F12 → 響應式設計模式）

### 步驟 4️⃣ - 自定義內容
編輯以下內容來個性化您的網站：

**公司名稱**
```html
<!-- 在所有 HTML 中查找並替換 -->
<h2>UTrend Tech Co.</h2>
<!-- 替換為您的公司名稱 -->
```

**聯絡資訊** (在 contact.html 中)
```html
<p>+886 (2) 1234-5678</p>        <!-- 您的電話 -->
<p>info@itconsulting.tw</p>      <!-- 您的郵箱 -->
<p>台北市信義區...</p>           <!-- 您的地址 -->
```

**服務描述** (在 services.html 中)
```html
<h3>您的服務名稱</h3>
<p>您的服務描述...</p>
```

### 步驟 5️⃣ - 部署到網絡
1. 使用 FTP 上傳所有 HTML 檔案到您的主機
2. 或使用 GitHub Pages、Netlify、Vercel 等免費平台
3. 設定 `index.html` 為默認首頁

## 🎨 自定義指南

### 修改色系

找到每個 HTML 檔案中的這個部分：

```html
<script id="tailwind-config">
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          "primary": "#2A52BE",      <!-- 主色 (現在是藍色) -->
          "accent": "#FF7A00",       <!-- 強調色 (現在是橙色) -->
          ...
        }
      }
    }
  }
</script>
```

**常用的專業色系:**

| 色系 | Primary | Accent | 行業 |
|------|---------|--------|------|
| 企業藍 | #0066CC | #FF6600 | 科技/金融 |
| 綠色環保 | #22863A | #28A745 | 環保/健康 |
| 紫色高端 | #7030A0 | #FF00FF | 創意/設計 |
| 紅色活力 | #C41E3A | #FF6B6B | 行銷/零售 |

### 修改字體

在所有檔案的 `<head>` 中找到：

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans+TC:wght@400;500;700&display=swap" rel="stylesheet"/>
```

從 [Google Fonts](https://fonts.google.com/) 選擇其他字體。

### 更改內容

**首頁英雄區段** (index.html)
```html
<h1>最懂產業流程的IT顧問團隊</h1>  <!-- 修改主標題 -->
<h2>我們提供客製化的ERP...</h2>     <!-- 修改副標題 -->
```

**添加團隊成員** (team.html)
複製以下區塊並修改資訊：
```html
<div class="flex flex-col gap-4 rounded-xl...">
  <div class="w-full h-48 bg-gradient-to-br...">
    <!-- 複製整個卡片 -->
  </div>
</div>
```

## 🔗 完整導航測試清單

- [ ] 首頁所有連結都工作正常
- [ ] 導航欄 (共5個主連結)
- [ ] "立即諮詢" 按鈕指向聯絡頁面
- [ ] "了解更多服務" 按鈕指向服務頁面
- [ ] 頁腳連結都有效
- [ ] 所有服務卡片都加載正確
- [ ] 所有案例研究都顯示正確
- [ ] 團隊成員卡片對齊正確
- [ ] 聯絡表單字段都可用
- [ ] 移動設備上菜單可用

## 📱 響應式設計測試

使用瀏覽器開發者工具 (F12) 測試不同設備：

- 📱 **iPhone SE** (375 x 667)
- 📱 **iPhone 12** (390 x 844)
- 📱 **iPad** (768 x 1024)
- 💻 **Desktop** (1920 x 1080)

所有頁面應該在所有尺寸上都能正確顯示。

## 🌙 深色模式測試

深色模式自動基於系統設置。測試方法：

**在 macOS 上:**
系統偏好設定 → 外觀 → 深色/淺色

**在 Windows 上:**
設定 → 個性化 → 色彩 → 深色

## ✨ 高級功能

### 集成表單提交

`contact.html` 中的表單目前需要後端。選項：

1. **使用 Formspree** (最簡單)
   ```html
   <form method="POST" action="https://formspree.io/f/YOUR_ID">
     <!-- 您的表單內容 -->
   </form>
   ```

2. **使用 Netlify Forms**
   添加 `netlify` 屬性到表單
   在 Netlify 部署時自動工作

3. **連接到您的後端**
   更新 `action` 屬性指向您的伺服器

### 集成分析

添加 Google Analytics 到 `<head>` 中：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🐛 故障排除

**Q: 頁面無法加載？**
A: 確保所有 HTML 檔案在同一文件夾中，使用相對路徑連結。

**Q: 圖片不顯示？**
A: 圖片使用外部 URL。確保有網絡連接。

**Q: 導航欄在移動設備上不工作？**
A: 這是正常的 - 移動菜單在此版本中是簡化的。

**Q: 深色模式不工作？**
A: 檢查您的瀏覽器設定。深色模式基於系統偏好。

## 📚 進階資源

- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [HTML 5 最佳實踐](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Web 設計最佳實踐](https://www.w3.org/WAI/fundamentals/)

## 🎯 下一步

1. ✅ 自定義所有內容以符合您的品牌
2. ✅ 添加您的真實圖片
3. ✅ 集成聯絡表單
4. ✅ 部署到生產環境
5. ✅ 設置域名
6. ✅ 啟用 SSL 證書
7. ✅ 監控分析

## 💡 建議和最佳實踐

- 使用 VS Code 編輯 HTML（推薦 Live Server 擴展）
- 定期在不同瀏覽器中測試
- 使用 Google PageSpeed Insights 優化性能
- 定期備份您的文件
- 保持內容最新和相關

## 📞 技術支援

遇到問題？按照以下步驟：

1. 檢查瀏覽器控制台是否有錯誤 (F12 → Console)
2. 清除瀏覽器緩存 (Ctrl+Shift+Delete)
3. 在不同瀏覽器中測試
4. 確認所有文件都在同一文件夾中

---

**🎉 恭喜！您的多頁式企業網站已準備就緒。**

**祝您的網站訪問量和轉化率都能突飛猛進！** 🚀

**最後更新**: 2024年10月31日
