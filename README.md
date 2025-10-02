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

- **一時的に読み込む**: `about:debugging#/runtime/this-firefox` を開き、「一時的なアドオンを読み込む」をクリックして `manifest.json` を選択します。Firefox を再起動するまでは有効です。
- **署名を無効化する (Nightly/Dev)**: `about:config` で `xpinstall.signatures.required` を `false` に変更した後、「ファイルからインストール」で読み込みます。※通常版では無効化できません。
- **AMOからインストール**: [こちら](https://addons.mozilla.org/ja/firefox/addon/youtube-list-remover/)からインストールできます。

## License
MIT Licenseで公開されています。  
GPT-5 (Codex)、Github Copilotに感謝。
