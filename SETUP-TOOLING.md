# Setup Architecture

## Prerequisites

- install node **version 18.13.0** via nvm: `nvm install 18.13.0`
- install rimraf in case of new node version which wasn't installed previously: `npm i -g rimraf`
- create `.env` file in the root:

```bash
# disable https certificate verification on dev
NODE_TLS_REJECT_UNAUTHORIZED=0
```

- create `./scripts/switch-node-version.js` file:

```javascript
#!/usr/bin/env node
/**
 * Switches nodejs version based on .nvmrc file
 */
const fs = require('fs');
const exec = require('child_process').exec;

try {
  const version = fs.readFileSync('.nvmrc', 'utf8');
  console.log(`\n\n\nSwitching nodejs version to ${version}`);

  exec(`nvm use ${version}`, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(stdout, stderr);
    }
  });
} catch (err) {
  console.error('No .nvmrc file found, should be in the root of the project!');
}
```

- create `./scripts/create-ssl.js` file:

```javascript
#!/usr/bin/env node
/**
 * Switches nodejs version based on .nvmrc file
 */
const fs = require('fs');
const exec = require('child_process').exec;
const dir = './.ssl';

try {
  console.log(`\nCreating SSL certificates...\n`);

  exec(`mkcert -install && mkcert localhost`, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(stdout, stderr);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      fs.rename('./localhost-key.pem', './.ssl/localhost-key.pem', (err) => {
        if (err) throw err;
      });
      fs.rename('./localhost.pem', './.ssl/localhost.pem', (err) => {
        if (err) throw err;
      });
      console.error('\nCertificates created.\n');
    }
  });
} catch (err) {
  console.error('Error creating SSL certificates!');
}
```

- add script to `package.json`:

```json
    "node-version": "node ./scripts/switch-node-version.js",
    "createssl": "node ./scripts/create-ssl.js",
```

- run `npm run node-version` to switch node version

## Nuxt3

- run `npx nuxi init <project-name>`
- run `npm i`

> If not done already, you have to install `mkcert` via [chocolately](https://chocolatey.org/install).
>
> - install Chocolately (see link above)
>
> - run `choco install mkcert`
> - close open terminals, cmd or powershells (or if within vscode, restart vscode)

- run `npm run createssl`
- update the **dev** script to `nuxt dev --https --ssl-cert ./.ssl/localhost.pem --ssl-key ./.ssl/localhost-key.pem` in the `package.json`

## Linting

- install deps: `npm i -D eslint eslint-plugin-vue @rushstack/eslint-patch prettier @vue/eslint-config-prettier eslint-plugin-vuejs-accessibility vite-plugin-eslint`

- create `.editorconfig` file:

```bash
; Top-most EditorConfig file
root = true

; 2-column space indentation
[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
max_line_length = 120

# readme
[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

- create `.prettierrc` file:

```bash
{
  "singleQuote": true,
  "trailingComma": "all",
  "useTabs": false,
  "tabWidth": 2,
  "arrowParens": "always",
  "printWidth": 120,
  "singleAttributePerLine": true,
  "vueIndentScriptAndStyle": true
}

```

- create `.eslintrc.js` file:

```javascript
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    'plugin:vuejs-accessibility/recommended',
  ],

  plugins: ['vuejs-accessibility'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
```

- create `vite.config.js` file:

```javascript
import eslintPlugin from 'vite-plugin-eslint';

export default {
  plugins: [eslintPlugin()],
};
```

- create `.vscode/settings.json` file:

```json
{
  "editor.tabSize": 2,
  "editor.rulers": [120],
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.markdownlint": true
  },
  "editor.formatOnSave": false,
  "files.associations": {
    ".env.*": "env",
    "*.config": "xml"
  },
  "eslint.validate": ["javascript", "javascriptreact", "vue"],
  "postcss.validate": false,
  "vetur.validation.script": false
}
```

- update `package.json` scripts:

```json
  "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs --ignore-path .gitignore",
  "lint:fix": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore",
```

## Husky

- install by running `npx husky-init`
- run `npm i`
- install lint-staged: `npm i -D lint-staged`
- add _pre-commit_ hook by `npx husky add .husky/pre-commit "npm run pre-commit"`
- update `package.json` in the root:

```json
  "scripts": {
    "pre-commit": "lint-staged",
  },
  "lint-staged": {
    "**/*.{js,ts,vue,html,md,json,css}": [
      "prettier --write"
    ],
    "**/*.{js,ts,vue,html}": [
      "npm run lint:fix"
    ]
  },
```

- open and update the `pre-commit` file in the `.husky` folder and comment the `npm run test` command:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

#npm run test
npm run pre-commit
```

## TailwindCSS

- install: `npm i -D tailwindcss postcss autoprefixer postcss-import`
- run: `npx tailwindcss init`
- create a `./assets/css/main.css` file:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

- add to `nuxt.config.ts`:

```javascript
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
```

- add content to the `tailwind.config.js` file in the root:

```javascript
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
