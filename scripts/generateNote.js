const fs = require('fs');
const path = require('path');

// 引数からノート情報を取得
const args = process.argv.slice(2);
const [category, type, title] = args;

if (!category || !type || !title) {
  console.error('❌ 引数が不足しています。使用例: node generateNote.js daily memo 会議メモ');
  process.exit(1);
}

// ファイル名生成（例: daily_memo_会議メモ.md）
const fileName = `${category}_${type}_${title}.md`;

// Vaultフォルダ内のカテゴリごとの保存先を指定
const vaultRoot = path.join(__dirname, '..', 'vault');
const categoryPath = path.join(vaultRoot, category);

// フォルダが存在しない場合は作成
if (!fs.existsSync(categoryPath)) {
  fs.mkdirSync(categoryPath, { recursive: true });
}

// YAMLヘッダーの整形
const date = new Date().toISOString().split('T')[0];
const header = `---\n` +
               `title: ${title}\n` +
               `category: ${category}\n` +
               `type: ${type}\n` +
               `created: ${date}\n` +
               `tags: [${category}, ${type}]\n` +
               `---\n\n`;

// Markdown本文
const body = `# ${title}\n\nここに内容を追加\n`;

// ファイル書き込み
const filePath = path.join(categoryPath, fileName);
fs.writeFileSync(filePath, header + body);

// 結果表示
console.log(`✅ ノート ${fileName} を作成しました（${categoryPath} に保存）`);