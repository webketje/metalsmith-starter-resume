var Metalsmith = require('metalsmith');
var xhandlebars = require('metalsmith-handlebars-x');
var rename = require('metalsmith-rename');
var scss = require('metalsmith-sass');
var minifyHTML = require('metalsmith-html-minifier');
var when = require('metalsmith-if');
var default_theme = require('./themes/default');
var debug = false;

Metalsmith(__dirname)
  .destination('dist')
  .clean(true)
  .metadata({
    theme: default_theme
  })
  .use(xhandlebars({
    pattern: ['data.yml', 'assets/style.scss']
  }))
  .use(rename([[/data.yml/, 'resume.html']]))
  .use(scss())
  .use(when(!debug, minifyHTML()))
  .build((err) => {
    if (err)
      throw err;
  });