# AI Dating App 项目设计文档

## 项目概述
基于 Next.js 15 构建的现代化 Web 应用，采用 App Router 架构。

## 目录结构 
project-root/
├── app/ # Next.js App Router 目录
│ ├── layout.tsx # 根布局组件
│ ├── page.tsx # 首页组件
│ ├── globals.css # 全局样式
│ └── fonts/ # 字体文件
├── public/ # 静态资源目录
├── node_modules/ # 依赖包
└── 配置文件
├── package.json # 项目配置和依赖
├── tsconfig.json # TypeScript 配置
├── next.config.ts # Next.js 配置
├── tailwind.config.ts # Tailwind 配置
└── .eslintrc.json # ESLint 配置

## 技术栈
- **核心框架**: Next.js 15.0.4
- **开发语言**: TypeScript 5.x
- **UI 框架**: React 19.0.0
- **样式方案**: 
  - Tailwind CSS 3.4.1
  - CSS Variables (暗黑模式支持)
- **字体**: Geist (Sans + Mono)
- **开发工具**:
  - ESLint
  - PostCSS
  - TypeScript

## 核心功能特性
1. **现代化路由系统**
   - 基于 Next.js App Router
   - 文件系统路由
   - 布局复用

2. **样式系统**
   - Tailwind CSS 实用类优先
   - 响应式设计支持
   - 暗黑模式支持
   - CSS Variables 主题定制

3. **性能优化**
   - 字体优化 (next/font)
   - 图片优化 (next/image)
   - TypeScript 类型安全

## 技术要点

### 1. 应用架构
- 采用 Next.js App Router 架构
- 使用 React Server Components
- 严格的 TypeScript 配置

### 2. 样式方案
- Tailwind CSS 工具类
- CSS Variables 主题定制
- 响应式设计
- 暗黑模式支持

### 3. 开发规范
- ESLint 代码规范
- TypeScript 类型检查
- 统一的代码格式化

### 4. 性能考虑
- 字体加载优化
- 图片组件优化
- 构建优化

## 注意事项
1. 开发环境配置
   - Node.js 环境要求
   - 包管理器选择 (npm/yarn/pnpm)

2. 代码规范
   - 遵循 TypeScript 严格模式
   - 遵循 ESLint 规则

3. 样式开发
   - 优先使用 Tailwind 类
   - 遵循响应式设计原则
   - 注意暗黑模式适配

4. 部署相关
   - 支持 Vercel 部署
   - 环境变量管理
