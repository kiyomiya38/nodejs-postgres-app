FROM registry.access.redhat.com/ubi9/nodejs-20:1-52

# アプリケーションコードをコピー
WORKDIR /opt/app-root/src
COPY . .

# 依存関係をインストール（package.jsonに基づく）
RUN npm install

# ポート番号はOpenShiftの非rootポート（8080）
EXPOSE 8080

# 起動コマンド
CMD ["npm", "start"]
