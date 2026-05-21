# EnRing Roppongi — 公開手順

## 事前確認（ローカル）

```bash
cd /Users/ryoma/EnRing
npm install
npm run images    # 店舗写真を public/images にコピー
npm run build     # エラーが出ないことを確認
npm run dev       # http://127.0.0.1:3000 で最終確認
```

---

## おすすめ：Vercel（無料枠あり・Next.js 向け）

1. **GitHub にコードを上げる**
   - [github.com](https://github.com) でリポジトリを新規作成
   - ターミナルで:

   ```bash
   cd /Users/ryoma/EnRing
   git init
   git add .
   git commit -m "EnRing Roppongi website"
   git branch -M main
   git remote add origin https://github.com/あなたのユーザー名/enring-roppongi.git
   git push -u origin main
   ```

2. **Vercel に接続**
   - [vercel.com](https://vercel.com) にログイン（GitHub 連携が簡単）
   - **Add New Project** → 上記リポジトリを選択
   - Framework: **Next.js**（自動検出）
   - **Deploy** をクリック

3. **環境変数（任意）**
   - Vercel ダッシュボード → Project → **Settings** → **Environment Variables**
   - 必要なら追加:
     - `NEXT_PUBLIC_CONTACT_EMAIL` = 実際の問い合わせメール
   - GetYourGuide URL はコード内に既定値あり（再デプロイで反映）

4. **独自ドメイン（任意）**
   - Settings → **Domains** → `enring-roppongi.com` などを追加
   - 表示される DNS 設定をドメイン管理画面に登録

公開 URL の例: `https://enring-roppongi.vercel.app`

---

## ビルドだけ自分のサーバーで動かす場合

```bash
npm run build
npm run start   # ポート 3000
```

常時公開には PM2 や systemd、または Docker が必要です。初心者は Vercel が簡単です。

---

## 公開後のチェックリスト

- [ ] トップの **Book on GetYourGuide** が正しい体験ページへ飛ぶ
- [ ] `/experience` と `/visit` の予約セクション
- [ ] 営業時間：ワークショップ 8:00–20:00、バー 22:00–05:00、定休日なし
- [ ] スマホ表示
- [ ] GetYourGuide の体験ページに、このサイト URL を載せる（相互リンク）

---

## 写真を差し替えたとき

```bash
npm run images
git add public/images
git commit -m "Update photos"
git push
```

Vercel は push のたびに自動で再公開されます。
