// you can use any valid CSS color variable or SCSS function

module.exports = {
  font_family: 'Roboto, sans-serif',
  primary_color: '#333333',
  text_primary_color: '#333333',
  bg_light_color: '#CCCCCC',
  bg_dark_color: '#333333',
  text_sec_color: 'lighten($theme-text-color-primary, 10%)',
  text_light_color: 'lighten($theme-text-color-primary, 40%)',
  border_color: 'lighten($theme-text-color-primary, 10%)',
  divider_color: 'lighten($theme-text-color-primary, 10%)'
}