import{e as n,h as e,b as o,W as r,t as i,s as t}from"./vendor.97211ee9.js";import"./index.esm.6be211d5.js";import"./admin-docs.e07f425e.js";import"./container.e56529f6.js";import"./___vite-browser-external_commonjs-proxy.80177ef5.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(n,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o])})(n,e)};var a=function(){return(a=Object.assign||function(n){for(var e,o=1,r=arguments.length;o<r;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)};!function(r){function i(){var n=null!==r&&r.apply(this,arguments)||this;return n.sliderMax=n.props.max,n.handleSliderOne=function(e){var o=parseInt(n.rootNode.children[0].value);(o<=n.__$second_value||null===n.__$second_value)&&(n.__$value=o),null===n.__$second_value?n.fire("change",n.__$value):n.fire("change",[n.__$value,n.__$second_value]),n.fillColor(),n.update()},n.handleSliderTwo=function(e){var o=parseInt(n.rootNode.children[1].value);o>=n.__$value&&(n.__$second_value=o),n.fire("change",[n.__$value,n.__$second_value]),n.fillColor(),n.update()},n.fillColor=function(){var e=null!==n.__$second_value?n.__$value/n.props.max*100:0,o=null!==n.__$second_value?n.__$second_value/n.props.max*100:n.__$value/n.props.max*100,r="#07c160";n.props.disabled&&(r="#c0c4cc"),null!==n.__$second_value?n.sliderTrack.style.background="linear-gradient(to right, #ffffff "+e+"% , "+r+" "+e+"% , "+r+" "+o+"%, "+"#ffffff "+o+"%)":n.sliderTrack.style.background="linear-gradient(to right, "+r+" "+e+"% , "+r+" "+e+"% , "+r+" "+o+"%, "+"#ffffff "+o+"%)"},n}(function(n,e){function o(){this.constructor=n}s(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)})(i,r),i.prototype.install=function(){this.__$value=this.props.value,"double"===this.props.range?this.__$second_value=this.props.second_value:this.__$second_value=null},i.prototype.installed=function(){this.fillColor(),this.update()},i.prototype.render=function(o){var r=this,i=n(o,"slider-container",{"is-vertical":"vertical"===o.orient,"is-round":"round"===o.shape,"is-disabled":o.disabled});return e("div",a({},i,{ref:function(n){r.rootNode=n}}),e("input",{class:"o-slider",type:"range",min:o.min,max:o.max,value:this.__$value,onInput:this.handleSliderOne,id:"slider-1",ref:function(n){r.sliderOne=n}}),null!==this.__$second_value&&e("input",{class:"o-slider",type:"range",min:o.min,max:o.max,value:this.__$second_value,onInput:this.handleSliderTwo,id:"slider-2",ref:function(n){r.sliderTwo=n}}),e("div",{class:"slider-track",ref:function(n){r.sliderTrack=n}}))},i.css="@use 'sass:math';\n:host {\n  display: -ms-grid;\n  display: grid; }\n\n.slider-container {\n  position: relative;\n  width: 100%;\n  height: 50px; }\n\n.slider-container .slider-track {\n  width: 100%;\n  position: relative;\n  margin: 5px;\n  height: 12.5px;\n  background-color: #ffffff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  border: 2px solid #07c160;\n  transition: background-color 200ms;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  outline: none;\n  margin: auto;\n  z-index: -1; }\n\n.slider-container .o-slider {\n  width: 100%;\n  height: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background: transparent;\n  z-index: 1;\n  pointer-events: none; }\n  .slider-container .o-slider:focus {\n    outline: none; }\n  .slider-container .o-slider::-webkit-slider-runnable-track {\n    -webkit-appearance: none;\n    height: 12.5px; }\n  .slider-container .o-slider::-moz-range-track {\n    -moz-appearance: none;\n    height: 12.5px; }\n  .slider-container .o-slider::-ms-track {\n    appearance: none;\n    height: 12.5px; }\n  .slider-container .o-slider::-webkit-slider-thumb {\n    position: relative;\n    height: 31.25px;\n    width: 31.25px;\n    background-color: #07c160;\n    transition: background-color 150ms;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    top: 50%;\n    margin-top: -17.625px;\n    pointer-events: auto;\n    z-index: 2;\n    -webkit-appearance: none; }\n    .slider-container .o-slider::-webkit-slider-thumb:hover, .slider-container .o-slider::-webkit-slider-thumb:focus {\n      background-color: #059048; }\n  .slider-container .o-slider::-moz-range-thumb {\n    position: relative;\n    height: 31.25px;\n    width: 31.25px;\n    background-color: #07c160;\n    transition: background-color 150ms;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    top: 50%;\n    margin-top: -17.625px;\n    pointer-events: auto;\n    z-index: 2;\n    -webkit-appearance: none; }\n    .slider-container .o-slider::-moz-range-thumb:hover, .slider-container .o-slider::-moz-range-thumb:focus {\n      background-color: #059048; }\n  .slider-container .o-slider::-ms-thumb {\n    position: relative;\n    height: 31.25px;\n    width: 31.25px;\n    background-color: #07c160;\n    transition: background-color 150ms;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    top: 50%;\n    margin-top: -17.625px;\n    pointer-events: auto;\n    z-index: 2;\n    appearance: none; }\n    .slider-container .o-slider::-ms-thumb:hover, .slider-container .o-slider::-ms-thumb:focus {\n      background-color: #059048; }\n\n.is-round .slider-track {\n  border-radius: 8px; }\n\n.is-round .o-slider::-webkit-slider-thumb {\n  outline-offset: -10px;\n  border-radius: 50%;\n  -webkit-appearance: none; }\n  .is-round .o-slider::-webkit-slider-thumb:hover, .is-round .o-slider::-webkit-slider-thumb:focus {\n    outline-offset: -12px; }\n\n.is-round .o-slider::-moz-range-thumb {\n  outline-offset: -10px;\n  border-radius: 50%;\n  -webkit-appearance: none; }\n  .is-round .o-slider::-moz-range-thumb:hover, .is-round .o-slider::-moz-range-thumb:focus {\n    outline-offset: -12px; }\n\n.is-round .o-slider::-ms-thumb {\n  outline-offset: -10px;\n  border-radius: 50%;\n  appearance: none; }\n  .is-round .o-slider::-ms-thumb:hover, .is-round .o-slider::-ms-thumb:focus {\n    outline-offset: -12px; }\n\n.is-disabled .slider-track {\n  border-color: #c0c4cc; }\n\n.is-disabled .o-slider::-webkit-slider-thumb {\n  position: relative;\n  height: 31.25px;\n  width: 31.25px;\n  background-color: #07c160;\n  transition: background-color 150ms;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  top: 50%;\n  margin-top: -17.625px;\n  pointer-events: auto;\n  z-index: 2;\n  pointer-events: none;\n  cursor: none;\n  background-color: #c0c4cc;\n  -webkit-appearance: none; }\n  .is-disabled .o-slider::-webkit-slider-thumb:hover, .is-disabled .o-slider::-webkit-slider-thumb:focus {\n    background-color: #059048; }\n\n.is-disabled .o-slider::-moz-range-thumb {\n  position: relative;\n  height: 31.25px;\n  width: 31.25px;\n  background-color: #07c160;\n  transition: background-color 150ms;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  top: 50%;\n  margin-top: -17.625px;\n  pointer-events: auto;\n  z-index: 2;\n  pointer-events: none;\n  cursor: none;\n  background-color: #c0c4cc;\n  -webkit-appearance: none; }\n  .is-disabled .o-slider::-moz-range-thumb:hover, .is-disabled .o-slider::-moz-range-thumb:focus {\n    background-color: #059048; }\n\n.is-disabled .o-slider::-ms-thumb {\n  position: relative;\n  height: 31.25px;\n  width: 31.25px;\n  background-color: #07c160;\n  transition: background-color 150ms;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  top: 50%;\n  margin-top: -17.625px;\n  pointer-events: auto;\n  z-index: 2;\n  pointer-events: none;\n  cursor: none;\n  background-color: #c0c4cc;\n  appearance: none; }\n  .is-disabled .o-slider::-ms-thumb:hover, .is-disabled .o-slider::-ms-thumb:focus {\n    background-color: #059048; }\n\n.is-vertical {\n  transform: rotate(-90deg); }\n",i.defaultProps={min:0,max:100,step:1,value:0,second_value:100,range:"single",orient:"horizontal",shape:"square",disabled:!1},i.propTypes={min:Number,max:Number,step:Number,value:Number,second_value:Number,range:String,orient:String,shape:String,disabled:Boolean},i=function(n,e,o,r){var i,t=arguments.length,s=t<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(n,e,o,r);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(s=(t<3?i(s):t>3?i(e,o,s):i(e,o))||s);return t>3&&s&&Object.defineProperty(e,o,s),s}([o("o-slider")],i)}(r);var l=Object.defineProperty,d=Object.getOwnPropertyDescriptor;let c=class extends r{constructor(){super(...arguments),this.mdA='\n  ```html\n  <o-slider min="0" max="200" value="20"></o-slider>\n  <o-slider min="0" max="200" value="20" second_value="80" range="double"></o-slider>\n  ```\n  ',this.mdB='\n  ```html\n  <o-slider\n  orient="vertical"\n  ...\n  ></o-slider>\n\n  <o-slider\n  orient="vertical"\n  range="double"\n  ></o-slider>\n  ```\n  ',this.mdC="\n  ```\n  <code-demo\n  >\n    <div>\n      <o-slider></o-slider>\n      <o-input onchange={this.handleChange}></o-input>\n    </div>\n  </code-demo>\n  ```\n  ",this.mdD="\n  ```html\n  <o-slider\n  disabled\n  ...\n></o-slider>\n  ```\n  ",this.value=5}render(){return e("div",null,e("code-demo-container",null,e("code-demo",{title:"基础滑块",describe:"支持单或双滑块",code:this.mdA,class:i``},e("o-slider",{min:"0",max:"200",value:"20",slot:"demo",class:i`p-5`}),e("o-slider",{min:"0",max:"200",value:"20",second_value:"80",range:"double",slot:"demo",class:i`p-5`})),e("code-demo",{title:"垂直",describe:"支持使滑块垂直",code:this.mdB},e("div",{slot:"demo"},e("o-slider",{orient:"vertical",style:{height:"500px",position:"relative",top:"230px"}}),e("o-slider",{orient:"vertical",range:"double",style:{height:"500px",position:"relative",top:"230px"}}))),e("code-demo",{title:"不可用",describe:"支持使滑块处于不可用状态",code:this.mdD},e("o-slider",{disabled:!0,value:"20",slot:"demo",class:i`p-5`}))))}};c.css=t.target,c=((n,e,o,r)=>{for(var i,t=r>1?void 0:r?d(e,o):e,s=n.length-1;s>=0;s--)(i=n[s])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&l(e,o,t),t})([o("slider-component")],c);export{c as default};