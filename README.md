# ✧ 粉色二次元待办清单 ✧

一款粉色二次元风格的待办事项应用，支持番茄钟和完成次数统计。

## 功能

- 添加 / 删除 / 勾选待办事项
- 全部 / 待完成 / 已完成 筛选视图
- 完成次数统计（徽章显示）
- 番茄钟计时器（25 分钟倒计时，支持暂停/重置）
- 樱花飘落动画 + 四角动漫角色装饰
- 数据本地持久化（localStorage）
- 响应式布局（适配手机/平板）

## 技术栈

- React 19 + TypeScript
- Vite 8
- CSS Modules

## 运行

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 预览构建产物
npm run preview
```

## 项目结构

```
src/
  App.tsx                    # 主布局
  App.css                    # 全局样式
  types.ts                   # 类型定义
  hooks/
    useTodos.ts              # 待办状态管理
    usePomodoro.ts           # 番茄钟逻辑
    useSakura.ts             # 樱花粒子
  components/
    Header/                  # 顶部标题栏
    InputArea/               # 输入区域
    Filters/                 # 筛选标签
    TodoList/                # 待办列表
    TodoItem/                # 单个待办项
    PomodoroTimer/           # 番茄钟组件
    CharacterDecorations/    # 角色装饰
```
