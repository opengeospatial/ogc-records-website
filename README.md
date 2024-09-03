# README

## Quick Start

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

## License

This project is released under an [MIT License](./LICENSE)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)