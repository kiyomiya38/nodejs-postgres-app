FROM registry.access.redhat.com/ubi9/nodejs-20:latest

# アプリケーションコードをコピー
WORKDIR /opt/app-root/src
COPY . .

# 依存関係をインストール
RUN npm install

# 非 root ポートでの公開
EXPOSE 8080

# 起動コマンド
CMD ["node", "app.js"]
