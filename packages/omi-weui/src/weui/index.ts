import { css } from 'omi'

// @ts-ignore
import weuiStyle from './weui.css?raw'

const varsStyle = `
body,.wx-root,page {
  --weui-BTN-HEIGHT: 48;
  --weui-BTN-HEIGHT-MEDIUM: 40;
  --weui-BTN-HEIGHT-SMALL: 32;
}

.wx-root,body {
  --weui-BTN-ACTIVE-MASK: rgba(0, 0, 0, 0.1);
}

.wx-root[data-weui-theme='dark'],body[data-weui-theme='dark'] {
  --weui-BTN-ACTIVE-MASK: rgba(255, 255, 255, 0.1);
}

@media (prefers-color-scheme: dark) {
  .wx-root:not([data-weui-theme='light']),body:not([data-weui-theme='light']) {
      --weui-BTN-ACTIVE-MASK: rgba(255, 255, 255, 0.1);
  }
}

.wx-root,body {
  --weui-BTN-DEFAULT-ACTIVE-BG: #e6e6e6;
}

.wx-root[data-weui-theme='dark'],body[data-weui-theme='dark'] {
  --weui-BTN-DEFAULT-ACTIVE-BG: rgba(255, 255, 255, 0.126);
}

@media (prefers-color-scheme: dark) {
  .wx-root:not([data-weui-theme='light']),body:not([data-weui-theme='light']) {
      --weui-BTN-DEFAULT-ACTIVE-BG: rgba(255, 255, 255, 0.126);
  }
}

.wx-root,body {
  --weui-DIALOG-LINE-COLOR: rgba(0, 0, 0, 0.1);
}

.wx-root[data-weui-theme='dark'],body[data-weui-theme='dark'] {
  --weui-DIALOG-LINE-COLOR: rgba(255, 255, 255, 0.1);
}

@media (prefers-color-scheme: dark) {
  .wx-root:not([data-weui-theme='light']),body:not([data-weui-theme='light']) {
      --weui-DIALOG-LINE-COLOR: rgba(255, 255, 255, 0.1);
  }
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  line-height: 1.6;
  font-family: system-ui,-apple-system,"Helvetica Neue",sans-serif;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
}

a img {
  border: 0;
}

a {
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

input,textarea {
  caret-color: #07c160;
  caret-color: var(--weui-BRAND);
}

::-webkit-input-placeholder {
  color: rgba(0,0,0,0.3);
  color: var(--weui-FG-2);
}

::placeholder {
  color: rgba(0,0,0,0.3);
  color: var(--weui-FG-2);
}

body,.wx-root {
  --weui-BG-0: #ededed;
  --weui-BG-1: #f7f7f7;
  --weui-BG-2: #fff;
  --weui-BG-3: #f7f7f7;
  --weui-BG-4: #4c4c4c;
  --weui-BG-5: #fff;
  --weui-BLUE-100: #10aeff;
  --weui-BLUE-120: #3fbeff;
  --weui-BLUE-170: #b7e6ff;
  --weui-BLUE-80: #0c8bcc;
  --weui-BLUE-90: #0e9ce6;
  --weui-BLUE-BG-100: #48a6e2;
  --weui-BLUE-BG-110: #5aafe4;
  --weui-BLUE-BG-130: #7fc0ea;
  --weui-BLUE-BG-90: #4095cb;
  --weui-BRAND-100: #07c160;
  --weui-BRAND-120: #38cd7f;
  --weui-BRAND-170: #b4ecce;
  --weui-BRAND-80: #059a4c;
  --weui-BRAND-90: #06ae56;
  --weui-BRAND-BG-100: #2aae67;
  --weui-BRAND-BG-110: #3eb575;
  --weui-BRAND-BG-130: #69c694;
  --weui-BRAND-BG-90: #259c5c;
  --weui-FG-0: rgba(0, 0, 0, 0.9);
  --weui-FG-0_5: rgba(0, 0, 0, 0.9);
  --weui-FG-1: rgba(0, 0, 0, 0.55);
  --weui-FG-2: rgba(0, 0, 0, 0.3);
  --weui-FG-3: rgba(0, 0, 0, 0.1);
  --weui-FG-4: rgba(0, 0, 0, 0.15);
  --weui-GLYPH-0: rgba(0, 0, 0, 0.9);
  --weui-GLYPH-1: rgba(0, 0, 0, 0.55);
  --weui-GLYPH-2: rgba(0, 0, 0, 0.3);
  --weui-GLYPH-WHITE-0: rgba(255, 255, 255, 0.8);
  --weui-GLYPH-WHITE-1: rgba(255, 255, 255, 0.5);
  --weui-GLYPH-WHITE-2: rgba(255, 255, 255, 0.3);
  --weui-GLYPH-WHITE-3: #fff;
  --weui-GREEN-100: #91d300;
  --weui-GREEN-120: #a7db33;
  --weui-GREEN-170: #def1b3;
  --weui-GREEN-80: #74a800;
  --weui-GREEN-90: #82bd00;
  --weui-GREEN-BG-100: #96be40;
  --weui-GREEN-BG-110: #a0c452;
  --weui-GREEN-BG-130: #b5d179;
  --weui-GREEN-BG-90: #86aa39;
  --weui-INDIGO-100: #1485ee;
  --weui-INDIGO-120: #439df1;
  --weui-INDIGO-170: #b8daf9;
  --weui-INDIGO-80: #106abe;
  --weui-INDIGO-90: #1277d6;
  --weui-INDIGO-BG-100: #2b77bf;
  --weui-INDIGO-BG-110: #3f84c5;
  --weui-INDIGO-BG-130: #6ba0d2;
  --weui-INDIGO-BG-90: #266aab;
  --weui-LIGHTGREEN-100: #95ec69;
  --weui-LIGHTGREEN-120: #aaef87;
  --weui-LIGHTGREEN-170: #def9d1;
  --weui-LIGHTGREEN-80: #77bc54;
  --weui-LIGHTGREEN-90: #85d35e;
  --weui-LIGHTGREEN-BG-100: #72cf60;
  --weui-LIGHTGREEN-BG-110: #80d370;
  --weui-LIGHTGREEN-BG-130: #9cdd90;
  --weui-LIGHTGREEN-BG-90: #66b956;
  --weui-LINK-100: #576b95;
  --weui-LINK-120: #7888aa;
  --weui-LINK-170: #ccd2de;
  --weui-LINK-80: #455577;
  --weui-LINK-90: #4e6085;
  --weui-LINKFINDER-100: #002666;
  --weui-MATERIAL-ATTACHMENTCOLUMN: rgba(245, 245, 245, 0.95);
  --weui-MATERIAL-NAVIGATIONBAR: rgba(237, 237, 237, 0.94);
  --weui-MATERIAL-REGULAR: rgba(247, 247, 247, 0.3);
  --weui-MATERIAL-THICK: rgba(247, 247, 247, 0.8);
  --weui-MATERIAL-THIN: rgba(255, 255, 255, 0.2);
  --weui-MATERIAL-TOOLBAR: rgba(246, 246, 246, 0.82);
  --weui-ORANGE-100: #fa9d3b;
  --weui-ORANGE-120: #fbb062;
  --weui-ORANGE-170: #fde1c3;
  --weui-ORANGE-80: #c87d2f;
  --weui-ORANGE-90: #e08c34;
  --weui-ORANGE-BG-100: #ea7800;
  --weui-ORANGE-BG-110: #ec8519;
  --weui-ORANGE-BG-130: #f0a04d;
  --weui-ORANGE-BG-90: #d26b00;
  --weui-ORANGERED-100: #ff6146;
  --weui-OVERLAY: rgba(0, 0, 0, 0.5);
  --weui-OVERLAY-WHITE: rgba(242, 242, 242, 0.8);
  --weui-PURPLE-100: #6467f0;
  --weui-PURPLE-120: #8385f3;
  --weui-PURPLE-170: #d0d1fa;
  --weui-PURPLE-80: #5052c0;
  --weui-PURPLE-90: #595cd7;
  --weui-PURPLE-BG-100: #6769ba;
  --weui-PURPLE-BG-110: #7678c1;
  --weui-PURPLE-BG-130: #9496ce;
  --weui-PURPLE-BG-90: #5c5ea7;
  --weui-RED-100: #fa5151;
  --weui-RED-120: #fb7373;
  --weui-RED-170: #fdcaca;
  --weui-RED-80: #c84040;
  --weui-RED-90: #e14949;
  --weui-RED-BG-100: #cf5148;
  --weui-RED-BG-110: #d3625a;
  --weui-RED-BG-130: #dd847e;
  --weui-RED-BG-90: #b94840;
  --weui-SECONDARY-BG: rgba(0, 0, 0, 0.05);
  --weui-SEPARATOR-0: rgba(0, 0, 0, 0.1);
  --weui-SEPARATOR-1: rgba(0, 0, 0, 0.15);
  --weui-STATELAYER-HOVERED: rgba(0, 0, 0, 0.02);
  --weui-STATELAYER-PRESSED: rgba(0, 0, 0, 0.1);
  --weui-STATELAYER-PRESSEDSTRENGTHENED: rgba(0, 0, 0, 0.2);
  --weui-YELLOW-100: #ffc300;
  --weui-YELLOW-120: #ffcf33;
  --weui-YELLOW-170: #ffecb2;
  --weui-YELLOW-80: #cc9c00;
  --weui-YELLOW-90: #e6af00;
  --weui-YELLOW-BG-100: #efb600;
  --weui-YELLOW-BG-110: #f0bd19;
  --weui-YELLOW-BG-130: #f3cc4d;
  --weui-YELLOW-BG-90: #d7a400;
  --weui-FG-HALF: rgba(0, 0, 0, 0.9);
  --weui-RED: #fa5151;
  --weui-ORANGERED: #ff6146;
  --weui-ORANGE: #fa9d3b;
  --weui-YELLOW: #ffc300;
  --weui-GREEN: #91d300;
  --weui-LIGHTGREEN: #95ec69;
  --weui-TEXTGREEN: #06ae56;
  --weui-BRAND: #07c160;
  --weui-BLUE: #10aeff;
  --weui-INDIGO: #1485ee;
  --weui-PURPLE: #6467f0;
  --weui-LINK: #576b95;
  --weui-TAG-TEXT-ORANGE: #fa9d3b;
  --weui-TAG-TEXT-GREEN: #06ae56;
  --weui-TAG-TEXT-BLUE: #10aeff;
  --weui-REDORANGE: #ff6146;
  --weui-TAG-TEXT-BLACK: rgba(0, 0, 0, 0.5);
  --weui-TAG-BACKGROUND-BLACK: rgba(0, 0, 0, 0.05);
  --weui-WHITE: #fff;
  --weui-BG: #fff;
  --weui-FG: #000;
  --weui-FG-5: rgba(0, 0, 0, 0.05);
  --weui-TAG-BACKGROUND-ORANGE: rgba(250, 157, 59, 0.1);
  --weui-TAG-BACKGROUND-GREEN: rgba(6, 174, 86, 0.1);
  --weui-TAG-TEXT-RED: rgba(250, 81, 81, 0.6);
  --weui-TAG-BACKGROUND-RED: rgba(250, 81, 81, 0.1);
  --weui-TAG-BACKGROUND-BLUE: rgba(16, 174, 255, 0.1);
}

@media (prefers-color-scheme: dark) {
  .wx-root:not([data-weui-theme='light']),body:not([data-weui-theme='light']) {
      --weui-BG-0: #111;
      --weui-BG-1: #1e1e1e;
      --weui-BG-2: #191919;
      --weui-BG-3: #202020;
      --weui-BG-4: #404040;
      --weui-BG-5: #2c2c2c;
      --weui-BLUE-100: #10aeff;
      --weui-BLUE-120: #0c8bcc;
      --weui-BLUE-170: #04344d;
      --weui-BLUE-80: #3fbeff;
      --weui-BLUE-90: #28b6ff;
      --weui-BLUE-BG-100: #48a6e2;
      --weui-BLUE-BG-110: #4095cb;
      --weui-BLUE-BG-130: #32749e;
      --weui-BLUE-BG-90: #5aafe4;
      --weui-BRAND-100: #07c160;
      --weui-BRAND-120: #059a4c;
      --weui-BRAND-170: #023a1c;
      --weui-BRAND-80: #38cd7f;
      --weui-BRAND-90: #20c770;
      --weui-BRAND-BG-100: #2aae67;
      --weui-BRAND-BG-110: #259c5c;
      --weui-BRAND-BG-130: #1d7a48;
      --weui-BRAND-BG-90: #3eb575;
      --weui-FG-0: rgba(255, 255, 255, 0.8);
      --weui-FG-0_5: rgba(255, 255, 255, 0.6);
      --weui-FG-1: rgba(255, 255, 255, 0.5);
      --weui-FG-2: rgba(255, 255, 255, 0.3);
      --weui-FG-3: rgba(255, 255, 255, 0.1);
      --weui-FG-4: rgba(255, 255, 255, 0.15);
      --weui-GLYPH-0: rgba(255, 255, 255, 0.8);
      --weui-GLYPH-1: rgba(255, 255, 255, 0.5);
      --weui-GLYPH-2: rgba(255, 255, 255, 0.3);
      --weui-GLYPH-WHITE-0: rgba(255, 255, 255, 0.8);
      --weui-GLYPH-WHITE-1: rgba(255, 255, 255, 0.5);
      --weui-GLYPH-WHITE-2: rgba(255, 255, 255, 0.3);
      --weui-GLYPH-WHITE-3: #fff;
      --weui-GREEN-100: #74a800;
      --weui-GREEN-120: #5c8600;
      --weui-GREEN-170: #233200;
      --weui-GREEN-80: #8fb933;
      --weui-GREEN-90: #82b01a;
      --weui-GREEN-BG-100: #789833;
      --weui-GREEN-BG-110: #6b882d;
      --weui-GREEN-BG-130: #65802b;
      --weui-GREEN-BG-90: #85a247;
      --weui-INDIGO-100: #1196ff;
      --weui-INDIGO-120: #0d78cc;
      --weui-INDIGO-170: #052d4d;
      --weui-INDIGO-80: #40abff;
      --weui-INDIGO-90: #28a0ff;
      --weui-INDIGO-BG-100: #0d78cc;
      --weui-INDIGO-BG-110: #0b6bb7;
      --weui-INDIGO-BG-130: #09548f;
      --weui-INDIGO-BG-90: #2585d1;
      --weui-LIGHTGREEN-100: #3eb575;
      --weui-LIGHTGREEN-120: #31905d;
      --weui-LIGHTGREEN-170: #123522;
      --weui-LIGHTGREEN-80: #64c390;
      --weui-LIGHTGREEN-90: #51bc83;
      --weui-LIGHTGREEN-BG-100: #31905d;
      --weui-LIGHTGREEN-BG-110: #2c8153;
      --weui-LIGHTGREEN-BG-130: #226541;
      --weui-LIGHTGREEN-BG-90: #31905d;
      --weui-LINK-100: #7d90a9;
      --weui-LINK-120: #647387;
      --weui-LINK-170: #252a32;
      --weui-LINK-80: #97a6ba;
      --weui-LINK-90: #899ab1;
      --weui-LINKFINDER-100: #dee9ff;
      --weui-MATERIAL-ATTACHMENTCOLUMN: rgba(32, 32, 32, 0.93);
      --weui-MATERIAL-NAVIGATIONBAR: rgba(18, 18, 18, 0.9);
      --weui-MATERIAL-REGULAR: rgba(37, 37, 37, 0.6);
      --weui-MATERIAL-THICK: rgba(34, 34, 34, 0.9);
      --weui-MATERIAL-THIN: rgba(95, 95, 95, 0.4);
      --weui-MATERIAL-TOOLBAR: rgba(35, 35, 35, 0.93);
      --weui-ORANGE-100: #c87d2f;
      --weui-ORANGE-120: #a06425;
      --weui-ORANGE-170: #3b250e;
      --weui-ORANGE-80: #d39758;
      --weui-ORANGE-90: #cd8943;
      --weui-ORANGE-BG-100: #bb6000;
      --weui-ORANGE-BG-110: #a85600;
      --weui-ORANGE-BG-130: #824300;
      --weui-ORANGE-BG-90: #c1701a;
      --weui-ORANGERED-100: #ff6146;
      --weui-OVERLAY: rgba(0, 0, 0, 0.8);
      --weui-OVERLAY-WHITE: rgba(242, 242, 242, 0.8);
      --weui-PURPLE-100: #8183ff;
      --weui-PURPLE-120: #6768cc;
      --weui-PURPLE-170: #26274c;
      --weui-PURPLE-80: #9a9bff;
      --weui-PURPLE-90: #8d8fff;
      --weui-PURPLE-BG-100: #6768cc;
      --weui-PURPLE-BG-110: #5c5db7;
      --weui-PURPLE-BG-130: #48498f;
      --weui-PURPLE-BG-90: #7677d1;
      --weui-RED-100: #fa5151;
      --weui-RED-120: #c84040;
      --weui-RED-170: #4b1818;
      --weui-RED-80: #fb7373;
      --weui-RED-90: #fa6262;
      --weui-RED-BG-100: #cf5148;
      --weui-RED-BG-110: #ba4940;
      --weui-RED-BG-130: #913832;
      --weui-RED-BG-90: #d3625a;
      --weui-SECONDARY-BG: rgba(255, 255, 255, 0.1);
      --weui-SEPARATOR-0: rgba(255, 255, 255, 0.05);
      --weui-SEPARATOR-1: rgba(255, 255, 255, 0.15);
      --weui-STATELAYER-HOVERED: rgba(0, 0, 0, 0.02);
      --weui-STATELAYER-PRESSED: rgba(255, 255, 255, 0.1);
      --weui-STATELAYER-PRESSEDSTRENGTHENED: rgba(255, 255, 255, 0.2);
      --weui-YELLOW-100: #cc9c00;
      --weui-YELLOW-120: #a37c00;
      --weui-YELLOW-170: #3d2f00;
      --weui-YELLOW-80: #d6af33;
      --weui-YELLOW-90: #d1a519;
      --weui-YELLOW-BG-100: #bf9100;
      --weui-YELLOW-BG-110: #ab8200;
      --weui-YELLOW-BG-130: #866500;
      --weui-YELLOW-BG-90: #c59c1a;
      --weui-FG-HALF: rgba(255, 255, 255, 0.6);
      --weui-RED: #fa5151;
      --weui-ORANGERED: #ff6146;
      --weui-ORANGE: #c87d2f;
      --weui-YELLOW: #cc9c00;
      --weui-GREEN: #74a800;
      --weui-LIGHTGREEN: #3eb575;
      --weui-TEXTGREEN: #259c5c;
      --weui-BRAND: #07c160;
      --weui-BLUE: #10aeff;
      --weui-INDIGO: #1196ff;
      --weui-PURPLE: #8183ff;
      --weui-LINK: #7d90a9;
      --weui-REDORANGE: #ff6146;
      --weui-TAG-TEXT-BLACK: rgba(255, 255, 255, 0.5);
      --weui-TAG-BACKGROUND-BLACK: rgba(255, 255, 255, 0.05);
      --weui-WHITE: rgba(255, 255, 255, 0.8);
      --weui-FG: #fff;
      --weui-BG: #000;
      --weui-FG-5: rgba(255, 255, 255, 0.1);
      --weui-TAG-BACKGROUND-ORANGE: rgba(250, 157, 59, 0.1);
      --weui-TAG-BACKGROUND-GREEN: rgba(6, 174, 86, 0.1);
      --weui-TAG-TEXT-RED: rgba(250, 81, 81, 0.6);
      --weui-TAG-BACKGROUND-RED: rgba(250, 81, 81, 0.1);
      --weui-TAG-BACKGROUND-BLUE: rgba(16, 174, 255, 0.1);
      --weui-TAG-TEXT-ORANGE: rgba(250, 157, 59, 0.6);
      --weui-TAG-TEXT-GREEN: rgba(6, 174, 86, 0.6);
      --weui-TAG-TEXT-BLUE: rgba(16, 174, 255, 0.6);
  }
}

.wx-root[data-weui-theme='dark'],body[data-weui-theme='dark'] {
  --weui-BG-0: #111;
  --weui-BG-1: #1e1e1e;
  --weui-BG-2: #191919;
  --weui-BG-3: #202020;
  --weui-BG-4: #404040;
  --weui-BG-5: #2c2c2c;
  --weui-BLUE-100: #10aeff;
  --weui-BLUE-120: #0c8bcc;
  --weui-BLUE-170: #04344d;
  --weui-BLUE-80: #3fbeff;
  --weui-BLUE-90: #28b6ff;
  --weui-BLUE-BG-100: #48a6e2;
  --weui-BLUE-BG-110: #4095cb;
  --weui-BLUE-BG-130: #32749e;
  --weui-BLUE-BG-90: #5aafe4;
  --weui-BRAND-100: #07c160;
  --weui-BRAND-120: #059a4c;
  --weui-BRAND-170: #023a1c;
  --weui-BRAND-80: #38cd7f;
  --weui-BRAND-90: #20c770;
  --weui-BRAND-BG-100: #2aae67;
  --weui-BRAND-BG-110: #259c5c;
  --weui-BRAND-BG-130: #1d7a48;
  --weui-BRAND-BG-90: #3eb575;
  --weui-FG-0: rgba(255, 255, 255, 0.8);
  --weui-FG-0_5: rgba(255, 255, 255, 0.6);
  --weui-FG-1: rgba(255, 255, 255, 0.5);
  --weui-FG-2: rgba(255, 255, 255, 0.3);
  --weui-FG-3: rgba(255, 255, 255, 0.1);
  --weui-FG-4: rgba(255, 255, 255, 0.15);
  --weui-GLYPH-0: rgba(255, 255, 255, 0.8);
  --weui-GLYPH-1: rgba(255, 255, 255, 0.5);
  --weui-GLYPH-2: rgba(255, 255, 255, 0.3);
  --weui-GLYPH-WHITE-0: rgba(255, 255, 255, 0.8);
  --weui-GLYPH-WHITE-1: rgba(255, 255, 255, 0.5);
  --weui-GLYPH-WHITE-2: rgba(255, 255, 255, 0.3);
  --weui-GLYPH-WHITE-3: #fff;
  --weui-GREEN-100: #74a800;
  --weui-GREEN-120: #5c8600;
  --weui-GREEN-170: #233200;
  --weui-GREEN-80: #8fb933;
  --weui-GREEN-90: #82b01a;
  --weui-GREEN-BG-100: #789833;
  --weui-GREEN-BG-110: #6b882d;
  --weui-GREEN-BG-130: #65802b;
  --weui-GREEN-BG-90: #85a247;
  --weui-INDIGO-100: #1196ff;
  --weui-INDIGO-120: #0d78cc;
  --weui-INDIGO-170: #052d4d;
  --weui-INDIGO-80: #40abff;
  --weui-INDIGO-90: #28a0ff;
  --weui-INDIGO-BG-100: #0d78cc;
  --weui-INDIGO-BG-110: #0b6bb7;
  --weui-INDIGO-BG-130: #09548f;
  --weui-INDIGO-BG-90: #2585d1;
  --weui-LIGHTGREEN-100: #3eb575;
  --weui-LIGHTGREEN-120: #31905d;
  --weui-LIGHTGREEN-170: #123522;
  --weui-LIGHTGREEN-80: #64c390;
  --weui-LIGHTGREEN-90: #51bc83;
  --weui-LIGHTGREEN-BG-100: #31905d;
  --weui-LIGHTGREEN-BG-110: #2c8153;
  --weui-LIGHTGREEN-BG-130: #226541;
  --weui-LIGHTGREEN-BG-90: #31905d;
  --weui-LINK-100: #7d90a9;
  --weui-LINK-120: #647387;
  --weui-LINK-170: #252a32;
  --weui-LINK-80: #97a6ba;
  --weui-LINK-90: #899ab1;
  --weui-LINKFINDER-100: #dee9ff;
  --weui-MATERIAL-ATTACHMENTCOLUMN: rgba(32, 32, 32, 0.93);
  --weui-MATERIAL-NAVIGATIONBAR: rgba(18, 18, 18, 0.9);
  --weui-MATERIAL-REGULAR: rgba(37, 37, 37, 0.6);
  --weui-MATERIAL-THICK: rgba(34, 34, 34, 0.9);
  --weui-MATERIAL-THIN: rgba(95, 95, 95, 0.4);
  --weui-MATERIAL-TOOLBAR: rgba(35, 35, 35, 0.93);
  --weui-ORANGE-100: #c87d2f;
  --weui-ORANGE-120: #a06425;
  --weui-ORANGE-170: #3b250e;
  --weui-ORANGE-80: #d39758;
  --weui-ORANGE-90: #cd8943;
  --weui-ORANGE-BG-100: #bb6000;
  --weui-ORANGE-BG-110: #a85600;
  --weui-ORANGE-BG-130: #824300;
  --weui-ORANGE-BG-90: #c1701a;
  --weui-ORANGERED-100: #ff6146;
  --weui-OVERLAY: rgba(0, 0, 0, 0.8);
  --weui-OVERLAY-WHITE: rgba(242, 242, 242, 0.8);
  --weui-PURPLE-100: #8183ff;
  --weui-PURPLE-120: #6768cc;
  --weui-PURPLE-170: #26274c;
  --weui-PURPLE-80: #9a9bff;
  --weui-PURPLE-90: #8d8fff;
  --weui-PURPLE-BG-100: #6768cc;
  --weui-PURPLE-BG-110: #5c5db7;
  --weui-PURPLE-BG-130: #48498f;
  --weui-PURPLE-BG-90: #7677d1;
  --weui-RED-100: #fa5151;
  --weui-RED-120: #c84040;
  --weui-RED-170: #4b1818;
  --weui-RED-80: #fb7373;
  --weui-RED-90: #fa6262;
  --weui-RED-BG-100: #cf5148;
  --weui-RED-BG-110: #ba4940;
  --weui-RED-BG-130: #913832;
  --weui-RED-BG-90: #d3625a;
  --weui-SECONDARY-BG: rgba(255, 255, 255, 0.1);
  --weui-SEPARATOR-0: rgba(255, 255, 255, 0.05);
  --weui-SEPARATOR-1: rgba(255, 255, 255, 0.15);
  --weui-STATELAYER-HOVERED: rgba(0, 0, 0, 0.02);
  --weui-STATELAYER-PRESSED: rgba(255, 255, 255, 0.1);
  --weui-STATELAYER-PRESSEDSTRENGTHENED: rgba(255, 255, 255, 0.2);
  --weui-YELLOW-100: #cc9c00;
  --weui-YELLOW-120: #a37c00;
  --weui-YELLOW-170: #3d2f00;
  --weui-YELLOW-80: #d6af33;
  --weui-YELLOW-90: #d1a519;
  --weui-YELLOW-BG-100: #bf9100;
  --weui-YELLOW-BG-110: #ab8200;
  --weui-YELLOW-BG-130: #866500;
  --weui-YELLOW-BG-90: #c59c1a;
  --weui-FG-HALF: rgba(255, 255, 255, 0.6);
  --weui-RED: #fa5151;
  --weui-ORANGERED: #ff6146;
  --weui-ORANGE: #c87d2f;
  --weui-YELLOW: #cc9c00;
  --weui-GREEN: #74a800;
  --weui-LIGHTGREEN: #3eb575;
  --weui-TEXTGREEN: #259c5c;
  --weui-BRAND: #07c160;
  --weui-BLUE: #10aeff;
  --weui-INDIGO: #1196ff;
  --weui-PURPLE: #8183ff;
  --weui-LINK: #7d90a9;
  --weui-REDORANGE: #ff6146;
  --weui-TAG-TEXT-BLACK: rgba(255, 255, 255, 0.5);
  --weui-TAG-BACKGROUND-BLACK: rgba(255, 255, 255, 0.05);
  --weui-WHITE: rgba(255, 255, 255, 0.8);
  --weui-FG: #fff;
  --weui-BG: #000;
  --weui-FG-5: rgba(255, 255, 255, 0.1);
  --weui-TAG-BACKGROUND-ORANGE: rgba(250, 157, 59, 0.1);
  --weui-TAG-BACKGROUND-GREEN: rgba(6, 174, 86, 0.1);
  --weui-TAG-TEXT-RED: rgba(250, 81, 81, 0.6);
  --weui-TAG-BACKGROUND-RED: rgba(250, 81, 81, 0.1);
  --weui-TAG-BACKGROUND-BLUE: rgba(16, 174, 255, 0.1);
  --weui-TAG-TEXT-ORANGE: rgba(250, 157, 59, 0.6);
  --weui-TAG-TEXT-GREEN: rgba(6, 174, 86, 0.6);
  --weui-TAG-TEXT-BLUE: rgba(16, 174, 255, 0.6);
}

.wx-root[data-weui-mode='care'],body[data-weui-mode='care'] {
  --weui-BG-0: #ededed;
  --weui-BG-1: #f7f7f7;
  --weui-BG-2: #fff;
  --weui-BG-3: #f7f7f7;
  --weui-BG-4: #4c4c4c;
  --weui-BG-5: #fff;
  --weui-BLUE-100: #007dbb;
  --weui-BLUE-120: #3fbeff;
  --weui-BLUE-170: #b7e6ff;
  --weui-BLUE-80: #0c8bcc;
  --weui-BLUE-90: #0e9ce6;
  --weui-BLUE-BG-100: #48a6e2;
  --weui-BLUE-BG-110: #5aafe4;
  --weui-BLUE-BG-130: #7fc0ea;
  --weui-BLUE-BG-90: #4095cb;
  --weui-BRAND-100: #018942;
  --weui-BRAND-120: #38cd7f;
  --weui-BRAND-170: #b4ecce;
  --weui-BRAND-80: #059a4c;
  --weui-BRAND-90: #06ae56;
  --weui-BRAND-BG-100: #2aae67;
  --weui-BRAND-BG-110: #3eb575;
  --weui-BRAND-BG-130: #69c694;
  --weui-BRAND-BG-90: #259c5c;
  --weui-FG-0: #000;
  --weui-FG-0_5: #000;
  --weui-FG-1: rgba(0, 0, 0, 0.6);
  --weui-FG-2: rgba(0, 0, 0, 0.42);
  --weui-FG-3: rgba(0, 0, 0, 0.1);
  --weui-FG-4: rgba(0, 0, 0, 0.15);
  --weui-GLYPH-0: #000;
  --weui-GLYPH-1: rgba(0, 0, 0, 0.6);
  --weui-GLYPH-2: rgba(0, 0, 0, 0.42);
  --weui-GLYPH-WHITE-0: rgba(255, 255, 255, 0.85);
  --weui-GLYPH-WHITE-1: rgba(255, 255, 255, 0.55);
  --weui-GLYPH-WHITE-2: rgba(255, 255, 255, 0.35);
  --weui-GLYPH-WHITE-3: #fff;
  --weui-GREEN-100: #4f8400;
  --weui-GREEN-120: #a7db33;
  --weui-GREEN-170: #def1b3;
  --weui-GREEN-80: #74a800;
  --weui-GREEN-90: #82bd00;
  --weui-GREEN-BG-100: #96be40;
  --weui-GREEN-BG-110: #a0c452;
  --weui-GREEN-BG-130: #b5d179;
  --weui-GREEN-BG-90: #86aa39;
  --weui-INDIGO-100: #0075e2;
  --weui-INDIGO-120: #439df1;
  --weui-INDIGO-170: #b8daf9;
  --weui-INDIGO-80: #106abe;
  --weui-INDIGO-90: #1277d6;
  --weui-INDIGO-BG-100: #2b77bf;
  --weui-INDIGO-BG-110: #3f84c5;
  --weui-INDIGO-BG-130: #6ba0d2;
  --weui-INDIGO-BG-90: #266aab;
  --weui-LIGHTGREEN-100: #2e8800;
  --weui-LIGHTGREEN-120: #aaef87;
  --weui-LIGHTGREEN-170: #def9d1;
  --weui-LIGHTGREEN-80: #77bc54;
  --weui-LIGHTGREEN-90: #85d35e;
  --weui-LIGHTGREEN-BG-100: #72cf60;
  --weui-LIGHTGREEN-BG-110: #80d370;
  --weui-LIGHTGREEN-BG-130: #9cdd90;
  --weui-LIGHTGREEN-BG-90: #66b956;
  --weui-LINK-100: #576b95;
  --weui-LINK-120: #7888aa;
  --weui-LINK-170: #ccd2de;
  --weui-LINK-80: #455577;
  --weui-LINK-90: #4e6085;
  --weui-LINKFINDER-100: #002666;
  --weui-MATERIAL-ATTACHMENTCOLUMN: rgba(245, 245, 245, 0.95);
  --weui-MATERIAL-NAVIGATIONBAR: rgba(237, 237, 237, 0.94);
  --weui-MATERIAL-REGULAR: rgba(247, 247, 247, 0.3);
  --weui-MATERIAL-THICK: rgba(247, 247, 247, 0.8);
  --weui-MATERIAL-THIN: rgba(255, 255, 255, 0.2);
  --weui-MATERIAL-TOOLBAR: rgba(246, 246, 246, 0.82);
  --weui-ORANGE-100: #e17719;
  --weui-ORANGE-120: #fbb062;
  --weui-ORANGE-170: #fde1c3;
  --weui-ORANGE-80: #c87d2f;
  --weui-ORANGE-90: #e08c34;
  --weui-ORANGE-BG-100: #ea7800;
  --weui-ORANGE-BG-110: #ec8519;
  --weui-ORANGE-BG-130: #f0a04d;
  --weui-ORANGE-BG-90: #d26b00;
  --weui-ORANGERED-100: #d14730;
  --weui-OVERLAY: rgba(0, 0, 0, 0.5);
  --weui-OVERLAY-WHITE: rgba(242, 242, 242, 0.8);
  --weui-PURPLE-100: #6265f1;
  --weui-PURPLE-120: #8385f3;
  --weui-PURPLE-170: #d0d1fa;
  --weui-PURPLE-80: #5052c0;
  --weui-PURPLE-90: #595cd7;
  --weui-PURPLE-BG-100: #6769ba;
  --weui-PURPLE-BG-110: #7678c1;
  --weui-PURPLE-BG-130: #9496ce;
  --weui-PURPLE-BG-90: #5c5ea7;
  --weui-RED-100: #dc3636;
  --weui-RED-120: #fb7373;
  --weui-RED-170: #fdcaca;
  --weui-RED-80: #c84040;
  --weui-RED-90: #e14949;
  --weui-RED-BG-100: #cf5148;
  --weui-RED-BG-110: #d3625a;
  --weui-RED-BG-130: #dd847e;
  --weui-RED-BG-90: #b94840;
  --weui-SECONDARY-BG: rgba(0, 0, 0, 0.1);
  --weui-SEPARATOR-0: rgba(0, 0, 0, 0.1);
  --weui-SEPARATOR-1: rgba(0, 0, 0, 0.15);
  --weui-STATELAYER-HOVERED: rgba(0, 0, 0, 0.02);
  --weui-STATELAYER-PRESSED: rgba(0, 0, 0, 0.1);
  --weui-STATELAYER-PRESSEDSTRENGTHENED: rgba(0, 0, 0, 0.2);
  --weui-YELLOW-100: #bb8e00;
  --weui-YELLOW-120: #ffcf33;
  --weui-YELLOW-170: #ffecb2;
  --weui-YELLOW-80: #cc9c00;
  --weui-YELLOW-90: #e6af00;
  --weui-YELLOW-BG-100: #efb600;
  --weui-YELLOW-BG-110: #f0bd19;
  --weui-YELLOW-BG-130: #f3cc4d;
  --weui-YELLOW-BG-90: #d7a400;
  --weui-FG-HALF: #000;
  --weui-RED: #dc3636;
  --weui-ORANGERED: #d14730;
  --weui-ORANGE: #e17719;
  --weui-YELLOW: #bb8e00;
  --weui-GREEN: #4f8400;
  --weui-LIGHTGREEN: #2e8800;
  --weui-TEXTGREEN: #06ae56;
  --weui-BRAND: #018942;
  --weui-BLUE: #007dbb;
  --weui-INDIGO: #0075e2;
  --weui-PURPLE: #6265f1;
  --weui-LINK: #576b95;
  --weui-TAG-TEXT-ORANGE: #e17719;
  --weui-TAG-TEXT-GREEN: #06ae56;
  --weui-TAG-TEXT-BLUE: #007dbb;
  --weui-REDORANGE: #d14730;
  --weui-TAG-TEXT-BLACK: rgba(0, 0, 0, 0.5);
  --weui-WHITE: #fff;
  --weui-BG: #fff;
  --weui-FG: #000;
  --weui-FG-5: rgba(0, 0, 0, 0.05);
  --weui-TAG-BACKGROUND-ORANGE: rgba(225, 119, 25, 0.1);
  --weui-TAG-BACKGROUND-GREEN: rgba(6, 174, 86, 0.1);
  --weui-TAG-TEXT-RED: rgba(250, 81, 81, 0.6);
  --weui-TAG-BACKGROUND-RED: rgba(250, 81, 81, 0.1);
  --weui-TAG-BACKGROUND-BLUE: rgba(0, 125, 187, 0.1);
  --weui-TAG-BACKGROUND-BLACK: rgba(0, 0, 0, 0.05);
}

@media (prefers-color-scheme: dark) {
  .wx-root[data-weui-mode='care']:not([data-weui-theme='light']),body[data-weui-mode='care']:not([data-weui-theme='light']) {
      --weui-BG-0: #111;
      --weui-BG-1: #1e1e1e;
      --weui-BG-2: #191919;
      --weui-BG-3: #202020;
      --weui-BG-4: #404040;
      --weui-BG-5: #2c2c2c;
      --weui-BLUE-100: #10aeff;
      --weui-BLUE-120: #0c8bcc;
      --weui-BLUE-170: #04344d;
      --weui-BLUE-80: #3fbeff;
      --weui-BLUE-90: #28b6ff;
      --weui-BLUE-BG-100: #48a6e2;
      --weui-BLUE-BG-110: #4095cb;
      --weui-BLUE-BG-130: #32749e;
      --weui-BLUE-BG-90: #5aafe4;
      --weui-BRAND-100: #07c160;
      --weui-BRAND-120: #059a4c;
      --weui-BRAND-170: #023a1c;
      --weui-BRAND-80: #38cd7f;
      --weui-BRAND-90: #20c770;
      --weui-BRAND-BG-100: #2aae67;
      --weui-BRAND-BG-110: #259c5c;
      --weui-BRAND-BG-130: #1d7a48;
      --weui-BRAND-BG-90: #3eb575;
      --weui-FG-0: rgba(255, 255, 255, 0.85);
      --weui-FG-0_5: rgba(255, 255, 255, 0.65);
      --weui-FG-1: rgba(255, 255, 255, 0.55);
      --weui-FG-2: rgba(255, 255, 255, 0.35);
      --weui-FG-3: rgba(255, 255, 255, 0.1);
      --weui-FG-4: rgba(255, 255, 255, 0.15);
      --weui-GLYPH-0: rgba(255, 255, 255, 0.85);
      --weui-GLYPH-1: rgba(255, 255, 255, 0.55);
      --weui-GLYPH-2: rgba(255, 255, 255, 0.35);
      --weui-GLYPH-WHITE-0: rgba(255, 255, 255, 0.85);
      --weui-GLYPH-WHITE-1: rgba(255, 255, 255, 0.55);
      --weui-GLYPH-WHITE-2: rgba(255, 255, 255, 0.35);
      --weui-GLYPH-WHITE-3: #fff;
      --weui-GREEN-100: #74a800;
      --weui-GREEN-120: #5c8600;
      --weui-GREEN-170: #233200;
      --weui-GREEN-80: #8fb933;
      --weui-GREEN-90: #82b01a;
      --weui-GREEN-BG-100: #789833;
      --weui-GREEN-BG-110: #6b882d;
      --weui-GREEN-BG-130: #65802b;
      --weui-GREEN-BG-90: #85a247;
      --weui-INDIGO-100: #1196ff;
      --weui-INDIGO-120: #0d78cc;
      --weui-INDIGO-170: #052d4d;
      --weui-INDIGO-80: #40abff;
      --weui-INDIGO-90: #28a0ff;
      --weui-INDIGO-BG-100: #0d78cc;
      --weui-INDIGO-BG-110: #0b6bb7;
      --weui-INDIGO-BG-130: #09548f;
      --weui-INDIGO-BG-90: #2585d1;
      --weui-LIGHTGREEN-100: #3eb575;
      --weui-LIGHTGREEN-120: #31905d;
      --weui-LIGHTGREEN-170: #123522;
      --weui-LIGHTGREEN-80: #64c390;
      --weui-LIGHTGREEN-90: #51bc83;
      --weui-LIGHTGREEN-BG-100: #31905d;
      --weui-LIGHTGREEN-BG-110: #2c8153;
      --weui-LIGHTGREEN-BG-130: #226541;
      --weui-LIGHTGREEN-BG-90: #31905d;
      --weui-LINK-100: #7d90a9;
      --weui-LINK-120: #647387;
      --weui-LINK-170: #252a32;
      --weui-LINK-80: #97a6ba;
      --weui-LINK-90: #899ab1;
      --weui-LINKFINDER-100: #dee9ff;
      --weui-MATERIAL-ATTACHMENTCOLUMN: rgba(32, 32, 32, 0.93);
      --weui-MATERIAL-NAVIGATIONBAR: rgba(18, 18, 18, 0.9);
      --weui-MATERIAL-REGULAR: rgba(37, 37, 37, 0.6);
      --weui-MATERIAL-THICK: rgba(34, 34, 34, 0.9);
      --weui-MATERIAL-THIN: rgba(245, 245, 245, 0.4);
      --weui-MATERIAL-TOOLBAR: rgba(35, 35, 35, 0.93);
      --weui-ORANGE-100: #c87d2f;
      --weui-ORANGE-120: #a06425;
      --weui-ORANGE-170: #3b250e;
      --weui-ORANGE-80: #d39758;
      --weui-ORANGE-90: #cd8943;
      --weui-ORANGE-BG-100: #bb6000;
      --weui-ORANGE-BG-110: #a85600;
      --weui-ORANGE-BG-130: #824300;
      --weui-ORANGE-BG-90: #c1701a;
      --weui-ORANGERED-100: #ff6146;
      --weui-OVERLAY: rgba(0, 0, 0, 0.8);
      --weui-OVERLAY-WHITE: rgba(242, 242, 242, 0.8);
      --weui-PURPLE-100: #8183ff;
      --weui-PURPLE-120: #6768cc;
      --weui-PURPLE-170: #26274c;
      --weui-PURPLE-80: #9a9bff;
      --weui-PURPLE-90: #8d8fff;
      --weui-PURPLE-BG-100: #6768cc;
      --weui-PURPLE-BG-110: #5c5db7;
      --weui-PURPLE-BG-130: #48498f;
      --weui-PURPLE-BG-90: #7677d1;
      --weui-RED-100: #fa5151;
      --weui-RED-120: #c84040;
      --weui-RED-170: #4b1818;
      --weui-RED-80: #fb7373;
      --weui-RED-90: #fa6262;
      --weui-RED-BG-100: #cf5148;
      --weui-RED-BG-110: #ba4940;
      --weui-RED-BG-130: #913832;
      --weui-RED-BG-90: #d3625a;
      --weui-SECONDARY-BG: rgba(255, 255, 255, 0.15);
      --weui-SEPARATOR-0: rgba(255, 255, 255, 0.05);
      --weui-SEPARATOR-1: rgba(255, 255, 255, 0.15);
      --weui-STATELAYER-HOVERED: rgba(0, 0, 0, 0.02);
      --weui-STATELAYER-PRESSED: rgba(255, 255, 255, 0.1);
      --weui-STATELAYER-PRESSEDSTRENGTHENED: rgba(255, 255, 255, 0.2);
      --weui-YELLOW-100: #cc9c00;
      --weui-YELLOW-120: #a37c00;
      --weui-YELLOW-170: #3d2f00;
      --weui-YELLOW-80: #d6af33;
      --weui-YELLOW-90: #d1a519;
      --weui-YELLOW-BG-100: #bf9100;
      --weui-YELLOW-BG-110: #ab8200;
      --weui-YELLOW-BG-130: #866500;
      --weui-YELLOW-BG-90: #c59c1a;
      --weui-FG-HALF: rgba(255, 255, 255, 0.65);
      --weui-RED: #fa5151;
      --weui-ORANGERED: #ff6146;
      --weui-ORANGE: #c87d2f;
      --weui-YELLOW: #cc9c00;
      --weui-GREEN: #74a800;
      --weui-LIGHTGREEN: #3eb575;
      --weui-TEXTGREEN: #259c5c;
      --weui-BRAND: #07c160;
      --weui-BLUE: #10aeff;
      --weui-INDIGO: #1196ff;
      --weui-PURPLE: #8183ff;
      --weui-LINK: #7d90a9;
      --weui-REDORANGE: #ff6146;
      --weui-TAG-BACKGROUND-BLACK: rgba(255, 255, 255, 0.05);
      --weui-FG: #fff;
      --weui-WHITE: rgba(255, 255, 255, 0.8);
      --weui-FG-5: rgba(255, 255, 255, 0.1);
      --weui-TAG-BACKGROUND-ORANGE: rgba(250, 157, 59, 0.1);
      --weui-TAG-BACKGROUND-GREEN: rgba(6, 174, 86, 0.1);
      --weui-TAG-TEXT-RED: rgba(250, 81, 81, 0.6);
      --weui-TAG-BACKGROUND-RED: rgba(250, 81, 81, 0.1);
      --weui-TAG-BACKGROUND-BLUE: rgba(16, 174, 255, 0.1);
      --weui-TAG-TEXT-ORANGE: rgba(250, 157, 59, 0.6);
      --weui-BG: #000;
      --weui-TAG-TEXT-GREEN: rgba(6, 174, 86, 0.6);
      --weui-TAG-TEXT-BLUE: rgba(16, 174, 255, 0.6);
      --weui-TAG-TEXT-BLACK: rgba(255, 255, 255, 0.5);
  }
}

.wx-root[data-weui-mode='care'][data-weui-theme='dark'],body[data-weui-mode='care'][data-weui-theme='dark'] {
  --weui-BG-0: #111;
  --weui-BG-1: #1e1e1e;
  --weui-BG-2: #191919;
  --weui-BG-3: #202020;
  --weui-BG-4: #404040;
  --weui-BG-5: #2c2c2c;
  --weui-BLUE-100: #10aeff;
  --weui-BLUE-120: #0c8bcc;
  --weui-BLUE-170: #04344d;
  --weui-BLUE-80: #3fbeff;
  --weui-BLUE-90: #28b6ff;
  --weui-BLUE-BG-100: #48a6e2;
  --weui-BLUE-BG-110: #4095cb;
  --weui-BLUE-BG-130: #32749e;
  --weui-BLUE-BG-90: #5aafe4;
  --weui-BRAND-100: #07c160;
  --weui-BRAND-120: #059a4c;
  --weui-BRAND-170: #023a1c;
  --weui-BRAND-80: #38cd7f;
  --weui-BRAND-90: #20c770;
  --weui-BRAND-BG-100: #2aae67;
  --weui-BRAND-BG-110: #259c5c;
  --weui-BRAND-BG-130: #1d7a48;
  --weui-BRAND-BG-90: #3eb575;
  --weui-FG-0: rgba(255, 255, 255, 0.85);
  --weui-FG-0_5: rgba(255, 255, 255, 0.65);
  --weui-FG-1: rgba(255, 255, 255, 0.55);
  --weui-FG-2: rgba(255, 255, 255, 0.35);
  --weui-FG-3: rgba(255, 255, 255, 0.1);
  --weui-FG-4: rgba(255, 255, 255, 0.15);
  --weui-GLYPH-0: rgba(255, 255, 255, 0.85);
  --weui-GLYPH-1: rgba(255, 255, 255, 0.55);
  --weui-GLYPH-2: rgba(255, 255, 255, 0.35);
  --weui-GLYPH-WHITE-0: rgba(255, 255, 255, 0.85);
  --weui-GLYPH-WHITE-1: rgba(255, 255, 255, 0.55);
  --weui-GLYPH-WHITE-2: rgba(255, 255, 255, 0.35);
  --weui-GLYPH-WHITE-3: #fff;
  --weui-GREEN-100: #74a800;
  --weui-GREEN-120: #5c8600;
  --weui-GREEN-170: #233200;
  --weui-GREEN-80: #8fb933;
  --weui-GREEN-90: #82b01a;
  --weui-GREEN-BG-100: #789833;
  --weui-GREEN-BG-110: #6b882d;
  --weui-GREEN-BG-130: #65802b;
  --weui-GREEN-BG-90: #85a247;
  --weui-INDIGO-100: #1196ff;
  --weui-INDIGO-120: #0d78cc;
  --weui-INDIGO-170: #052d4d;
  --weui-INDIGO-80: #40abff;
  --weui-INDIGO-90: #28a0ff;
  --weui-INDIGO-BG-100: #0d78cc;
  --weui-INDIGO-BG-110: #0b6bb7;
  --weui-INDIGO-BG-130: #09548f;
  --weui-INDIGO-BG-90: #2585d1;
  --weui-LIGHTGREEN-100: #3eb575;
  --weui-LIGHTGREEN-120: #31905d;
  --weui-LIGHTGREEN-170: #123522;
  --weui-LIGHTGREEN-80: #64c390;
  --weui-LIGHTGREEN-90: #51bc83;
  --weui-LIGHTGREEN-BG-100: #31905d;
  --weui-LIGHTGREEN-BG-110: #2c8153;
  --weui-LIGHTGREEN-BG-130: #226541;
  --weui-LIGHTGREEN-BG-90: #31905d;
  --weui-LINK-100: #7d90a9;
  --weui-LINK-120: #647387;
  --weui-LINK-170: #252a32;
  --weui-LINK-80: #97a6ba;
  --weui-LINK-90: #899ab1;
  --weui-LINKFINDER-100: #dee9ff;
  --weui-MATERIAL-ATTACHMENTCOLUMN: rgba(32, 32, 32, 0.93);
  --weui-MATERIAL-NAVIGATIONBAR: rgba(18, 18, 18, 0.9);
  --weui-MATERIAL-REGULAR: rgba(37, 37, 37, 0.6);
  --weui-MATERIAL-THICK: rgba(34, 34, 34, 0.9);
  --weui-MATERIAL-THIN: rgba(245, 245, 245, 0.4);
  --weui-MATERIAL-TOOLBAR: rgba(35, 35, 35, 0.93);
  --weui-ORANGE-100: #c87d2f;
  --weui-ORANGE-120: #a06425;
  --weui-ORANGE-170: #3b250e;
  --weui-ORANGE-80: #d39758;
  --weui-ORANGE-90: #cd8943;
  --weui-ORANGE-BG-100: #bb6000;
  --weui-ORANGE-BG-110: #a85600;
  --weui-ORANGE-BG-130: #824300;
  --weui-ORANGE-BG-90: #c1701a;
  --weui-ORANGERED-100: #ff6146;
  --weui-OVERLAY: rgba(0, 0, 0, 0.8);
  --weui-OVERLAY-WHITE: rgba(242, 242, 242, 0.8);
  --weui-PURPLE-100: #8183ff;
  --weui-PURPLE-120: #6768cc;
  --weui-PURPLE-170: #26274c;
  --weui-PURPLE-80: #9a9bff;
  --weui-PURPLE-90: #8d8fff;
  --weui-PURPLE-BG-100: #6768cc;
  --weui-PURPLE-BG-110: #5c5db7;
  --weui-PURPLE-BG-130: #48498f;
  --weui-PURPLE-BG-90: #7677d1;
  --weui-RED-100: #fa5151;
  --weui-RED-120: #c84040;
  --weui-RED-170: #4b1818;
  --weui-RED-80: #fb7373;
  --weui-RED-90: #fa6262;
  --weui-RED-BG-100: #cf5148;
  --weui-RED-BG-110: #ba4940;
  --weui-RED-BG-130: #913832;
  --weui-RED-BG-90: #d3625a;
  --weui-SECONDARY-BG: rgba(255, 255, 255, 0.15);
  --weui-SEPARATOR-0: rgba(255, 255, 255, 0.05);
  --weui-SEPARATOR-1: rgba(255, 255, 255, 0.15);
  --weui-STATELAYER-HOVERED: rgba(0, 0, 0, 0.02);
  --weui-STATELAYER-PRESSED: rgba(255, 255, 255, 0.1);
  --weui-STATELAYER-PRESSEDSTRENGTHENED: rgba(255, 255, 255, 0.2);
  --weui-YELLOW-100: #cc9c00;
  --weui-YELLOW-120: #a37c00;
  --weui-YELLOW-170: #3d2f00;
  --weui-YELLOW-80: #d6af33;
  --weui-YELLOW-90: #d1a519;
  --weui-YELLOW-BG-100: #bf9100;
  --weui-YELLOW-BG-110: #ab8200;
  --weui-YELLOW-BG-130: #866500;
  --weui-YELLOW-BG-90: #c59c1a;
  --weui-FG-HALF: rgba(255, 255, 255, 0.65);
  --weui-RED: #fa5151;
  --weui-ORANGERED: #ff6146;
  --weui-ORANGE: #c87d2f;
  --weui-YELLOW: #cc9c00;
  --weui-GREEN: #74a800;
  --weui-LIGHTGREEN: #3eb575;
  --weui-TEXTGREEN: #259c5c;
  --weui-BRAND: #07c160;
  --weui-BLUE: #10aeff;
  --weui-INDIGO: #1196ff;
  --weui-PURPLE: #8183ff;
  --weui-LINK: #7d90a9;
  --weui-REDORANGE: #ff6146;
  --weui-TAG-BACKGROUND-BLACK: rgba(255, 255, 255, 0.05);
  --weui-FG: #fff;
  --weui-WHITE: rgba(255, 255, 255, 0.8);
  --weui-FG-5: rgba(255, 255, 255, 0.1);
  --weui-TAG-BACKGROUND-ORANGE: rgba(250, 157, 59, 0.1);
  --weui-TAG-BACKGROUND-GREEN: rgba(6, 174, 86, 0.1);
  --weui-TAG-TEXT-RED: rgba(250, 81, 81, 0.6);
  --weui-TAG-BACKGROUND-RED: rgba(250, 81, 81, 0.1);
  --weui-TAG-BACKGROUND-BLUE: rgba(16, 174, 255, 0.1);
  --weui-TAG-TEXT-ORANGE: rgba(250, 157, 59, 0.6);
  --weui-BG: #000;
  --weui-TAG-TEXT-GREEN: rgba(6, 174, 86, 0.6);
  --weui-TAG-TEXT-BLUE: rgba(16, 174, 255, 0.6);
  --weui-TAG-TEXT-BLACK: rgba(255, 255, 255, 0.5);
}

.wx-root,body {
  --weui-BG-COLOR-ACTIVE: #ececec;
}

.wx-root[data-weui-theme='dark'],body[data-weui-theme='dark'] {
  --weui-BG-COLOR-ACTIVE: #373737;
}

@media (prefers-color-scheme: dark) {
  .wx-root:not([data-weui-theme='light']),body:not([data-weui-theme='light']) {
      --weui-BG-COLOR-ACTIVE: #373737;
  }
}

`
const existingStyle = document.getElementById('weui-theme')

if(!existingStyle) {
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  style.type = 'text/css'
  style.setAttribute('id', 'weui-theme')
  head.appendChild(style)
  
  style.appendChild(document.createTextNode(varsStyle))
}



export const weui = css`${weuiStyle}`
