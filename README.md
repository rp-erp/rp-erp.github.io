# RP-ERP Knowledge Base

This repo is to store all documents of RP-ERP team

## Prerequisites

- Node version >= 18
- Yarn

## Installation

Install dependencies
```
yarn install
```

Start dev server
```
yarn dev
```

## How to add a new document

### Rules

- All documents will be placed in `/pages/docs` folder
- The documents are in Markdown format (https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

### Steps
- Create a new `md` or `mdx` file in `/pages/docs` folder (ex: `create-ssl-for-viettel-cloud.md`)
- Add your content
- Map you file in `_meta.json` to display on Table of Content

## Tools for Editor

- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced): Preview your markdown content
- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx): Support MDX language which allow to show React component in the markdown content

