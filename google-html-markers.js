function HtmlMarker(map, position, content, className) {
    'use strict';
    
    this.setValues({
        position: position,
        container: null,
        content: content,
        map: map,
        className: className
    });

    this.onAdd = function () {
        var that = this,
            container = document.createElement('div'),
            content = this.get('content');
            
        container.className = 'facility--map--marker ' + className;

        google.maps.event.addDomListener(container, 'click', function () {
            google.maps.event.trigger(that, 'click');
        });

        if (typeof content.nodeName !== 'undefined') {
            container.appendChild(content);
        } else {
            container.innerHTML = content;
        }

        container.style.position = 'absolute';
        this.set('container', container);
        this.getPanes().floatPane.appendChild(container);
    };

    this.draw = function () {
        var pos = this.getProjection().fromLatLngToDivPixel(this.get('position')),
            container = this.get('container');
        container.style.left = pos.x - (container.offsetWidth / 2) + 'px';
        container.style.top = pos.y - (container.offsetHeight) + 'px';
    };

    this.onRemove = function () {
        this.get('container').parentNode.removeChild(this.get('container'));
        this.set('container', null);
    };

    return this;
}

HtmlMarker.prototype = new google.maps.OverlayView();