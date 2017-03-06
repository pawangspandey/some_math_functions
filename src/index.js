var geolib = require('grolib');

module.exports = {
    isPointInsideCircle : function(point,center,radius){
        if(typeof point !== 'object' && typeof point !== 'object'){
            throw Error("point and center should be object");
        }else{
            return geolib.isPointInCircle(point,center,radius);
        }
    }
}