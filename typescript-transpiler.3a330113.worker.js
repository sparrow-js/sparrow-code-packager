!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://sparrow-js.github.io/sparrow-code-packager/",r(r.s="../../node_modules/thread-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/typescript/typescript-worker.js")}({"../../node_modules/@babel/runtime/helpers/defineProperty.js":function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},"../../node_modules/thread-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/typescript/typescript-worker.js":function(e,t,r){"use strict";r.r(t);var n=r("../../node_modules/@babel/runtime/helpers/defineProperty.js"),i=r.n(n);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}self.importScripts(["https://cdnjs.cloudflare.com/ajax/libs/typescript/3.4.1/typescript.min.js"]),self.postMessage("ready"),self.addEventListener("message",(function(e){var t=e.data,r=t.code,n=t.path,i=t.config,s=t.typescriptVersion;"3.4.1"!==s&&self.importScripts("https://unpkg.com/typescript@".concat(s,"/lib/typescript.js"));var a,p=o({},{fileName:n,reportDiagnostics:!0,compilerOptions:{target:ts.ScriptTarget.ES5,module:ts.ModuleKind.CommonJS,moduleResolution:ts.ModuleResolutionKind.NodeJs,allowJs:!0,alwaysStrict:!0,downlevelIteration:!0,noImplicitUseStrict:!1,jsx:ts.JsxEmit.React,forceConsistentCasingInFileNames:!0,noImplicitReturns:!0,noImplicitThis:!0,noImplicitAny:!0,strictNullChecks:!0,suppressImplicitAnyIndexErrors:!0,noUnusedLocals:!0,inlineSourceMap:!0,inlineSources:!0,emitDecoratorMetadata:!0,experimentalDecorators:!0,lib:["es2017","dom"]}});i&&((p=o({},i)).compilerOptions=o(o({},i.compilerOptions),{},{module:ts.ModuleKind.CommonJS,moduleResolution:ts.ModuleResolutionKind.NodeJs,inlineSourceMap:!0,inlineSources:!0,emitDecoratorMetadata:!0})),p.fileName=n,p.reportDiagnostics=!0;try{var l=ts.transpileModule(r,p).outputText;(function(e,t){var r=[];return t.forEachChild(e,(function e(n){switch(n.kind){case t.SyntaxKind.ImportDeclaration:r.push({type:"direct",path:n.moduleSpecifier.text});break;case t.SyntaxKind.ExportDeclaration:n.moduleSpecifier&&r.push({type:"direct",path:n.moduleSpecifier.text});break;case t.SyntaxKind.CallExpression:"require"===n.expression.text&&n.arguments.length&&n.arguments[0].kind===t.SyntaxKind.StringLiteral&&r.push({type:"direct",path:n.arguments[0].text}),"require"===n.expression.text&&n.arguments.length&&n.arguments[0].kind===t.SyntaxKind.BinaryExpression&&n.arguments[0].left.kind===t.SyntaxKind.StringLiteral&&r.push({type:"glob",path:n.arguments[0].left.text}),n.expression.kind===t.SyntaxKind.ImportKeyword&&n.arguments.length&&n.arguments[0].text&&r.push({type:"direct",path:n.arguments[0].text}),"require"===n.expression.text&&n.arguments.length&&n.arguments[0].kind===t.SyntaxKind.TemplateExpression&&n.arguments[0].head.kind===t.SyntaxKind.TemplateHead&&r.push({type:"glob",path:n.arguments[0].head.text}),n.expression.kind===t.SyntaxKind.ImportKeyword&&n.arguments.length&&n.arguments[0].kind===t.SyntaxKind.TemplateExpression&&n.arguments[0].head.kind===t.SyntaxKind.TemplateHead&&r.push({type:"glob",path:n.arguments[0].head.text}),n.expression.kind===t.SyntaxKind.ImportKeyword&&n.arguments.length&&n.arguments[0].kind===t.SyntaxKind.BinaryExpression&&n.arguments[0].left.kind===t.SyntaxKind.StringLiteral&&r.push({type:"glob",path:n.arguments[0].left.text})}t.forEachChild(n,e)})),r})(ts.createSourceFile(n,l,ts.ScriptTarget.Latest,!0,ts.ScriptKind.TS),self.ts).forEach((function(e){self.postMessage({type:"add-dependency",path:e.path,isGlob:"glob"===e.type})})),self.postMessage({type:"result",transpiledCode:l})}catch(u){self.postMessage({type:"error",error:(a=u,{name:a.name,message:a.message,fileName:a.fileName,lineNumber:a.lineNumber,columnNumber:a.columnNumber})})}}))}});
//# sourceMappingURL=typescript-transpiler.3a330113.worker.js.map