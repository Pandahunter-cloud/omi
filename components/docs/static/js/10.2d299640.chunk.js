webpackJsonp([10],{111:function(n,e){n.exports='\n## Radio \u5355\u9009\u6846 \n\n\u7528\u4e8e\u5728\u591a\u4e2a\u9009\u9879\u4e2d\u9009\u62e9\u4e00\u4e2a\n\n<iframe height="315" style="width: 100%;" scrolling="no" title="OMIU Radio" src="https://codepen.io/omijs/embed/GRpjapr?height=315&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">\n  See the Pen <a href=\'https://codepen.io/omijs/pen/GRpjapr\'>OMIU Radio</a> by OMI\n  (<a href=\'https://codepen.io/omijs\'>@omijs</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n\n## \u5bfc\u5165\n\n```js\nimport \'@omiu/radio\'\n```\n\n\u6216\u8005\u76f4\u63a5 script \u6807\u7b7e\u5f15\u5165\u3002\n\n\n```html\n<script src="https://unpkg.com/@omiu/radio"><\/script>\n```\n\n## \u4f7f\u7528\n\n```html\n<o-radio name="sex" value="0">\u7537</o-radio>\n<o-radio name="sex" value="1">\u5973</o-radio>\n<script>\n  document.querySelectorAll("o-radio[name=\'sex\']").forEach(function(radio){\n    radio.addEventListener(\'change\', function(evt){\n      console.log(evt.detail)\n    })\n  })\n<\/script>\n```\n\n\n## API\n\n### \u5c5e\u6027\n\n```tsx\n{\n  label?: string;\n  disabled?: boolean;\n  checked?: boolean;\n  value: string;\n  name?: string;\n}\n```\n\n## \u4e8b\u4ef6\n\n* change\n'}});
//# sourceMappingURL=10.2d299640.chunk.js.map