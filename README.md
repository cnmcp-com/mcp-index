# Next.js静态网站 - Cloudflare Pages部署模板

这是一个使用Next.js构建的静态网站项目，专为Cloudflare Pages部署而优化。

## 项目特点

- 使用最新版Next.js构建
- 配置为静态导出模式，适用于Cloudflare Pages
- 包含响应式UI设计（使用Tailwind CSS）
- 针对Cloudflare优化的缓存和安全头设置
- 包含中文本地化设置

## 快速开始

### 本地开发

1. 克隆项目
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 在浏览器中访问 `http://localhost:3000`

### 构建项目

```bash
npm run build
```

构建完成后，静态文件将生成在 `.next/` 和 `out/` 目录中。

## 部署到Cloudflare Pages

### 方法1：通过GitHub部署

1. 将项目推送到GitHub仓库
2. 登录Cloudflare Dashboard
3. 进入Pages选项
4. 点击"创建项目"
5. 选择"连接到Git"
6. 选择您的GitHub仓库
7. 设置部署配置：
   - 构建命令：`npm run build`
   - 输出目录：`out`
   - 构建系统版本：选择最新版本
8. 点击"保存并部署"

### 方法2：通过直接上传部署

1. 构建项目
```bash
npm run build
```

2. 安装Cloudflare CLI (Wrangler)
```bash
npm install -g wrangler
```

3. 认证并部署
```bash
wrangler login
wrangler pages publish out
```

## 项目结构

```
├── public/            # 静态资源
│   ├── _headers       # Cloudflare安全头配置
│   └── _routes.json   # Cloudflare路由配置
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── layout.tsx # 主布局文件
│   │   └── page.tsx   # 首页
│   └── ...
├── next.config.ts     # Next.js配置
└── ...
```

## 技术栈

- [Next.js](https://nextjs.org/) - React框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的JavaScript
- [Cloudflare Pages](https://pages.cloudflare.com/) - 静态网站托管平台

## 自定义与扩展

- 修改`src/app/page.tsx`以更新首页内容
- 在`src/app/`目录中添加新的页面
- 更新`public/_headers`以自定义安全头
- 在`public/`中添加其他静态资源

## 许可证

MIT
