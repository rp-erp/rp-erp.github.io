(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[259],{8317:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/install-ssh-server-on-window",function(){return s(7156)}])},7156:function(e,a,s){"use strict";s.r(a),s.d(a,{__toc:function(){return r}});var n=s(5893),t=s(2673),l=s(2643);let r=[];function i(e){let a=Object.assign({h1:"h1",p:"p",ol:"ol",li:"li",pre:"pre",code:"code",span:"span"},(0,l.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{children:"How to install SSH Server on Windows"}),"\n",(0,n.jsx)(a.p,{children:"To set up SSH access to your Windows server, you can use the built-in OpenSSH Server. Here's a step-by-step guide:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"Install OpenSSH Server: Open PowerShell as Administrator and run the following command:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0"})})})}),"\n",(0,n.jsxs)(a.ol,{start:"2",children:["\n",(0,n.jsx)(a.li,{children:"Start the service: Once installed, start the SSH server service by running:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Start-Service sshd"})})})}),"\n",(0,n.jsxs)(a.ol,{start:"3",children:["\n",(0,n.jsx)(a.li,{children:"Set the service to start automatically: To ensure the SSH server is automatically started after a reboot, run:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Set-Service -Name sshd -StartupType 'Automatic'"})})})}),"\n",(0,n.jsxs)(a.ol,{start:"4",children:["\n",(0,n.jsx)(a.li,{children:"Confirm the Firewall rule is configured: It should be created automatically by the setup. In case it's not, run:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22"})})})}),"\n",(0,n.jsxs)(a.ol,{start:"5",children:["\n",(0,n.jsx)(a.li,{children:"Check the installation: You can check that the installation was successful by running:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'"})})})}),"\n",(0,n.jsxs)(a.ol,{start:"6",children:["\n",(0,n.jsx)(a.li,{children:"Create an SSH key pair: On your local machine, use ssh-keygen to create an SSH key pair. If you're on Linux or macOS, you can use the following command:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"ssh-keygen"})})})}),"\n",(0,n.jsxs)(a.ol,{start:"7",children:["\n",(0,n.jsx)(a.li,{children:"Set permission"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"cd ~"})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"mkdir .ssh"})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"notepad.exe .ssh\\authorized_keys"})})]})}),"\n",(0,n.jsxs)(a.ol,{start:"8",children:["\n",(0,n.jsxs)(a.li,{children:["Add content for ",(0,n.jsx)(a.code,{children:"authorized_keys"})," file"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"icacls .ssh /inheritance:r"})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:'icacls .ssh /grant "your-username:(F)"'})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"icacls .ssh\\authorized_keys /inheritance:r"})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:'icacls .ssh\\authorized_keys /grant "your-username:(F)"'})})]})}),"\n",(0,n.jsxs)(a.ol,{start:"9",children:["\n",(0,n.jsx)(a.li,{children:"Restart SSH server"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Restart-Service sshd"})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Get-Service sshd"})})]})})]})}a.default=(0,t.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,l.a)(),e.components);return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/docs/install-ssh-server-on-window.md",route:"/docs/install-ssh-server-on-window",title:"How to install SSH Server on Windows",headings:r},pageNextRoute:"/docs/install-ssh-server-on-window"})}},function(e){e.O(0,[673,774,888,179],function(){return e(e.s=8317)}),_N_E=e.O()}]);