# Yt-List-Remover-Addon

このAddonは、youtube.comの動画プレイヤーからコピーした共有リンク(youtu.be)内の?list=Stringを削除するためのアドオンです。  
Firefoxで動作します。  

## 動作
ユーザーがyoutube.comにて動画を再生します。  
再生中のプレイヤーを右クリックすると、「動画のURLをコピー」という項目があります。  
通常、それをクリックすると`https://youtu.be/{String}?list={String}`というリンクになり、`?list=`というURLパラメータが存在します。 
それを自動的に削除し、上書きします。これにより、discordの音楽Botや、VRChatの動画プレイヤーなどで誤入力を防ぎます。  

## インストール
[こちらからインストールできます](https://addons.mozilla.org/ja/firefox/addon/youtube-list-remover/)

## License
MIT Licenseで公開されています。  
GPT-5 (Codex)、Github Copilotに感謝。
