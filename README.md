# poc-sortable-blocks

可拖曳排序的區塊列表 POC (Proof of Concept)

## 線上演示

**👉 [立即體驗](https://heavenyuan.github.io/poc-sortable-blocks/)**

## 功能特色

- **直覺拖曳** - 點擊區塊頂部黃色區域進行拖曳
- **即時排序** - 滑鼠移入其他區塊即刻交換位置
- **視覺回饋** - 被拖曳區塊有 highlight 效果
- **自動捲動** - 拖到頁面邊緣時自動捲動

## 專案結構

```
poc-sortable-blocks/
├── index.html    # 主頁面
├── index.js      # 核心邏輯（原生 JavaScript）
├── style.css     # 樣式
└── README.md     # 說明文件
```

## 使用方式

1. 用瀏覽器直接開啟 `index.html`
2. 點擊區塊頂部的**黃色拖曳區域**
3. 移動滑鼠到目標區塊，即時交換位置
4. 放開滑鼠完成排序

## 技術實現

- **純原生 JavaScript** - 無任何外部依賴
- **WeakMap** - 儲存元素相關資料
- **DOM API** - `insertAdjacentElement`, `classList`, `getBoundingClientRect`
- **requestAnimationFrame** - 流暢的自動捲動

## 核心邏輯

```javascript
// 拖曳流程
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

## 設計特點

### 簡化的拖曳體驗
- 不使用浮動的佔位區塊
- 被拖曳區塊直接在容器中移動
- 只需 highlight 效果即可辨識

### 直覺的觸發條件
- 滑鼠移入其他區塊即觸發交換
- 離開區塊後可再次交換
- 避免來回跳動

## 瀏覽器支援

支援所有現代瀏覽器：
- Chrome
- Firefox
- Safari
- Edge

## 應用場景

- 看板系統 (Kanban)
- 任務列表排序
- 內容管理系統
- 自定義佈局工具
