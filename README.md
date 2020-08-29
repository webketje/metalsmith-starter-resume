# metalsmith-resume

> A professional, responsive Bootstrap-themed resume / CV, designed by Xiaoying Riley ([3rd Wave Media](https://themes.3rdwavemedia.com)).  
> Made highly customizable with metalsmith, Handlebars & SCSS.

Features a lot of customization, a print-friendly version, and twitter/ facebook/ linkedin share tags.

## Setup

`git clone` this repository, then run `npm install`.  

## Develop

Run `npm start` to compile the resume. Open your browser at [http://localhost:5000](http://localhost:5000) to view the result.
Re-run `npm start` and reload the browser tab to reload changes.
Run `npm run build` for a production build with minified HTML in the `dist/` folder.

## Customize

Make the resume yours by editing the contents of `src/data.yml`, and replacing `src/assets/profile.jpg` with your photo.  
In `index.js` you can set the theme to use either `default` or `grayscale`, or create your own.  
You can modify the Handlebars template at `partials/resume.hbs`.  
Need more flexibility? Feel free to add other metalsmith plugins and further customize the CSS in `src/assets/style.scss`.

## Use responsibly

Please keep the footer backlink intact or purchase a license at [3rd Wave Media](https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/)