var Metalsmith = require('metalsmith');
var xhandlebars = require('metalsmith-handlebars-x');
var rename = require('metalsmith-rename');
var scss = require('metalsmith-sass');
var minifyHTML = require('metalsmith-html-minifier');
var when = require('metalsmith-if');
var serve = require('metalsmith-serve');
var default_theme = require('./themes/default');

Metalsmith(__dirname)
  .destination('dist')
  .clean(true)
  .metadata({
    theme: default_theme
  })
  .use(xhandlebars({
    pattern: ['data.yml', 'assets/style.scss']
  }))
  .use(rename([['data.yml', 'index.html']]))    // want another output filename? replace index.html with e.g. 'resume.html'
  .use(scss())
  .use(when(process.env.NODE_ENV === 'production', minifyHTML()))
  .use(when(process.env.NODE_ENV !== 'production', serve({
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'localhost'
  })))
  .build((err) => {
    if (err)
      throw err;
  });