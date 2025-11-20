# Sortable Blocks POC (可拖曳排序區塊)

> A drag-and-drop sortable block list proof of concept created in 2016

[繁體中文](#繁體中文) | [English](#english)

---

## English

### Live Demo

**👉 [Try it now!](https://heavenyuan.github.io/poc-sortable-blocks/)**

**GitHub Repository**: [https://github.com/heavenyuan/poc-sortable-blocks](https://github.com/heavenyuan/poc-sortable-blocks)

### Overview

This is a proof-of-concept project demonstrating a drag-and-drop sortable block interface. Created in 2016 as an experiment to implement intuitive block reordering without relying on third-party libraries, it showcases a lightweight approach to sortable lists using pure vanilla JavaScript.

### Features

#### Core Functionality
- **Intuitive Dragging**: Click and drag the yellow handle area at the top of each block
- **Real-time Sorting**: Blocks instantly swap positions when hovering over another block
- **Visual Feedback**: Highlighted effect on the dragged block for clear identification
- **Auto-scrolling**: Automatic page scrolling when dragging near viewport edges

#### User Experience
- Simplified drag experience without floating placeholder elements
- Dragged block moves directly within the container
- Immediate visual feedback through highlighting
- Smart trigger conditions to prevent jittery movements

### Project Structure

```
poc-sortable-blocks/
├── index.html    # Main HTML page
├── index.js      # Core logic (vanilla JavaScript)
├── style.css     # Styles
└── README.md     # Documentation
```

### Usage

1. Open `index.html` in a web browser
2. Click the **yellow drag handle area** at the top of any block
3. Move the mouse to the target block to swap positions instantly
4. Release the mouse to complete the sorting

### Technical Implementation

**Core Technologies:**
- **Pure Vanilla JavaScript**: Zero external dependencies
- **WeakMap**: Store element-related data efficiently
- **DOM API**: `insertAdjacentElement`, `classList`, `getBoundingClientRect`
- **requestAnimationFrame**: Smooth auto-scrolling animation

**Drag Flow:**
```javascript
mousedown → Mark dragged block
mousemove → Detect target block → Swap positions instantly
mouseup   → Clear state

// Position Detection
getTargetBlock(pageY) → Find the block at mouse position

// Movement Logic
Drag up   → Insert before target block
Drag down → Insert after target block

// Debounce Mechanism
lastTargetBlock → Prevent repeated movements within same block
```

### Design Philosophy

**Simplified Drag Experience:**
- No floating placeholder blocks
- Dragged block moves directly in the container
- Highlighting alone is sufficient for identification

**Intuitive Triggers:**
- Hovering over another block triggers the swap
- Can swap again after leaving a block
- Prevents back-and-forth jittering

### Browser Support

Supports all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

### Use Cases

- Kanban board systems
- Task list reordering
- Content management systems (CMS)
- Custom layout tools
- Dashboard widgets arrangement

### Historical Context

**Created**: 2016
**Purpose**: Proof of Concept / Experimental

This project was created in 2016 to explore lightweight drag-and-drop sorting implementations without third-party libraries. The focus was on creating an intuitive, smooth user experience using only native browser APIs.

### Legacy

While drag-and-drop libraries have since become more mature, this POC demonstrates:
- The fundamentals of drag-and-drop mechanics
- How to implement sortable lists without dependencies
- Performance considerations with DOM manipulation
- Clean, readable vanilla JavaScript patterns

---

## 繁體中文

### 線上演示

**👉 [立即體驗](https://heavenyuan.github.io/poc-sortable-blocks/)**

**GitHub 專案**: [https://github.com/heavenyuan/poc-sortable-blocks](https://github.com/heavenyuan/poc-sortable-blocks)

### 專案簡介

可拖曳排序的區塊列表 POC (Proof of Concept)。2016 年創建的實驗性專案，目的是在不依賴第三方函式庫的情況下，實現直覺的區塊拖曳排序功能，展示了使用純原生 JavaScript 實現可排序列表的輕量化方法。

### 功能特色

#### 核心功能
- **直覺拖曳**: 點擊區塊頂部黃色區域進行拖曳
- **即時排序**: 滑鼠移入其他區塊即刻交換位置
- **視覺回饋**: 被拖曳區塊有 highlight 效果
- **自動捲動**: 拖到頁面邊緣時自動捲動

#### 使用體驗
- 簡化的拖曳體驗，不使用浮動的佔位區塊
- 被拖曳區塊直接在容器中移動
- 透過 highlight 效果即可清楚辨識
- 智慧觸發條件，避免來回跳動

### 專案結構

```
poc-sortable-blocks/
├── index.html    # 主頁面
├── index.js      # 核心邏輯（原生 JavaScript）
├── style.css     # 樣式
└── README.md     # 說明文件
```

### 使用方式

1. 用瀏覽器直接開啟 `index.html`
2. 點擊區塊頂部的**黃色拖曳區域**
3. 移動滑鼠到目標區塊，即時交換位置
4. 放開滑鼠完成排序

### 技術實現

**核心技術：**
- **純原生 JavaScript**: 無任何外部依賴
- **WeakMap**: 儲存元素相關資料
- **DOM API**: `insertAdjacentElement`、`classList`、`getBoundingClientRect`
- **requestAnimationFrame**: 流暢的自動捲動

**拖曳流程：**
```javascript
mousedown → 標記被拖曳區塊
mousemove → 偵測目標區塊 → 即時交換位置
mouseup   → 清除狀態

// 位置偵測
getTargetBlock(pageY) → 找到滑鼠所在的區塊

// 移動邏輯
往上拖 → 插入到目標區塊前面
往下拖 → 插入到目標區塊後面

// 防抖機制
lastTargetBlock → 避免在同一區塊內重複移動
```

### 設計特點

**簡化的拖曳體驗：**
- 不使用浮動的佔位區塊
- 被拖曳區塊直接在容器中移動
- 只需 highlight 效果即可辨識

**直覺的觸發條件：**
- 滑鼠移入其他區塊即觸發交換
- 離開區塊後可再次交換
- 避免來回跳動

### 瀏覽器支援

支援所有現代瀏覽器：
- Chrome
- Firefox
- Safari
- Edge

### 應用場景

- 看板系統 (Kanban)
- 任務列表排序
- 內容管理系統
- 自定義佈局工具
- 儀表板小工具排列

### 歷史背景

**建立年份**: 2016 年
**專案性質**: 概念驗證 / 實驗性質

這個專案創建於 2016 年，目的是探索在不使用第三方函式庫的情況下，如何實現輕量級的拖曳排序功能。重點在於使用原生瀏覽器 API 創造直覺、流暢的使用者體驗。

### 專案意義

儘管現今拖曳排序函式庫已經相當成熟，但這個 POC 展示了：
- 拖曳排序的基本原理
- 如何在無依賴的情況下實現可排序列表
- DOM 操作的效能考量
- 簡潔易讀的原生 JavaScript 模式

---

**Built in 2016 to explore drag-and-drop fundamentals**
