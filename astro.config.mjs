// @ts-check
import { defineConfig } from 'astro/config';

// ============================================================================
//  GitHub Pages 公開設定
//  ---------------------------------------------------------------------------
//  想定: プロジェクトページ  https://<ユーザー名>.github.io/pochipachi/
//
//  ▸ SITE … OGP / sitemap などの「絶対URL」生成に使われます。
//           このアカウントは独自ドメイン tatsuki.dev が設定済みのため、
//           プロジェクトページは https://tatsuki.dev/pochipachi/ で公開されます。
//           （tatsukikitamura.github.io/pochipachi/ からも転送されます）
//  ▸ BASE … サイトの公開ディレクトリ。リポジトリ名が "pochipachi" 以外なら
//           '/<リポジトリ名>' に変更してください。
//           ルート(独自ドメイン直下など)で公開する場合は BASE = '/' に変更してください。
// ============================================================================
const SITE = 'https://tatsuki.dev';
const BASE = '/pochipachi';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  build: {
    // index.html を /pochipachi/ 直下に出力（GitHub Pages 向け）
    format: 'directory',
  },
});
