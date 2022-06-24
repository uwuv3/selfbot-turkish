# Nasıl kullanıcı tokeni alınır ?
<strong>Copy code to console Discord [Ctrl + Shift + I]</strong>
```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

Yapımcı : <img src="https://cdn.discordapp.com/emojis/889092230063734795.png" alt="." width="16" height="16"/> [<strong>hxr404</strong>](https://github.com/hxr404/Discord-Console-hacks)
</br>
## Buttons
# [![Fork on Replit](https://img.shields.io/badge/REPL-FORK-green)](https://replit.com/github/uwuv3/selfbot-turkish)
# [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/uwuv3/selfbot-turkish)

## Nodejs ile
# <img alt="node-current" src="https://img.shields.io/node/v/discord.js-selfbot-v13?style=plastic">
