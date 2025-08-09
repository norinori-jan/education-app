# Python仮想環境セットアップ手順

## 概要
Vault連携CLIやAIスクリプト開発において、環境の衝突を防ぎ、再現性を高めるための仮想環境構築手順。

## 手順

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install typer[all]
python hello.py --name nori

---

## ✍️ どう進める？

1. この内容をページに追記してもいいし、
2. `python-venv.md` をVault内に新規作成して、そこに書き込んでもOK！

どっちのスタイルで進めたい？  
「このページに追記したい」なら、すぐに提案として追加するよ！  
「Vaultノートとして別ファイルにしたい」なら、ファイル作成のコマンドと初期内容を一緒に整えよう！