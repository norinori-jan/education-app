const fs = require("fs");
const path = require("path");

const inboxPath = "./vault/inbox";
const dailyPath = "./vault/daily";
const ideaPath = "./vault/idea";

fs.readdirSync(inboxPath).forEach(file => {
  const filePath = path.join(inboxPath, file);
  if (path.extname(filePath) === ".md") {
    let content = fs.readFileSync(filePath, "utf-8");

    // YAMLヘッダー追加
    const date = new Date().toISOString().split("T")[0];
    const header = `---\ncreated: ${date}\ntag: quick\n---\n`;
    content = header + content;

    // 分類（ファイル名に "idea" が含まれる場合など）
    let destination = dailyPath;
    if (file.toLowerCase().includes("idea")) {
      destination = ideaPath;
    }

    // 移動＋保存
    const newFilePath = path.join(destination, file);
    fs.writeFileSync(newFilePath, content);
    fs.unlinkSync(filePath); // inbox から削除
  }
});