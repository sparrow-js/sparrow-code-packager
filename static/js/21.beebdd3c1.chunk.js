(this.csbJsonP=this.csbJsonP||[]).push([[21],{"../../standalone-packages/codesandbox-browserfs/dist/shims/buffer.js":function(e,t){e.exports=BrowserFS.BFSRequire("buffer")},"../common/lib/utils/jest-lite.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.messages=void 0,function(e){e.INITIALIZE="initialize_tests",e.ADD_FILE="add_file",e.REMOVE_FILE="remove_file",e.FILE_ERROR="file_error",e.TOTAL_TEST_START="total_test_start",e.TOTAL_TEST_END="total_test_end",e.TEST_START="test_start",e.TEST_END="test_end",e.DESCRIBE_START="describe_start",e.DESCRIBE_END="describe_end",e.ADD_TEST="add_test"}(t.messages||(t.messages={}))},"./src/sandbox/eval/tests/jest-lite.ts":function(e,t,r){"use strict";r.r(t);var n=r("../../node_modules/@babel/runtime/regenerator/index.js"),s=r.n(n),a=r("../../node_modules/@babel/runtime/helpers/slicedToArray.js"),o=r.n(a),c=r("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),i=r.n(c),u=r("../../node_modules/@babel/runtime/helpers/classCallCheck.js"),l=r.n(u),d=r("../../node_modules/@babel/runtime/helpers/createClass.js"),p=r.n(d),h=r("../../node_modules/@babel/runtime/helpers/defineProperty.js"),f=r.n(h),m=r("../codesandbox-api/dist/codesandbox.es5.js"),b=r("../common/lib/templates/index.js"),v=r("../common/lib/utils/jest-lite.js"),g=r("./node_modules/expect/build/index.js"),j=r.n(g),T=r("../../node_modules/jest-mock/build-es5/index.js"),x=r.n(T),_=r("../../node_modules/jest-circus/build/index.js"),k=r.n(_),O=r("../../node_modules/jest-circus/build/utils.js"),y=(r("../../node_modules/path-browserify/index.js"),r("../../node_modules/jest-each/build/index.js")),E=r("./node_modules/jest-snapshot/build/index.js"),w=r("../../node_modules/jest-circus/build/state.js"),S=r("../sandbox-hooks/react-error-overlay/utils/parser.js"),M=r("../sandbox-hooks/react-error-overlay/utils/mapper.js");function D(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,a=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){o=!0,s=e},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw s}}}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var R=[],C=function(){var e=i()(s.a.mark((function e(){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(w.getState)(),r=t.rootDescribeBlock,R.length=0,Object(w.dispatch)({name:"run_start"}),e.next=5,N(r);case 5:return Object(w.dispatch)({name:"run_finish"}),e.abrupt("return",Object(O.makeTestResults)(Object(w.getState)().rootDescribeBlock));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){var t=j.a.getState().testPath,r=e.name.split(":#:"),n=o()(r,2),s=n[0],a=n[1],c=[].concat(R).slice(1),i={currentTestName:(c.length>0?c.join(" ")+" ":"")+a};null!=s&&t===s||(i.snapshotState=new E.SnapshotState(s,{expand:!0,updateSnapshot:"none"}),i.testPath=s),j.a.setState(i)},N=function(){var e=i()(s.a.mark((function e(t){var r,n,a,o,c,i,u,l,d,p,h,f,m,b,v;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.push(t.name),Object(w.dispatch)({describeBlock:t,name:"run_describe_start"}),r=Object(O.getAllHooksForDescribe)(t),n=r.beforeAll,a=r.afterAll,o=D(n);try{for(o.s();!(c=o.n()).done;)i=c.value,P(i)}catch(s){o.e(s)}finally{o.f()}u=D(t.tests),e.prev=6,u.s();case 8:if((l=u.n()).done){e.next=14;break}return d=l.value,e.next=12,L(d);case 12:e.next=8;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),u.e(e.t0);case 19:return e.prev=19,u.f(),e.finish(19);case 22:p=D(t.children),e.prev=23,p.s();case 25:if((h=p.n()).done){e.next=31;break}return f=h.value,e.next=29,N(f);case 29:e.next=25;break;case 31:e.next=36;break;case 33:e.prev=33,e.t1=e.catch(23),p.e(e.t1);case 36:return e.prev=36,p.f(),e.finish(36);case 39:m=D(a);try{for(m.s();!(b=m.n()).done;)v=b.value,P(v)}catch(s){m.e(s)}finally{m.f()}Object(w.dispatch)({describeBlock:t,name:"run_describe_finish"}),R.pop();case 43:case"end":return e.stop()}}),e,null,[[6,16,19,22],[23,33,36,39]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=i()(s.a.mark((function e(t){var r,n,a,o,c,i,u,l,d,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object.create(null),!("skip"===t.mode||Object(w.getState)().hasFocusedTests&&"only"!==t.mode)){e.next=5;break}return Object(w.dispatch)({name:"test_skip",test:t}),e.abrupt("return");case 5:n=Object(O.getEachHooksForTest)(t),a=n.afterEach,o=n.beforeEach,c=D(o),e.prev=7,c.s();case 9:if((i=c.n()).done){e.next=15;break}return u=i.value,e.next=13,P(u,r);case 13:e.next=9;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),c.e(e.t0);case 20:return e.prev=20,c.f(),e.finish(20);case 23:return e.next=25,B(t,r);case 25:l=D(a),e.prev=26,l.s();case 28:if((d=l.n()).done){e.next=34;break}return p=d.value,e.next=32,P(p,r);case 32:e.next=28;break;case 34:e.next=39;break;case 36:e.prev=36,e.t1=e.catch(26),l.e(e.t1);case 39:return e.prev=39,l.f(),e.finish(39);case 42:case"end":return e.stop()}}),e,null,[[7,17,20,23],[26,36,39,42]])})));return function(t){return e.apply(this,arguments)}}(),P=function(e,t){Object(w.dispatch)({hook:e,name:"hook_start"});var r=Object(w.getState)().testTimeout;return Object(O.callAsyncFn)(e.fn,t,{isHook:!0,timeout:r}).then((function(){return Object(w.dispatch)({hook:e,name:"hook_success"})})).catch((function(t){return Object(w.dispatch)({error:t,hook:e,name:"hook_failure"})}))},B=function(){var e=i()(s.a.mark((function e(t,r){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(w.dispatch)({name:"test_start",test:t}),n=Object(w.getState)(),a=n.testTimeout,t.fn){e.next=4;break}throw Error("Tests with no 'fn' should have 'mode' set to 'skipped'");case 4:return I(t),e.abrupt("return",Object(O.callAsyncFn)(t.fn,r,{isHook:!1,timeout:a}).then((function(){return Object(w.dispatch)({name:"test_success",test:t})})).catch((function(e){return Object(w.dispatch)({error:e,name:"test_failure",test:t})})));case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),F=C;function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){f()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"default",(function(){return z})),r.d(t,"messages",(function(){return v.messages})),j.a.extend({toMatchSnapshot:E.toMatchSnapshot,toThrowErrorMatchingSnapshot:E.toThrowErrorMatchingSnapshot}),j.a.addSnapshotSerializer=E.addSerializer;var H=null,J=function(){var e,t="/static/js/jsdom-16.3.0.min.js";return navigator.userAgent.indexOf("jsdom"),H=H||(e=t,new Promise((function(t,r){var n=document.createElement("script");n.setAttribute("src",e),document.body.appendChild(n),n.onload=function(){t()},n.onerror=function(e){r(e)}})))};function W(){var e=Object(O.makeDescribe)(w.ROOT_DESCRIBE_BLOCK_NAME),t={currentDescribeBlock:e,expand:void 0,hasFocusedTests:!1,rootDescribeBlock:e,testTimeout:5e3};j.a.setState({assertionCalls:0,expectedAssertionsNumber:null,isExpectingAssertions:!1,suppressedErrors:[],testPath:null,currentTestName:null,snapshotState:null}),Object(w.setState)(t)}var z=function(){function e(t){var r=this;l()(this,e),f()(this,"tests",void 0),f()(this,"ranTests",void 0),f()(this,"manager",void 0),f()(this,"watching",!0),f()(this,"LOCALHOST_URL","http://localhost"),f()(this,"dom",void 0),f()(this,"oldEnvVars",void 0),f()(this,"handleMessage",function(){var e=i()(s.a.mark((function e(t){var n,a,c,i,u,l,d,p,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.name,e.next="test_start"===e.t0?3:"test_failure"===e.t0||"test_success"===e.t0?7:"start_describe_definition"===e.t0?23:"finish_describe_definition"===e.t0?24:"add_test"===e.t0?25:27;break;case 3:return e.next=5,r.testToCodeSandbox(t.test);case 5:return n=e.sent,e.abrupt("return",r.sendMessage(v.messages.TEST_START,{test:n}));case 7:return a=j.a.getState(),(c=a.suppressedErrors)&&c.length&&(t.test.errors=c,t.test.status="fail",j.a.setState({suppressedErrors:[]})),e.next=11,r.testToCodeSandbox(t.test);case 11:return(i=e.sent).errors&&i.errors.forEach((function(e){if(e.mappedErrors&&e.mappedErrors.length){var t=e.mappedErrors,r=o()(t,1)[0];Object(m.dispatch)(m.actions.error.show(e.name||"Jest Error",e.message,{line:r._originalLineNumber,column:r._originalColumnNumber,path:i.path,payload:{},source:"jest"}))}})),e.prev=13,e.abrupt("return",r.sendMessage(v.messages.TEST_END,{test:i}));case 17:return e.prev=17,e.t1=e.catch(13),e.next=21,r.errorToCodeSandbox(e.t1);case 21:return u=e.sent,e.abrupt("return",r.sendMessage(v.messages.FILE_ERROR,{path:i.path,error:u}));case 23:return e.abrupt("return",r.sendMessage(v.messages.DESCRIBE_START,{blockName:t.blockName}));case 24:return e.abrupt("return",r.sendMessage(v.messages.DESCRIBE_END));case 25:return l=t.testName.split(":#:"),d=o()(l,2),p=d[0],h=d[1],e.abrupt("return",r.sendMessage(v.messages.ADD_TEST,{testName:h,path:p}));case 27:return e.abrupt("return",null);case 28:case"end":return e.stop()}}),e,null,[[13,17]])})));return function(t){return e.apply(this,arguments)}}()),f()(this,"handleCodeSandboxMessage",(function(e){switch(e.type){case"set-test-watching":r.watching=e.watching,!0===e.watching&&(r.ranTests.clear(),r.runTests(!0));break;case"run-all-tests":r.ranTests.clear(),r.runTests(!0);break;case"run-tests":var t=e.path;r.ranTests.delete(t),r.runTests()}})),f()(this,"reportError",(function(){})),this.manager=t,this.ranTests=new Set,Object(w.addEventHandler)(this.handleMessage),Object(m.listen)(this.handleCodeSandboxMessage),this.sendMessage(v.messages.INITIALIZE)}return p()(e,[{key:"getRuntimeGlobals",value:function(e){var t=function(t,r){return Object(w.dispatch)({fn:r,name:"add_test",testName:"".concat(e.path,":#:").concat(t)})},r=function(t,r){return Object(w.dispatch)({fn:r,mode:"skip",name:"add_test",testName:"".concat(e.path,":#:").concat(t)})},n=function(t,r){Object(w.dispatch)({fn:r,mode:"only",name:"add_test",testName:"".concat(e.path,":#:").concat(t)})};t.each=Object(y.bind)(t),r.each=Object(y.bind)(r),n.each=Object(y.bind)(n),t.only=n,t.skip=r;var s=t;return G(G({},k.a),{},{test:t,jest:x.a,it:s,expect:j.a})}},{key:"setTestGlobals",value:function(e){var t=this.dom.window.document.defaultView,r=t.document;t.Date=Date,t.fetch=fetch;var n=this.getRuntimeGlobals(e),s={document:r,window:t,global:t};return Object.keys(n).forEach((function(e){window[e]=n[e]})),s}},{key:"findTests",value:function(t){var r=this;return this.tests&&this.tests.forEach((function(e){t[e.path]||r.sendMessage(v.messages.REMOVE_FILE,{path:e.path})})),this.tests=Object.keys(t).filter(e.isTest).map((function(e){return t[e]})),this.tests}},{key:"transpileTests",value:function(){var e=i()(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all((this.tests||[]).map(function(){var e=i()(s.a.mark((function e(r){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=t.manager.getTranspiledModule(r,"")).source&&n.compilation&&t.ranTests.has(r.path))){e.next=3;break}return e.abrupt("return",null);case 3:return t.sendMessage(v.messages.ADD_FILE,{path:r.path}),e.prev=4,e.next=7,t.manager.transpileModules(r,!0);case 7:return n.source||t.ranTests.delete(r.path),e.abrupt("return",r);case 11:return e.prev=11,e.t0=e.catch(4),e.next=15,t.errorToCodeSandbox(e.t0);case 15:return a=e.sent,t.ranTests.delete(r.path),t.sendMessage(v.messages.FILE_ERROR,{path:r.path,error:a}),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendMessage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(m.dispatch)(G({type:"test",event:e},t))}},{key:"initJSDOM",value:function(){var e=i()(s.a.mark((function e(){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:t=window.JSDOM.JSDOM,"null"===(r=document.location.origin)&&(r=this.LOCALHOST_URL),this.dom=new t("<!DOCTYPE html>",{pretendToBeVisual:!0,url:r});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setup",value:function(){var e=i()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.oldEnvVars=G({},this.manager.envVariables),this.manager.envVariables.NODE_ENV="test";case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"teardown",value:function(){var e=i()(s.a.mark((function e(){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=this.dom.window.document.defaultView).close(),Object.defineProperty(t,"document",{value:null}),this.dom=null,this.manager.envVariables=this.oldEnvVars,r=this.getRuntimeGlobals(),Object.keys(r).forEach((function(e){delete window[e]}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"runTests",value:function(){var e=i()(s.a.mark((function e(){var t,r,n,a,o=this,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]&&c[0],this.watching||t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.initJSDOM();case 5:this.sendMessage(v.messages.TOTAL_TEST_START),r=[];try{if(this.manager.preset.name===b.react.name)try{r=[this.manager.resolveModule("./src/setupTests.js","/")]}catch(u){r=[this.manager.resolveModule("./src/setupTests.ts","/")]}else this.manager.preset.name===b.reactTs.name?r=[this.manager.resolveModule("./src/setupTests.ts","/")]:this.manager.configurations.package&&(n=this.manager.configurations.package.parsed)&&n.jest&&n.jest.setupFilesAfterEnv&&(r=n.jest.setupFilesAfterEnv.map((function(e){return o.manager.resolveModule(e,"/")})))}catch(u){}if(!r.length){e.next=11;break}return e.next=11,Promise.all(r.map((function(e){return o.manager.transpileModules(e,!0)})));case 11:return this.manager.modules&&this.findTests(this.manager.modules),e.next=14,this.transpileTests();case 14:return a=e.sent.filter((function(e){return e})),W(),e.next=18,this.setup();case 18:return e.next=20,Promise.all(a.map(function(){var e=i()(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(m.dispatch)(m.actions.error.clear(t.path,"jest")),e.prev=1,r.length&&r.forEach((function(e){o.manager.evaluateModule(e,{force:!0,globals:o.setTestGlobals(e)})})),o.manager.evaluateModule(t,{force:!0,globals:o.setTestGlobals(t)}),o.ranTests.add(t.path),e.next=14;break;case 7:return e.prev=7,e.t0=e.catch(1),o.ranTests.delete(t.path),e.next=12,o.errorToCodeSandbox(e.t0);case 12:n=e.sent,o.sendMessage(v.messages.FILE_ERROR,{path:t.path,error:n});case 14:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()));case 20:return e.next=22,F();case 22:return e.next=24,this.teardown();case 24:setTimeout((function(){o.sendMessage(v.messages.TOTAL_TEST_END)}));case 25:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"errorToCodeSandbox",value:function(){var e=i()(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(S.parse)(t),e.next=3,Object(M.map)(r);case 3:return n=e.sent,e.abrupt("return",{name:t.name,message:t.message,stack:t.stack,matcherResult:Boolean(t.matcherResult),mappedErrors:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getDescribeBlocks",value:function(e){for(var t=e,r=[];null!=t.parent;)r.push(t.parent.name),t=t.parent;return r.pop(),r.reverse()}},{key:"testToCodeSandbox",value:function(){var e=i()(s.a.mark((function e(t){var r,n,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name.split(":#:"),n=o()(r,2),a=n[0],c=n[1],e.next=3,Promise.all(t.errors.map(this.errorToCodeSandbox));case 3:return i=e.sent,e.abrupt("return",{name:c,path:a,duration:t.duration,status:t.status||"running",errors:i,blocks:this.getDescribeBlocks(t)});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}],[{key:"isTest",value:function(e){return!(!e.includes("__tests__")||!(e.endsWith(".js")||e.endsWith(".ts")||e.endsWith(".tsx")))||[".test.js",".test.ts",".test.tsx",".spec.js",".spec.ts",".spec.tsx"].filter((function(t){return e.endsWith(t)})).length>0}}]),e}()},4:function(e,t){},5:function(e,t){}}]);
//# sourceMappingURL=21.beebdd3c1.chunk.js.map