# Vercel 部署指南

## 🚀 部署步驟

### 1. 準備 GitHub 倉庫
- ✅ 代碼已推送到 GitHub
- ✅ 敏感信息已保護（.env 文件被 gitignore）

### 2. 在 Vercel 上部署

#### 方法一：通過 Vercel Dashboard
1. 訪問 [vercel.com](https://vercel.com)
2. 點擊 "New Project"
3. 導入您的 GitHub 倉庫：`cih-lian-liao/portfolio-site`
4. 配置設置：
   - **Framework Preset**: Other
   - **Root Directory**: `/` (根目錄)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

#### 方法二：通過 Vercel CLI
```bash
npm i -g vercel
vercel
```

### 3. 設置環境變量

在 Vercel Dashboard 中設置以下環境變量：

```
OPENROUTER_API_KEY=您的_OpenRouter_API_密鑰
NODE_ENV=production
CORS_ORIGIN=https://您的域名.vercel.app
```

### 4. 配置說明

- **前端**: React + Vite 構建，靜態文件部署
- **後端**: Express.js 作為 API 路由
- **AI 功能**: 通過 OpenRouter API 提供 LilyGPT 服務

### 5. 部署後檢查

1. 訪問您的 Vercel URL
2. 測試 LilyGPT 功能
3. 確認所有頁面正常加載
4. 檢查 API 路由是否正常工作

## 🔧 故障排除

### 常見問題

1. **API 路由 404**
   - 檢查 vercel.json 配置
   - 確認路由設置正確

2. **LilyGPT 不工作**
   - 檢查環境變量設置
   - 確認 OpenRouter API 密鑰有效

3. **構建失敗**
   - 檢查 Node.js 版本
   - 確認所有依賴已安裝

## 📞 支持

如有問題，請檢查：
- Vercel 部署日誌
- 瀏覽器控制台錯誤
- API 響應狀態
