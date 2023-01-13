# BASE

## Project Setup

- install node **version 18.13.0** via nvm: `nvm install 18.13.0`
- checkout this repository
- run `npm run node-version` to switch node version
- install rimraf in case of new node version which wasn't installed previously: `npm i -g rimraf`
- run `npm i`
- create `.env` file in the root:

```bash
# disable https certificate verification on dev
NODE_TLS_REJECT_UNAUTHORIZED=0
```

> If not done already, you have to install `mkcert` via [chocolately](https://chocolatey.org/install).
>
> - install Chocolately (see link above)
>
> - run `choco install mkcert`
> - close open terminals, cmd or powershells (or if within vscode, restart vscode)

- run `npm run createssl`
- update the **dev** script to `nuxt dev --https --ssl-cert ./.ssl/localhost.pem --ssl-key ./.ssl/localhost-key.pem` in the `package.json`

- check for Certificate Authority files: run `mkcert -CAROOT`, and remember folder

### Adding RootCA

> If you already added a RootCA from the mkcert tool, you can skip these steps

- press Windows key and type MMC followed by `<enter>`, this should open the Microsoft Management Console
- in the MMC press CTRL+M to `add or remove snap-ins`
- on the left hand side select `certificates`, press the `add` button and choose `computer account`
- select `Local Computer` (if not already selected) and click `Finish` and `OK`
- open `Certificates (Local Computer)`
- rightclick on `Trusted Root Certificate Authorities` and choose `All tasks` → `Import`
- click `next` in the dialog and choose `browse` to browse to the Certificate Authority folder, which you remembered
- in the Browse dialog select on the bottom right `all files`
- Browse to and select the `RootCA.pem` file and click `Next`
- select `Place all certificates into the following store` and select the `Trusted Root Certification Authorities` by clicking the `browse` button
- click `Next` and `Finish`

### Firefox additional steps

> If you already added a RootCA from the mkcert tool, you can skip these steps

- open Firefox Settings -> search for **certificates**, in results choose `view certificates`
- in the dialog, select `Authorities` tab and click `import` browser to the Certificate Authority folder, which you remembered
- select the `RootCA.pem` file and click OK. Then check both checkboxes and click OK
- restart Firefox (and possibly your dev server) and the site should now be secure in Firefox as well

## Initial

- when all of the above is done, run `npm run lint:fix` to initially fix possible linting issues

## Tasks

### Development

To start the development server and load the front-end:

```bash
npm run dev
```

### Build

To start load the front-end:

```bash
npm run build
```
