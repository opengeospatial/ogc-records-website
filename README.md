# README

## Introduction :beginner:

This repository contains the code for the [OGC API - Records](https://records.developer.ogc.org/) micro website. If you are impatient to get it running, just jump to the [Quick Start](#quick-start) section. If you want to reuse this code for another website, you can scroll down to the [Reusing this repository](#reusing-this-repository) section.

### Why

This website is intended to present and describe the OGC API - Records (at this stage, candidate) Standard to a wide audience of web developers. It is not meant as a replacement of the (candidate) Standard document, available [here](https://docs.ogc.org/DRAFTS/20-004.html).

### How

The website uses the [node.js](https://nodejs.org/en) framework. The HTML is generated using the [PUG template rendering engine](https://pugjs.org/api/getting-started.html).

## Quick Start :rocket:

Clone this repository with:

`git clone https://github.com/opengeospatial/ogc-records-website.git`

Then enter the folder:

`cd ogc-records-website`

Install dependencies:

`npm install`

Start development server:

`npm start`

Once you start the development server, the site will be available at:

`http://localhost:3000`

The hot reload will ensure that the changes you do on the code will be reflected on the browser.

When you are ready to commit changes, run:

`npm run build`

The scripts will generate a static build on [./dist](./dist/)

To deploy it to GitHub pages:

`git subtree push --prefix dist origin gh-pages`

## Reusing this repository :recycle:

You could fork and reuse the code on this repository for another Standard. This section contains some information to help you get started.

The content for the website is located on the pug files, under [./src/pug](./src/pug):
* [index.pug](.src/pug/index.pug): content and code for generating index.html
* [blocks.pug](.src/pug/blocks.pug): content and code for generating blocks.html
* [patterns.pug](.src/pug/patterns.pug): content and code for generating blocks.html

If you are not familiar with pug, you can read more about it [here](https://pugjs.org/api/getting-started.html). 

You should start by editing the [header.masthead](./src/pug/index.pug#+62), which contains the title and tag line. Here is a summary of other sections to modify:
* [what.page-section](./src/pug/index.pug#L71): high-level explanation of the Standard.
* [why.page-section.](./src/pug/index.pug#L90): Highlight three main reasons to use the Standard (1-2 paragraphs max, each).
* [how.page-section](./src/pug/index.pug#L127): description of how the Standard actually works. It should be longer than the `what` section, but still not too long. For more details, point to other pages, like [patterns](./src/pug/patterns.pug).
* [inaction.page-section](./src/pug/index.pug#L175): live deployments of Standard implementations (ask for contributions, if needed). 
* [getstarted](./src/pug/index.pug#L239): list of implementations of the Standard, organised by servers and clients and programming language. This is normally taken from the implementations page on the GitHub repo of the Standard.

To edit the styles of the different sections, have a look at the [./src/scss/](./src/scss/) folder. Global styles are on [./src/scss/_global.scss](./src/scss/_global.scss).

To update the backdrop image, place an image on [./src/assets/img](./src/assets/img) and link it on [_masthead.scss](./src/scss/sections/_masthead.scss#L10)

## License

This project is released under an [MIT License](./LICENSE)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)