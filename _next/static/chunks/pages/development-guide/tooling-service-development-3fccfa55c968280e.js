(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[882],{3815:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/development-guide/tooling-service-development",function(){return n(6040)}])},6040:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return d},default:function(){return u}});var i=n(5893),o=n(2673),r=n(2643),l={src:"/_next/static/media/tooling-service-direct-communication.b9b57bd7.png",height:902,width:1220,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAARVBMVEX///////7+/v7+/f39/f36+vr49vb49fXq9fry8vLs8/nw8vPu7+/m7PDo6Ons3NvR5fPI5/br19Xa3d/R1tm8z9zExMiXxXNdAAAALUlEQVR42gXAhQ3AMAADMC9j5v5/auXfRfBt2k7iWpyPfnZPzTBKlAPBu0okFR+yARK9PY3GAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},t={src:"/_next/static/media/tooling-service-communication.4b31055a.png",height:1078,width:2098,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAWklEQVR42h3LSw6AIAwAUe5/P7e6MWoUI9jyaUuLxFlO8tyy7ilXwMpMah0Abu9ba26+EFMGQFWjEgtCPA4WcdOyEZPUQBUpB21i1kcuhsAswzzvqdrt32b2AeSmXDC63QzSAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},a={src:"/_next/static/media/tooling-service-internal-communication-1.00c0fb95.png",height:628,width:942,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAAKklEQVR42iXGwQ3AMAwDMe+/sAqfpAZB+OI0lkin+aEvn27impLZxUZ7AHbTJ14n1O+7AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},c={src:"/_next/static/media/tooling-service-internal-communication-2.57e5fc89.png",height:1220,width:1992,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAAKUlEQVR42gWAgQ0AIAjD9v+9GiKMzgjm1oLANbso2Xohsj12W68G+vQHdhMnUnnMdhUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},h=n(9013);let d=[{depth:2,value:"Table of Contents",id:"table-of-contents"},{depth:2,value:"External Communication",id:"external-communication"},{depth:3,value:"Communication without Tooling Service",id:"communication-without-tooling-service"},{depth:3,value:"Communication via Tooling Services",id:"communication-via-tooling-services"},{depth:4,value:"Synchronous Communication via RESTful API",id:"synchronous-communication-via-restful-api"},{depth:4,value:"Asynchronous Commnication via Message Queue",id:"asynchronous-commnication-via-message-queue"},{depth:2,value:"Internal Communication",id:"internal-communication"},{depth:2,value:"Development Guide",id:"development-guide"},{depth:3,value:"How to implement a Service Provider",id:"how-to-implement-a-service-provider"},{depth:3,value:"How to implement Restful API",id:"how-to-implement-restful-api"},{depth:3,value:"How to implement Queue Processor",id:"how-to-implement-queue-processor"}];function p(e){let s=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",img:"img",strong:"strong",code:"code",h4:"h4",em:"em",pre:"pre",span:"span"},(0,r.a)(),e.components);return h.zH||x("FileTree",!1),h.zH.File||x("FileTree.File",!0),h.zH.Folder||x("FileTree.Folder",!0),h.mQ||x("Tabs",!1),h.mQ.Tab||x("Tabs.Tab",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{children:"Tooling Services Development"}),"\n",(0,i.jsx)(s.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#external-communication",children:"External Communication"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#communication-without-tooling-service",children:"Communication without Tooling Service"})}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#communication-via-tooling-services",children:"Communication via Tooling Services"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#synchronous-communication-via-restful-api",children:"Synchronous Communication via RESTful API"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#asynchronous-commnication-via-message-queue",children:"Asynchronous Communication via Message Queue"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#internal-communication",children:"Internal Communication"})}),"\n",(0,i.jsxs)(s.li,{children:["Development Guide","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"How to implement a Service Provider"}),"\n",(0,i.jsx)(s.li,{children:"How to implement Restful API"}),"\n",(0,i.jsx)(s.li,{children:"How to implement Queue Processor"}),"\n",(0,i.jsx)(s.li,{children:"How to implement Cron Queue"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This document illustrates the external and internal communication of Tooling Service."}),"\n",(0,i.jsx)(s.h2,{id:"external-communication",children:"External Communication"}),"\n",(0,i.jsx)(s.h3,{id:"communication-without-tooling-service",children:"Communication without Tooling Service"}),"\n",(0,i.jsx)(s.p,{children:"The following diagram decribes how our ERP System works together without Tooling Service."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Call directly to Service Gate",placeholder:"blur",src:l})}),"\n",(0,i.jsxs)(s.p,{children:["As can be seen that all clients such as Mobile App, ERP Web or other API Clients like Postman interact with our system through Main Services (Service Gate) and receive the response in ",(0,i.jsx)(s.strong,{children:"synchronous communication"})," way. This synchronous communication approach has an advantage, allowing clients to retrieve the result from the server in ",(0,i.jsx)(s.code,{children:"realtime"}),". However, it also has a downside that if the Main Services are trying to process ",(0,i.jsx)(s.strong,{children:"a heavy task"}),", it can ",(0,i.jsx)(s.strong,{children:"delay the clients receiving the output"})," and causes a poor UX experience."]}),"\n",(0,i.jsx)(s.h3,{id:"communication-via-tooling-services",children:"Communication via Tooling Services"}),"\n",(0,i.jsxs)(s.p,{children:["In order to resolve the ",(0,i.jsx)(s.strong,{children:"delayed"})," issue when communicating synchronously, Tooling Service jumps into the play."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Calling via Tooling Service",placeholder:"blur",src:t})}),"\n",(0,i.jsx)(s.p,{children:"According to the diagram, the clients now interacting with the ERP System via RESTful API endpoint that exposes from Tooling Services. In general, Tooling Services supports two way of communication"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Synchronous via RESTful API."}),"\n",(0,i.jsx)(s.li,{children:"Asynchronous via Message Queue that facilitates the Pub-Sub pattern"}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"synchronous-communication-via-restful-api",children:"Synchronous Communication via RESTful API"}),"\n",(0,i.jsx)(s.p,{children:"There're two use cases of synchronous communication via RESTful API"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Sending a message to a message queue via Publisher."}),"\n",(0,i.jsxs)(s.li,{children:["Calling Main Services API for some business customization: This approach is used when you want to customize the request before sending to our main services or doing some pre-calculation before hand. Basically, this way keeps the implementation in Main Service reusable internally and avoid ",(0,i.jsx)(s.code,{children:"Anti-IF"})," pattern."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["For example, ",(0,i.jsx)(s.strong,{children:"Converting Image to Pdf"})," is not a responsibility of Main Services. Therefore, you can develop this feature in Tooling Services and exposes via RESTful API."]}),"\n",(0,i.jsxs)(s.p,{children:["Another example for ",(0,i.jsx)(s.strong,{children:"Caching"}),", you want to cache the response from the Main Services for the next query. You can use Tooling Service as a ",(0,i.jsx)(s.em,{children:"Reversed Proxy"}),", forward the client request to main service and cache the response into caching database that Tooling Services is integrating with. With this use case, The performance of our system will be significantly improved."]}),"\n",(0,i.jsx)(s.h4,{id:"asynchronous-commnication-via-message-queue",children:"Asynchronous Commnication via Message Queue"}),"\n",(0,i.jsxs)(s.p,{children:["Just want to emphasize that this process happens after the ",(0,i.jsx)(s.strong,{children:"Publisher"})," and ",(0,i.jsx)(s.strong,{children:"Cron"})," add new message into the ",(0,i.jsx)(s.strong,{children:"Message Queue"}),". Then, Subcribers will perform the business logic and returns the response in background. In addition, you can monitor the process and result by using Bull Board at ",(0,i.jsx)(s.a,{href:"http://127.0.0.1/admin/queues",children:"http://127.0.0.1/admin/queues"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"When it comes to the implementation in Subcriber component, it can be developed indenpendently or dependent on Main Services to serve some heavy business task purposes."}),"\n",(0,i.jsx)(s.p,{children:"For example, The PO Signature use case, just consider the CEO is busy all the time so he wants to sign all **Purchase Order Approval **in the fastest way, so the mobile should not wait the server to validate the signature, mark the approval and upload the document to the cloud. Consequently, we should response our CEO the status as approval is processing immediately and allows him to sign the next one. For the unprocessed server tasks, we can delegate them to a queue and execute them later on."}),"\n",(0,i.jsx)(s.h2,{id:"internal-communication",children:"Internal Communication"}),"\n",(0,i.jsx)(s.p,{children:"There're four main components in Tooling Services project"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"shared"}),": To store all common use lib that share with among components in this project"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"service"}),": To store all ",(0,i.jsx)(s.code,{children:"main or business logic"})," of a service that will be used in ",(0,i.jsx)(s.code,{children:"api"})," or ",(0,i.jsx)(s.code,{children:"queue"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"api"}),": To store the implementation that exposes the gateway to the clients via the RESTful API endpoints"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"queue"}),": To store the implementation that will work in the background. It will be triggered by ",(0,i.jsx)(s.code,{children:"api"})," or by itself via ",(0,i.jsx)(s.code,{children:"cron"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Please see the diagram below for more details"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Internal Communication Overview",placeholder:"blur",src:a})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Internal Communication In Detail",placeholder:"blur",src:c})}),"\n",(0,i.jsx)(s.p,{children:"In general, you can understand the internal communication like following:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["All components can use all modules in ",(0,i.jsx)(s.code,{children:"shared"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"api"})," and ",(0,i.jsx)(s.code,{children:"queue"})," must use ",(0,i.jsx)(s.code,{children:"service"})," for the business implementation."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"development-guide",children:"Development Guide"}),"\n",(0,i.jsx)(s.h3,{id:"how-to-implement-a-service-provider",children:"How to implement a Service Provider"}),"\n",(0,i.jsx)(s.p,{children:"Updating..."}),"\n",(0,i.jsx)(s.h3,{id:"how-to-implement-restful-api",children:"How to implement Restful API"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Step 1: Create a new folder for new Restful API"}),"\n",(0,i.jsx)(s.li,{children:"Step 2: Create a controller file."}),"\n",(0,i.jsx)(s.li,{children:"Step 3: Create module file and import the created controller at step 2."}),"\n",(0,i.jsxs)(s.li,{children:["Step 4: Create DTO (Data Transfer Object) file then add ",(0,i.jsx)(s.code,{children:"@ApiProperty"})," decorator for the attributes."]}),"\n",(0,i.jsxs)(s.li,{children:["Step 5: Import the created module at step 3 into ",(0,i.jsx)(s.code,{children:"src/api/api-manager.module.ts"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["For example: I want to create a new Restful API for Document Export. Below are the files and folder I will create in ",(0,i.jsx)(s.code,{children:"src/api"}),"."]}),"\n",(0,i.jsx)(h.zH,{children:(0,i.jsx)(h.zH.Folder,{name:"src/api",defaultOpen:!0,children:(0,i.jsxs)(h.zH.Folder,{name:"export-document-api",defaultOpen:!0,children:[(0,i.jsx)(h.zH.File,{name:"export-document-api.controller.ts"}),(0,i.jsx)(h.zH.File,{name:"export-document-api.module.ts"})]})})}),"\n",(0,i.jsxs)(h.mQ,{items:["export-document-api.controller.ts","export-document-api.module.ts","api-manager.module.ts"],children:[(0,i.jsx)(h.mQ.Tab,{children:(0,i.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",hasCopyCode:!0,children:(0,i.jsxs)(s.code,{"data-line-numbers":"","data-language":"typescript","data-theme":"default","data-line-numbers-max-digits":"2",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"//Endpoint: POST /api/export-document/po-signed-document/:extension"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { Controller"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" HttpCode"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Post"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Req } "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@nestjs/common'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { ApiBody"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ApiResponse"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ApiTags } "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@nestjs/swagger'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { GenericRequestBodyDTO } "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'../generic-request-body.dto'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  @"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ApiTags"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Export Document'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  @"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Controller"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'api/export-document'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ExportDocumentApiController"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    @"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Post"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'po-signed-document/:extension'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    @"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ApiResponse"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({ status"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" description"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Successfully'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" })"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    @"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ApiBody"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({ type"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" GenericRequestBodyDTO })"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    @"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"HttpCode"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"exportPOSignedDocument"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(@"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Req"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() req) {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { message"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`PO Signed Document  has been put in queue successfully`"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" };"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:" "})]})})}),(0,i.jsx)(h.mQ.Tab,{children:(0,i.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",hasCopyCode:!0,children:(0,i.jsxs)(s.code,{"data-line-numbers":"","data-language":"typescript","data-theme":"default","data-line-numbers-max-digits":"1",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { Module } "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@nestjs/common'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { ExportDocumentApiController } "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./export-document-api.controller'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Module"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  imports"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" []"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  controllers"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" [ExportDocumentApiController]"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ExportDocumentApiModule"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { }"})]})]})})}),(0,i.jsx)(h.mQ.Tab,{children:(0,i.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",hasCopyCode:!0,children:(0,i.jsxs)(s.code,{"data-line-numbers":"","data-language":"typescript","data-theme":"default","data-line-numbers-max-digits":"2",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { Module } "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@nestjs/common'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { ConvertApiModule } "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./convert-api/convert-api.module'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { ExportDocumentApiModule } "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./export-document-api/export-document-api.module'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  @"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Module"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    imports"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      ConvertApiModule"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      ExportDocumentApiModule"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  })"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ApiManagerModule"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { }"})]})]})})})]}),"\n",(0,i.jsx)(s.h3,{id:"how-to-implement-queue-processor",children:"How to implement Queue Processor"}),"\n",(0,i.jsx)(s.p,{children:"Updating..."}),"\n",(0,i.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})})})})]})}function x(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.a)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)},pageOpts:{filePath:"pages/development-guide/tooling-service-development.mdx",route:"/development-guide/tooling-service-development",title:"Tooling Services Development",headings:d},pageNextRoute:"/development-guide/tooling-service-development"})}},function(e){e.O(0,[673,888,774,179],function(){return e(e.s=3815)}),_N_E=e.O()}]);