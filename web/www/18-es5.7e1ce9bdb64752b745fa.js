!function(){function t(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function e(t,e,o,n,i,a,r){try{var c=t[a](r),s=c.value}catch(l){return void o(l)}c.done?e(s):Promise.resolve(s).then(n,i)}function o(t){return function(){var o=this,n=arguments;return new Promise((function(i,a){var r=t.apply(o,n);function c(t){e(r,i,a,c,s,"next",t)}function s(t){e(r,i,a,c,s,"throw",t)}c(void 0)}))}}function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{dUtr:function(e,i,a){"use strict";a.r(i),a.d(i,"ion_action_sheet",(function(){return m}));var r=a("sxy2"),c=a("N4tN"),s=(a("gHap"),a("XnfD")),l=(a("rxGk"),a("ItpF"),a("x/Nk"),a("d1dm")),d=(a("2c9M"),a("U/uv")),u=a("sPtc"),b=function(t){var e=Object(s.a)(),o=Object(s.a)(),n=Object(s.a)();return o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([o,n])},h=function(t){var e=Object(s.a)(),o=Object(s.a)(),n=Object(s.a)();return o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([o,n])},g=function(t){var e=Object(s.a)(),o=Object(s.a)(),n=Object(s.a)();return o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([o,n])},p=function(t){var e=Object(s.a)(),o=Object(s.a)(),n=Object(s.a)();return o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([o,n])},m=function(){function e(t){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Object(r.q)(this,t),this.didPresent=Object(r.i)(this,"ionActionSheetDidPresent",7),this.willPresent=Object(r.i)(this,"ionActionSheetWillPresent",7),this.willDismiss=Object(r.i)(this,"ionActionSheetWillDismiss",7),this.didDismiss=Object(r.i)(this,"ionActionSheetDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){o.dismiss(void 0,l.a)},this.dispatchCancelHandler=function(t){var e=t.detail.role;if(Object(l.j)(e)){var n=o.getButtons().find((function(t){return"cancel"===t.role}));o.callButtonHandler(n)}}}var i,a,s,m,v;return i=e,(a=[{key:"present",value:function(){return Object(l.e)(this,"actionSheetEnter",b,g)}},{key:"connectedCallback",value:function(){Object(l.f)(this.el)}},{key:"dismiss",value:function(t,e){return Object(l.g)(this,t,e,"actionSheetLeave",h,p)}},{key:"onDidDismiss",value:function(){return Object(l.h)(this.el,"ionActionSheetDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(l.h)(this.el,"ionActionSheetWillDismiss")}},{key:"buttonClick",value:(v=o(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.role,!Object(l.j)(o)){t.next=5;break}t.t0=this.dismiss(void 0,o),t.next=13;break;case 5:return t.next=7,this.callButtonHandler(e);case 7:if(!t.sent){t.next=11;break}t.t1=this.dismiss(void 0,e.role),t.next=12;break;case 11:t.t1=Promise.resolve();case 12:t.t0=t.t1;case 13:return t.abrupt("return",t.t0);case 14:case"end":return t.stop()}}),t,this)}))),function(t){return v.apply(this,arguments)})},{key:"callButtonHandler",value:(m=o(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=!e,t.t0){t.next=7;break}return t.t1=!1,t.next=5,Object(l.n)(e.handler);case 5:t.t2=t.sent,t.t0=t.t1!==t.t2;case 7:return t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t)}))),function(t){return m.apply(this,arguments)})},{key:"getButtons",value:function(){return this.buttons.map((function(t){return"string"==typeof t?{text:t}:t}))}},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"componentDidLoad",value:function(){var t=this,e=this.groupEl,o=this.wrapperEl;!this.gesture&&"md"!==Object(c.b)(this)&&o&&e&&Object(r.j)((function(){e.scrollHeight>e.clientHeight||(t.gesture=Object(d.a)(o,(function(t){return t.classList.contains("action-sheet-button")})),t.gesture.enable(!0))}))}},{key:"render",value:function(){var e=this,o=Object(c.b)(this),n=this.getButtons(),i=n.find((function(t){return"cancel"===t.role})),a=n.filter((function(t){return"cancel"!==t.role}));return Object(r.l)(r.c,{role:"dialog","aria-modal":"true",tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign(t({},o,!0),Object(u.b)(this.cssClass)),{"action-sheet-translucent":this.translucent}),onIonActionSheetWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap},Object(r.l)("ion-backdrop",{tappable:this.backdropDismiss}),Object(r.l)("div",{tabindex:"0"}),Object(r.l)("div",{class:"action-sheet-wrapper ion-overlay-wrapper",role:"dialog",ref:function(t){return e.wrapperEl=t}},Object(r.l)("div",{class:"action-sheet-container"},Object(r.l)("div",{class:"action-sheet-group",ref:function(t){return e.groupEl=t}},void 0!==this.header&&Object(r.l)("div",{class:"action-sheet-title"},this.header,this.subHeader&&Object(r.l)("div",{class:"action-sheet-sub-title"},this.subHeader)),a.map((function(t){return Object(r.l)("button",{type:"button",class:f(t),onClick:function(){return e.buttonClick(t)}},Object(r.l)("span",{class:"action-sheet-button-inner"},t.icon&&Object(r.l)("ion-icon",{icon:t.icon,lazy:!1,class:"action-sheet-icon"}),t.text),"md"===o&&Object(r.l)("ion-ripple-effect",null))}))),i&&Object(r.l)("div",{class:"action-sheet-group action-sheet-group-cancel"},Object(r.l)("button",{type:"button",class:f(i),onClick:function(){return e.buttonClick(i)}},Object(r.l)("span",{class:"action-sheet-button-inner"},i.icon&&Object(r.l)("ion-icon",{icon:i.icon,lazy:!1,class:"action-sheet-icon"}),i.text),"md"===o&&Object(r.l)("ion-ripple-effect",null))))),Object(r.l)("div",{tabindex:"0"}))}},{key:"el",get:function(){return Object(r.m)(this)}}])&&n(i.prototype,a),s&&n(i,s),e}(),f=function(e){return Object.assign(t({"action-sheet-button":!0,"ion-activatable":!0,"ion-focusable":!0},"action-sheet-"+e.role,void 0!==e.role),Object(u.b)(e.cssClass))};m.style={ios:'.sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color, #fff));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-400, #999999);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:13px;font-weight:400;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:15px;padding-bottom:0;font-size:12px}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;font-size:20px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:0.1em;font-size:28px;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:0.1em;margin-inline-end:0.1em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #eb445a)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #eb445a)}}',md:'.sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:16px;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;font-size:16px;text-align:start;contain:strict;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}'}}}])}();