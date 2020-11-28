/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(t,a,e,r,o){t.Utils={},t.Utils.toUpperCaseFirst=function(t){return"string"==typeof t&&(""===t?t:t.substring(0,1).toUpperCase()+t.substring(1))},t.Utils.toDashFormat=function(t){if("string"!=typeof t)return!1;var a=t.match(/((?:[A-Z]?[a-z0-9]+)|(?:[A-Z][a-z0-9]*))/g);if(!a)return"";for(var e=0;e<a.length;e++)a[e]=a[e].toLowerCase();return a.join("-")},t.Utils.checkEmail=function(t){if(!t)return!1;var a=t.split("@");if(a.length<2)return!1;var e=a.pop(),r=a.join("@");return!!o.isFQDN(e)&&/^(([a-zA-Z0-9!#$%&'*+\-\/=?\^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+\-\/=?\^_`{|}~]+)*)|(\".+\"))$/.test(r)},t.Utils.playSound=function(t){var e=a('audio[data-file="'+t+'"]');if(e.length>0)e.get(0).play();else{var r=a("<audio>",{autoplay:!0,style:"display: none"}).append('<source src="'+t+'.wav" type="audio/x-wav" /><source src="'+t+'.mp3" type="audio/mpeg" codecs="mp3" /><embed src="'+t+'.wav" type="audio/x-wav" hidden="true" autostart="true" loop="false" />');a("body").append(r),a.isFunction(r.get(0).play)&&r.attr("data-file",t)}},t.Utils.buildWindowParams=function(t){var a=e.defaults({},t,{toolbar:!1,scrollbars:!1,location:!1,status:!0,menubar:!1,width:640,heght:480,resizable:!0});return["toolbar="+(a.toolbar?"1":"0"),"scrollbars="+(a.scrollbars?"1":"0"),"location="+(a.location?"1":"0"),"status="+(a.status?"1":"0"),"menubar="+(a.menubar?"1":"0"),"width="+a.width,"height="+a.height,"resizable="+(a.resizable?"1":"0")].join(",")};var i=e.once(function(){r.defaultOptions.className||(r.defaultOptions.className="vex-theme-default"),r.dialog.buttons.YES.text=t.Localization.trans("OK"),r.dialog.buttons.NO.text=t.Localization.trans("Cancel")}),n=function(){return r.getAllVexes().length>0},l=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")};t.Utils.alert=function(t){i(),n()||r.dialog.alert({message:l(t)})},t.Utils.confirm=function(t,a){i(),r.dialog.confirm({message:l(t),callback:a})},t.Utils.prompt=function(t,a){i(),r.dialog.prompt({message:l(t),callback:a})}}(Mibew,jQuery,_,vex,validator);