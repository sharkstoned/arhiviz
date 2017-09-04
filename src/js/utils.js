var utils = {
    randomizeRotation: function (collection, marginal) {
        marginal = marginal || 5;
        Array.prototype.forEach.call(collection, function (el) {
            var koef = Math.random();
            koef = Math.random()>0.5 ? koef : koef * -1;
            el.style.transform += 'rotate(' + koef * marginal  + 'deg)';
        })
    },
    randomizePosition: function (collection, marginal) {
        marginal = marginal || 10;
        Array.prototype.forEach.call(collection, function (el) {
            var koefX = Math.random(),
                koefY = Math.random();
            koefX = Math.random()>0.5 ? koefX : koefX * -1;
            koefY = Math.random()>0.5 ? koefY : koefY * -1;
            el.style.transform += 'translate(' + koefX * marginal  + 'px, ' + koefY * marginal  + 'px)';
        })
    }
};