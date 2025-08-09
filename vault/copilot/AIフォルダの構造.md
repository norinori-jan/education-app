🗂️ `AI/templates/` の役割と位置づけ

✅ フォルダ構造の意図

/Vault/ └── AI/ ├── copilot-drafts/ ← Copilotとのやりとり記録 ├── chatgpt-drafts/ ← ChatGPT用プロンプトや出力 ├── genma-drafts/ ← Genmaによる分類・要約支援 └── templates/ ← AI連携専用テンプレート群 ←★ここ！



✅ `AI/templates/` に置くもの

- `ai-extract.md`：AIによる抽出テンプレート
- `tag-rules.md`：タグ命名規則テンプレート
- `meta-template.md`：metaセクションの埋め込みテンプレート
- `copilot-session.md`：Copilotとの対話記録テンプレート

🧩 他のテンプレートとどう違う？

Obsidian全体で使う汎用テンプレート
    
    🧩 他のテンプレートとどう違う？
    
    Obsidian全体で使う汎用テンプレートは `/Templates/` に置くことが多いけど、  
    `AI/templates/` は **AI連携に特化した構造・タグ・meta設計が前提**だから、  
    **Vault全体のテンプレートとは分けておくと再利用性と横断性が高まる**んだ。