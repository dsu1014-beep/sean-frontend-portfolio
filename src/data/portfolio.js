export const projects = [
  {
    id: 1,
    status: 'live',
    statusLabel: '已上線',
    title: 'Magebound 魔法牌戰',
    description: '使用 React 與 TypeScript 獨立開發回合制卡牌遊戲，涵蓋資料建模、戰鬥規則、互動介面與自動化測試。',
    metrics: [
      { value: '5 關＋Boss', label: '完整闖關流程' },
      { value: '資料驅動', label: '卡牌與關卡系統' },
      { value: '雙層測試', label: 'Vitest＋Playwright' },
    ],
    technologies: ['React', 'TypeScript', 'SQLite', 'Vite', 'Immer', 'Vitest', 'Playwright'],
    challenge: '將卡牌資料、戰鬥規則與畫面呈現拆分為獨立層級；以資料驅動設計管理遊戲內容，並透過 Reducer 建立可預測的回合流程，讓新卡牌與關卡能以擴充資料及規則的方式加入。',
    highlights: [
      '以 Reducer 管理生命、護盾、魔力、手牌、牌庫、棄牌、敵人意圖與勝負判定，處理互相影響的戰鬥狀態。',
      '設計拖曳出牌、目標選擇、元素連鎖、條件效果、五關闖關與 Boss 戰，將遊戲規則轉化為可操作的前端互動。',
      '使用 SQLite 建立卡牌、敵人與關卡資料來源，透過同步流程產生前端資料，降低遊戲內容與程式邏輯的耦合。',
      '使用 Vitest、Testing Library 與 Playwright 驗證戰鬥規則及操作流程，並部署至 Vercel。',
    ],
    images: [
      {
        src: './images/magebound-cover.png',
        alt: 'Magebound 模式選擇首頁',
      },
      {
        src: './images/magebound-character-select.png',
        alt: 'Magebound 訓練戰角色選擇畫面',
      },
      {
        src: './images/magebound-battle.png',
        alt: 'Magebound 卡牌戰鬥與拖曳出牌畫面',
      },
      {
        src: './images/magebound-reward.png',
        alt: 'Magebound 戰鬥結束後的卡牌獎勵選擇畫面',
      },
    ],
    url: 'https://magebound-card-game.vercel.app/',
    sourceUrl: 'https://github.com/dsu1014-beep/Magebound-card-game',
  },
]

export const skills = [
  {
    category: 'Frontend',
    title: '前端開發',
    description: '建立語意清楚、可維護且支援不同裝置的網頁介面。',
    items: ['Vue', 'JavaScript', 'HTML', 'CSS', 'RWD'],
  },
  {
    category: 'Workflow',
    title: '開發工具',
    description: '使用現代化工具管理原始碼、建置流程與專案版本。',
    items: ['Vite', 'Git', 'GitHub', 'Docker', '規格驅動開發、專案壓力測試'],
  },
  {
    category: 'Data',
    title: '資料與分析',
    description: '具備數學背景，能整理資料並將結果轉換成清楚的決策資訊。',
    items: ['SQL', 'Python', '文件與資料工具：Word、PowerPoint、Excel、樞紐分析'],
  },
  {
    category: 'Collaboration',
    title: '專案協作',
    description: '從需求釐清、任務拆解到成果交付，維持清楚且可靠的溝通。',
    items: ['需求分析', '問題拆解', '時程控管', '跨部門溝通'],
  },
]

export const experience = [
  {
    period: '2025.08－2026.05',
    role: '專案助理',
    company: '愛迪樂有限公司',
    summary: '主責與協作逾 270 萬元政府專案，並將每堂虧損 3,000 元的課程翻轉為獲利 5,000 元。',
    achievements: [
      { metric: '270 萬+', label: '政府專案如期交付' },
      { metric: '-3,000 → +5,000', label: '單堂課程損益翻轉' },
      { metric: '90%+', label: '活動滿意度' },
    ],
    details: [
      {
        title: '政府專案全流程管理',
        description: '擔任雙北、桃園與屏東共 4 縣市衛生局 ICOPE 專案窗口，參與投標計畫書、預算控管、講師邀約、場地租借與成果報告，完成從投標到核銷的全生命週期執行。',
      },
      {
        title: '課程開發與營運優化',
        description: '獨立統籌長照積分課程的日期規畫、課綱設計、積分送審及招生；透過市場調查與課程調整，將單堂損益由平均虧損 3,000 元改善為獲利 5,000 元。',
      },
      {
        title: '高壓應變與跨部門支援',
        description: '主管請假期間承接多項專案，處理講師協調、時程壓縮與現場突發狀況，同時支援行銷策略、活動執行及數位素材製作。',
      },
    ],
  },
  {
    period: '2024.09－2025.03',
    role: 'Consultant 招募顧問',
    company: '捷招管理顧問有限公司',
    summary: '負責企業 RPO 與人力派遣專案，執行用人需求確認、人才搜尋、面談評估及企業窗口溝通。',
    achievements: [
      { metric: 'RPO／派遣', label: '專案執行' },
      { metric: '企業需求', label: '窗口對接' },
      { metric: '人才搜尋', label: '面談評估' },
    ],
    details: [
      {
        title: '專案規畫與流程設計',
        description: '負責企業 RPO 與人力派遣專案的全流程設計，進行時程控管、資源配置與多專案並行管理，確保招募任務穩定推進。',
      },
      {
        title: '需求分析與人才解決方案',
        description: '擔任企業核心聯繫窗口，分析用人單位需求並轉化為客製化人才方案，降低資訊落差與招募溝通成本。',
      },
      {
        title: '人才評估與市場洞察',
        description: '運用多元管道主動搜尋人才，執行深度面談與適配評估，並分析人才市場供需與產業動態，提供具數據依據的招募及薪酬建議。',
      },
    ],
  },
]
