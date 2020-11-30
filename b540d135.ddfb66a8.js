(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{324:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(6),r=(n(0),n(426)),i={id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},c={unversionedId:"redux-integration",id:"version-5.x/redux-integration",isDocsHomePage:!1,title:"Redux integration",description:"It is extremely easy to use Redux in an app with React Navigation. It's basically no different than without React Navigation.",source:"@site/versioned_docs/version-5.x/redux-integration.md",slug:"/redux-integration",permalink:"/docs/redux-integration",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/redux-integration.md",version:"5.x",sidebar_label:"Redux integration",sidebar:"version-5.x/docs",previous:{title:"Type checking with TypeScript",permalink:"/docs/typescript"},next:{title:"Integrating with MobX State Tree",permalink:"/docs/MST-integration"}},s=[{value:"Use a component that is <code>connect</code>ed in <code>options</code>",id:"use-a-component-that-is-connected-in-options",children:[]},{value:"Pass the state you care about as a param to the screen",id:"pass-the-state-you-care-about-as-a-param-to-the-screen",children:[]},{value:"Can I store the navigation state in Redux too?",id:"can-i-store-the-navigation-state-in-redux-too",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"It is extremely easy to use Redux in an app with React Navigation. It's basically no different than without React Navigation."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Provider } from 'react-redux';\nimport { NavigationContainer } from '@react-navigation/native';\n\n// Render the app container component with the provider around it\nexport default function App() {\n  return (\n    <Provider store={store}>\n      <NavigationContainer>\n        {/* Screen configuration */}\n      </NavigationContainer>\n    </Provider>\n  );\n}\n")),Object(r.b)("p",null,"Notice that we wrap our components in a ",Object(r.b)("inlineCode",{parentName:"p"},"Provider")," like we'd normally do with ",Object(r.b)("inlineCode",{parentName:"p"},"react-redux"),". Ta da! Now feel free to use ",Object(r.b)("inlineCode",{parentName:"p"},"connect")," throughout your app."),Object(r.b)("h3",{id:"use-a-component-that-is-connected-in-options"},"Use a component that is ",Object(r.b)("inlineCode",{parentName:"h3"},"connect"),"ed in ",Object(r.b)("inlineCode",{parentName:"h3"},"options")),Object(r.b)("p",null,"Create a component, ",Object(r.b)("inlineCode",{parentName:"p"},"connect")," it to the store, then use that component in the ",Object(r.b)("inlineCode",{parentName:"p"},"title"),"."),Object(r.b)("samp",{id:"redux-integration"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function Counter({ value }) {\n  return <Text>Count: {value}</Text>;\n}\n\nconst CounterContainer = connect(state => ({ value: state.count }))(Counter);\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<Screen\n  name="Test"\n  component={TestScreen}\n  options={{ title: () => <CountContainer /> }}\n/>\n')),Object(r.b)("h3",{id:"pass-the-state-you-care-about-as-a-param-to-the-screen"},"Pass the state you care about as a param to the screen"),Object(r.b)("p",null,"If the value isn't expected to change, you can just pass it from a ",Object(r.b)("inlineCode",{parentName:"p"},"connect"),"ed component to the other screen as a param."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Button\n  title=\"Go to static counter screen\"\n  onPress={() =>\n    props.navigation.navigate('StaticCounter', {\n      count,\n    })\n  }\n/>\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function StaticCounter({ route }) {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.paragraph}>{route.params.count}</Text>\n    </View>\n  );\n}\n")),Object(r.b)("samp",{id:"redux-integration-nav-param"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<RootStack.Screen\n  name="StaticCounter"\n  component={StaticCounter}\n  options={({ route }) => ({ title: route.params.count })}\n/>\n')),Object(r.b)("h2",{id:"can-i-store-the-navigation-state-in-redux-too"},"Can I store the navigation state in Redux too?"),Object(r.b)("p",null,"This is not possible. We don't support it because it's too easy to shoot yourself in the foot and slow down / break your app."),Object(r.b)("p",null,"However it's possible to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zalmoxisus/redux-devtools-extension"}),Object(r.b)("inlineCode",{parentName:"a"},"redux-devtools-extension"))," to inspect the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/navigation-state"}),"navigation state")," and actions, as well as perform time travel debugging by using the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/devtools"}),Object(r.b)("inlineCode",{parentName:"a"},"devtools")," package"),"."))}u.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=a,m=l["".concat(i,".").concat(d)]||l[d]||b[d]||r;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);