webpackJsonp([32],{43:function(n,i){n.exports='## Installation  \n\nSimply download and include with `<script>`. Omi will be registered as a global variable.\n\n* [Omi Development Version](https://unpkg.com/omi@latest/dist/omi.js)\n* [Omi Production Version](https://unpkg.com/omi@latest/dist/omi.min.js)\n\nInstall via npm:\n\n```\nnpm i omi\n```\n\n\n## CLI\n\nOmi provides the official CLI. You don\'t need to learn how to configure webpack, Babel or TypeScript. CLI helps you configure everything and provides various templates for different project types.\n\n```bash\n$ npm i omi-cli -g     # install cli\n$ omi init my-app      # init project\n$ cd my-app            \n$ npm start            # develop\n$ npm run build        # release\n```\n\n> `npx omi-cli init my-app` is also supported(npm v5.2.0+).\n\n\n### Scripts\n\n```json\n"scripts": {\n  "start": "vite",\n  "build": "tsc && vite build --base=./",\n}\n```\n\nYou can set up the PUBLIC_URL, such as\uff1a\n\n```json\n  "build": "tsc && vite build --base=https://your.url.com/sub ",\n```\n\n\n'}});
//# sourceMappingURL=32.5888250b.chunk.js.map