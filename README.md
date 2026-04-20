# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

To run with a specific locale:

```bash
# Vietnamese locale
npm run start:vi
```

## Build

```bash
npm run build
```

This command generates static content into the `build` directory (with 4 GB memory allocation to handle large builds).

To build a specific locale only:

```bash
# Vietnamese locale
npm run build:vi
```

## Run Docs Site Locally

After building, serve the static site locally:

```bash
npm run serve
```

This starts a local server for the production build. Open [http://localhost:3000](http://localhost:3000) to view it.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
