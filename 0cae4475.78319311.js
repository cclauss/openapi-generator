(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),o=n(9),r=(n(0),n(306)),p={id:"online",title:"Online"},c={id:"online",title:"Online",description:"## Hosted",source:"@site/../docs/online.md",permalink:"/docs/online",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/online.md",lastUpdatedBy:"William Cheng",lastUpdatedAt:1590747415,sidebar:"docs",previous:{title:"Plugins",permalink:"/docs/plugins"},next:{title:"Usage",permalink:"/docs/usage"}},l=[{value:"Hosted",id:"hosted",children:[]},{value:"Docker Image",id:"docker-image",children:[]},{value:"Local/Self-hosting",id:"localself-hosting",children:[]}],i={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"hosted"},"Hosted"),Object(r.b)("p",null,"We offer online services, publicly and free of charge:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"latest stable version: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://api.openapi-generator.tech"}),"http://api.openapi-generator.tech")),Object(r.b)("li",{parentName:"ul"},"latest master: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://api-latest-master.openapi-generator.tech"}),"http://api-latest-master.openapi-generator.tech")," (updated with latest master every hour)")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Hosting Sponsor"),Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.linode.com/"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://www.linode.com/media/images/logos/standard/light/linode-logo_standard_light_small.png",alt:"Linode Logo"}))))),Object(r.b)("p",null,"These services are beta and do not have any guarantee on service level"),Object(r.b)("h2",{id:"docker-image"},"Docker Image"),Object(r.b)("p",null,"The openapi-generator-online Docker image can act as a self-hosted web application and API for generating code. This container can be incorporated into a CI pipeline, and requires at least two HTTP requests and some docker orchestration to access generated code."),Object(r.b)("p",null,"Example usage:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# Start container at port 8888 and save the container id\nCID=$(docker run -d -p 8888:8080 openapitools/openapi-generator-online)\n\n# allow for startup\nsleep 10\n\n# Get the IP of the running container (optional)\nGEN_IP=$(docker inspect --format \'{{.NetworkSettings.IPAddress}}\'  ${CID})\n\n# Execute an HTTP request to generate a Ruby client\ncurl -X POST --header \'Content-Type: application/json\' \\\n  --header \'Accept: application/json\' \\\n  -d \'{"openAPIUrl": "https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml"}\' \\\n  \'http://localhost:8888/api/gen/clients/ruby\'\n\n# Example output:\n# {"code":"c2d483.3.4672-40e9-91df-b9ffd18d22b8","link":"http://localhost:8888/api/gen/download/c2d483.3.4672-40e9-91df-b9ffd18d22b8"}\n\n# Download the generated zip file  (using "code" provided from your output) \nwget http://localhost:8888/api/gen/download/c2d483.3.4672-40e9-91df-b9ffd18d22b8\n\n# Unzip the file\nunzip c2d483.3.4672-40e9-91df-b9ffd18d22b8\n\n# Shutdown the openapi generator image\ndocker stop ${CID} && docker rm ${CID}\n')),Object(r.b)("h2",{id:"localself-hosting"},"Local/Self-hosting"),Object(r.b)("p",null,"If you prefer to run the service locally, here are the steps:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mvn clean install\ncd modules/openapi-generator-online\nmvn spring-boot:run\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The online openapi-generator can be run via ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#docker-image"}),"Docker")," as well.")),Object(r.b)("p",null,"For example, to generate Ruby API client, simply send the following HTTP request using curl:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST -H "content-type:application/json" -d \'{"openAPIUrl":"https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml"}\' \\\n    http://localhost:8080/api/gen/clients/ruby\n')),Object(r.b)("p",null,"Then you will receive a JSON response with the URL to download the zipped code."),Object(r.b)("p",null,"To customize the SDK, you can ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," to ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8080/gen/clients/{generator}")," with the following HTTP body:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "options": {},\n  "openAPIUrl": "https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml"\n}\n')),Object(r.b)("p",null,"Here, the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," for a language can be obtained by submitting a ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," request to ",Object(r.b)("inlineCode",{parentName:"p"},"http://locahost:8080/api/gen/clients/{generator}"),":"),Object(r.b)("p",null,"For example, ",Object(r.b)("inlineCode",{parentName:"p"},"curl http://localhost:8080/api/gen/clients/python")," returns"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'  "packageName":{\n    "opt":"packageName",\n    "description":"python package name (convention: snake_case).",\n    "type":"string",\n    "default":"openapi_client"\n  },\n  "packageVersion":{\n    "opt":"packageVersion",\n    "description":"python package version.",\n    "type":"string",\n    "default":"1.0.0"\n  },\n  "sortParamsByRequiredFlag":{\n    "opt":"sortParamsByRequiredFlag",\n    "description":"Sort method arguments to place required parameters before optional parameters.",\n    "type":"boolean",\n    "default":"true"\n  }\n\n{}\n')),Object(r.b)("p",null,"To set package name to ",Object(r.b)("inlineCode",{parentName:"p"},"pet_store"),", the HTTP body of the request is as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "options": {\n    "packageName": "pet_store"\n  },\n  "openAPIUrl": "https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml"\n}\n')),Object(r.b)("p",null,"and here is the curl command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -H "Content-type: application/json" \\\n    -X POST \\\n    -d \'{"options": {"packageName": "pet_store"},"openAPIUrl": "https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml"}\' \\\n    http://localhost:8080/api/gen/clients/python\n')),Object(r.b)("p",null,"Instead of using ",Object(r.b)("inlineCode",{parentName:"p"},"openAPIUrl")," with an URL to the OpenAPI spec, one can include the spec in the JSON payload with ",Object(r.b)("inlineCode",{parentName:"p"},"spec"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "options": {},\n  "spec": {\n    "swagger": "2.0",\n    "info": {\n      "version": "1.0.0",\n      "title": "Test API"\n    },\n    ...\n  }\n}\n')))}s.isMDXComponent=!0},306:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(p,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,c({ref:t},i,{components:n})):o.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var i=2;i<r;i++)p[i]=n[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);