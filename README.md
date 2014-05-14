Google Maps HTML Markers
======================

This library allows you to create custom HTML Markers on your own google maps and style it completely using CSS and also populate it with your own content.

How to use
======================

Download the js and include it after the google maps reference.

Reference it in your own js like so:

htmlMarker = new HtmlMarker(
    map reference4,
    new google.maps.LatLng(lat, long),
    content,
    class-name
);

If your using background colours you'll need to add a border to your marker for the background to work (not got a clue why).