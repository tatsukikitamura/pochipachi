# ぽちぱちパニック ランディングページ

数字のマスを *ぽちぱち* タップして色を置き、可愛い白くまの絵を完成させる癒し系パズルゲーム
**「ぽちぱちパニック」** の紹介LPです。[Astro](https://astro.build/)製・GitHub Actions で GitHub Pages に自動公開します。

🔗 公開URL: https://tatsuki.dev/pochipachi/ （`tatsukikitamura.github.io/pochipachi/` からも転送されます）

---

## 技術スタック

- **Astro v5** — 静的サイト生成（JSほぼゼロで高速・軽量）
- **astro:assets** — 画像を自動で WebP 最適化
- **Google Fonts** — `Mochiy Pop One`（見出し）/ `M PLUS Rounded 1c`（本文）
- 素の CSS（`src/styles/global.css` にデザイントークンを集約）

## ローカル開発

```bash
npm install      # 依存をインストール
npm run dev      # 開発サーバー  → http://localhost:4321/pochipachi/
npm run build    # 本番ビルド    → dist/
npm run preview  # ビルド結果をプレビュー
```

> Node.js 18.20 以上（推奨 v20+）が必要です。

## ディレクトリ構成

```
src/
├─ assets/        最適化対象の画像（icons/ にアイコン類）
├─ components/    セクション単位の Astro コンポーネント
├─ layouts/       Base.astro（メタ情報・フォント・共通スクリプト）
├─ pages/         index.astro（LP本体）
└─ styles/        global.css（デザイントークン＋共通スタイル）
public/           favicon.svg / og.jpg など
.github/workflows/deploy.yml   GitHub Pages 自動デプロイ
```

> `material/` は元素材フォルダです。内部用の依頼書（非公開リンクを含む）が入っているため、
> `.gitignore` で公開リポジトリから除外しています。LP は `src/assets/` のコピーを使います。

## 公開（GitHub Pages × GitHub Actions）

`main` ブランチに push すると、`.github/workflows/deploy.yml` が自動でビルド＆公開します。

初回のみ、GitHub リポジトリの **Settings › Pages › Build and deployment › Source** を
**「GitHub Actions」** に設定してください。

### 公開先を変えるとき（`astro.config.mjs`）

| 公開形態 | `base` の設定 |
| --- | --- |
| プロジェクトページ `…github.io/pochipachi/`（現在の設定） | `'/pochipachi'` |
| リポジトリ名が違う場合 | `'/<リポジトリ名>'` |
| ユーザーページ `…github.io/` や独自ドメイン | `'/'` |

`site`（`https://tatsuki.dev`）は OGP/サイトマップの絶対URL生成に使われます。

## カスタマイズのヒント

- **配色・角丸・影・フォント** … `src/styles/global.css` の `:root` で一括変更できます。
- **ストアリンク** … 配信開始後、`src/components/StoreBadges.astro` の `APP_STORE_URL` /
  `GOOGLE_PLAY_URL` を実際のURLに差し替え、`comingSoon` を `false` にすると「近日配信予定」表示が消えます。
- **文言・画像** … 各 `src/components/*.astro` 内で完結しています。

---

※掲載の画像・内容は開発中のものです。仕様は変更になる場合があります。
