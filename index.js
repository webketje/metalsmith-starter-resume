const Metalsmith = require('metalsmith');
const xhandlebars = require('metalsmith-handlebars-x');
const rename = require('metalsmith-rename');
const scss = require('@metalsmith/sass');
const minifyHTML = require('metalsmith-html-minifier');
const when = require('metalsmith-if');
const serve = require('metalsmith-serve');
const pdfize = require('metalsmith-pdfize');
const default_theme = require('./themes/default');
const isProduction = process.env.NODE_ENV === 'production';
const metalsmith = Metalsmith(__dirname);

// build options
const webPagePath = 'index';  // without extension
const pdfPath = 'CV_John_Doe'; // without extension
const pdfFormat = 'A4'; // letter for US | A4 for EU formats

// build
metalsmith
  .clean(true)
  .metadata({
    theme: default_theme,
    pdfPath: `${pdfPath}.pdf`,
    A4: pdfFormat === 'A4'
  })
  .use(xhandlebars({
    pattern: ['data.yml', 'assets/style.scss']
  }))
  .use(rename([['data.yml', `${webPagePath}.html`]]))    // want another output filename? replace index.html with e.g. 'resume.html'
  .use(when(isProduction, minifyHTML()))
  .use(scss({
    quietDeps: true
  }))
  .use(pdfize({
    pattern: `${webPagePath}.html`,
    printOptions: {
      printBackground: true,
      format: pdfFormat,
      margin: {
        top: 1,
        bottom: 1,
        right: 1,
        left: 1
      }
    }
  }))
  .use(rename([[`${webPagePath}.html.pdf`, `${pdfPath}.pdf`]]))    // want another output filename? replace index.html with e.g. 'resume.html'
  .use(when(isProduction !== 'production', serve({
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'localhost'
  })))
  .build(function(err) {
    if (err)
      throw err;
    console.log(`Successfully built to ${metalsmith.source()}`)
  });