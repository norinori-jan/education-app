🛠️ GitHubアップロード手順（CLIベース
# 1. リポジトリ作成（まだなら）
gh repo create nori-draft-vault --private --source=. --remote=origin

# 2. ファイルを追加
mkdir -p Vault/setup Vault/templates
# ここに各テンプレートファイルを保存（エディタでコピペ）

# 3. コミット＆プッシュ
git add Vault
git commit -m "初期Vault構造とテンプレート追加"
git push origin main