const fs = require('fs');
const path = require('path');

// 引数処理
const args = process.argv.slice(2);
const tags = args.length ? args : ['daily', 'memo', '自動ノート'];
const title = tags[2] || '自動ノート';

// 日付の取得
const date = new Date();
const yyyy = date.getFullYear();
const mm = String(date.getMonth() + 1).padStart(2, '0');
const dd = String(date.getDate()).padStart(2, '0');
const dateString = `${yyyy}-${mm}-${dd}`;

// 出力先パス
const folderPath = path.join(__dirname, '..', 'vault', 'daily');
const fileName = `${dateString}-${title}.md`;
const outputPath = path.join(folderPath, fileName);

// フォルダがなければ作成
fs.mkdirSync(folderPath, { recursive: true });

// Markdownコンテンツ
const markdownContent = `
---
title: ${dateString} ${title}
tags: [${tags.join(', ')}]
created: ${date.toISOString()}
---

今日のアイデア、タグレビュー、UX改善案などを記録…
`;

// ファイル出力
fs.writeFileSync(outputPath, markdownContent.trim());
console.log(`✅ ノート生成完了: ${outputPath}`);