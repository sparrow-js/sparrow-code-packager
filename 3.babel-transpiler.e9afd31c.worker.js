this.webpackChunk([3],{"../../node_modules/babel-plugin-syntax-jsx/lib/index.js":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){return{manipulateOptions:function(e,t){t.plugins.push("jsx")}}},e.exports=t.default},"../../node_modules/babel-plugin-transform-cx-jsx/index.js":function(e,t,n){"use strict";let r=/(.*)-(bind|tpl|expr)$/;function i(e,t,n){if(t.namespace&&t.namespace.name)return e.objectProperty(e.stringLiteral(t.namespace.name),e.objectExpression([e.objectProperty(e.stringLiteral(t.name.name),n)]));let i=r.exec(t.name);return i?e.objectProperty(e.stringLiteral(i[1]),e.objectExpression([e.objectProperty(e.stringLiteral(i[2]),n)])):e.objectProperty(e.stringLiteral(t.name),n)}function o(e,t,n){return"JSXAttribute"===t.type&&(null==t.value?i(e,t.name,e.booleanLiteral(!0)):i(e,t.name,s(e,t.value,{root:!1,scope:n.scope})))}function s(e,t,n){if(!t)return t;switch(t.type){case"JSXElement":return l(e,t,n);case"JSXText":return e.stringLiteral(t.value);case"JSXExpressionContainer":return s(e,t.expression,n);case"ObjectExpression":for(let r=0;r<t.properties.length;r++)t.properties[r].value=s(e,t.properties[r].value,n);break;case"ArrayExpression":for(let r=0;r<t.elements.length;r++)t.elements[r]=s(e,t.elements[r],n)}return t}function l(e,t,n){if("JSXElement"===t.type&&t.openingElement){let r,i=function e(t){if(t.name)return t.name;if(t.object)return e(t.object)+"."+e(t.property);throw new Error("Could not calculate name.")}(t.openingElement.name);if("cx"!=i&&"Cx"!=i&&n.root)return!1;if(n.root||"cx"==i||"Cx"==i)return n.root=!1,null!=t.children&&(r=t.children.filter((function(e){return"JSXElement"==e.type})).map((function(t){return l(e,t,n)}))),"Cx"==i?(r&&r.length>0&&t.openingElement.attributes.push(e.jSXAttribute(e.jSXIdentifier("items"),e.jSXExpressionContainer(e.arrayExpression(r)))),t.children=[],t):r&&r.length>1?e.arrayExpression(r):r&&1==r.length?r[0]:e.nullLiteral();let p=[],a=i.indexOf(".");-1!=a?p.push(e.objectProperty(e.stringLiteral("$type"),e.memberExpression(e.identifier(i.substr(0,a)),e.identifier(i.substring(a+1))))):i[0].toLowerCase()==i[0]?(p.push(e.objectProperty(e.stringLiteral("$type"),e.identifier("HtmlElement"))),p.push(e.objectProperty(e.stringLiteral("tag"),e.stringLiteral(i))),n.scope.opts&&!1===n.scope.opts.autoImportHtmlElement||n.scope.$cx.addImport("HtmlElement","cx/widgets")):p.push(e.objectProperty(e.stringLiteral("$type"),e.identifier(i)));let u=[],c=[];if(t.openingElement.attributes&&t.openingElement.attributes.length)for(let s=0;s<t.openingElement.attributes.length;s++)if(e.isJSXSpreadAttribute(t.openingElement.attributes[s]))c.push(t.openingElement.attributes[s].argument);else{let r=o(e,t.openingElement.attributes[s],n);r&&(p.push(r),u.push(r.key.value))}if(c.length>0&&p.push(e.objectProperty(e.stringLiteral("jsxSpread"),e.arrayExpression(c))),u.length>0&&p.push(e.objectProperty(e.stringLiteral("jsxAttributes"),e.arrayExpression(u.map((function(t){return e.stringLiteral(t)}))))),null!=t.children&&t.children.length){r=[];for(let i=0;i<t.children.length;i++){let o=s(e,t.children[i],n);o&&r.push(o)}r.length&&p.push(e.objectProperty(e.stringLiteral("children"),e.arrayExpression(r)))}return e.objectExpression(p)}}e.exports=function(e){let t=e.types;return{visitor:{Program:{enter:function(e,n){n.$cx={imports:{},addImport:function(r,i){if(n.$cx.imports[r])return;let o=t.identifier(r),s=t.importDeclaration([t.importSpecifier(o,o)],t.stringLiteral(i));e.unshiftContainer("body",s),n.$cx.imports[r]=!0}}},exit:function(e,t){delete t.$cx}},JSXElement:function(e,n){n.opts;let r=e.node;if(r.root)return;let i=l(t,r,{root:!0,scope:n});i&&(e.replaceWith(i),r.root=!0)},ArrowFunctionExpression:function(e,n){let r=e.node;"JSXElement"!==r.body.type||"cx"!==r.body.openingElement.name.name||r.markedAsFunctionalComponentType||n.opts&&!1===n.opts.transformFunctionalComponents||(n.$cx.addImport("createFunctionalComponent","cx/ui"),r.markedAsFunctionalComponentType=!0,e.replaceWith(t.callExpression(t.identifier("createFunctionalComponent"),[r])))},ImportSpecifier(e,t){e.node.imported&&t.$cx&&(t.$cx.imports[e.node.imported.name]=!0)}},inherits:n("../../node_modules/babel-plugin-syntax-jsx/lib/index.js")}}}});
//# sourceMappingURL=3.babel-transpiler.e9afd31c.worker.js.map