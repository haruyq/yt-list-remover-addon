# Yt-List-Remover-Addon

このAddonは、youtube.comの動画プレイヤーからコピーした共有リンク(youtu.be)内の?list=Stringを削除するためのアドオンです。  
Firefoxで動作します。  

## 動作
ユーザーがyoutube.comにて動画を再生します。  
再生中のプレイヤーを右クリックすると、「動画のURLをコピー」という項目があります。  
通常、それをクリックすると`https://youtu.be/{String}?list={String}`というリンクになり、listがついてきてしまいます。  
それを無効化します。これにより、discordの音楽Botや、VRChatの動画プレイヤーなどで誤入力を防ぎます。  

## インストール手順
Firefoxで署名されていないアドオンを通常インストールしようとすると「アドオンは壊れているため、インストールできませんでした」と表示されます。以下のいずれかの方法をご利用ください。

- **一時的に読み込む (推奨)**: `about:debugging#/runtime/this-firefox` を開き、「一時的なアドオンを読み込む」をクリックして `manifest.json` を選択します。Firefox を再起動するまでは有効です。
- **署名を無効化する (Nightly/Dev 限定)**: `about:config` で `xpinstall.signatures.required` を `false` に変更した後、`manifest.zip` (または `.xpi`) を「ファイルからインストール」で読み込みます。※通常版では無効化できません。
- **AMO にアップロードして署名**: `web-ext sign` などで Mozilla アドオンサイトの署名を取得すると、通常インストールが可能になります。

## 開発 / 実行方法

```powershell
npm install

# Firefox Nightly
npm run start:firefox -- --firefox=nightly

# Firefox Nightly Android
npm run start:firefox-android -- --firefox-apk org.mozilla.fenix --android-device=<DEVICE_ID>>
```

### Firefox Androidで実行する際の注意点
- 事前に Android 端末で USB デバッグを有効化し、`adb devices` で認識されることを確認してください。
- 端末が複数検出される場合は `--android-device=<DEVICE_ID>` を指定します。
- 初回実行で Firefox がインストールされていない場合、Nightly の APK を端末に導入しておく必要があります。

## License
MIT Licenseで公開されています。  
GPT-5 (Codex)、Github Copilotに感謝。