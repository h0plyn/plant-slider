# plant-slider
Bare bones responsive image slider with room to grow. Click to progress through the slides and go back to the start. Dots represent the number of slides, and the slide you are currently viewing. This was made specifically for a site.
## Getting Started
First make sure to include the latest version of jQuery. Then include the plant slider js file:
```html5
<script type="text/javascript" src="plantslider.min.js"></script>
```
Next include the css file:
```html5
<link rel="stylesheet" type="text/css" href="plantslider.min.css">
```
## How to use
Set up your HTML like this:
```html5
<div class="foo">
  <div class="slide">
    <img src="foo.jpg" alt="foo" />
    <img src="bar.com" alt="bar" />
  </div>
  <ul class="plant-slider-ui"></ul>
</div>
```
Initialize a single slider by calling the element ID:
```js
$(document).ready( function() {
  $('#foo').plantSlider();
});
```
or by class:
```js
$(document).ready( function() {
  $('.foo').plantSlider();
});
```
Initialize multiple sliders on the same page by using the same class for each slider and calling the element class:
```js
$(document).ready( function() {
  $('.bar').plantSlider();
});
```
Check the example in the index.html file to see it all put together.
