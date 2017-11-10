var GnoProj = module.exports = {}
var math = require('mathjs')
var R = 15
var r = 0

GnoProj.project = function(latitude, longitude) {
    var coordinate = {x:0, y:0}

    if(latitude>0 && latitude<90){
        r = R*(math.cot((math.pi/2)*(latitude/90)))
    }
    else if(latitude == 0){
        coordinate.x = 'Not Applicable (is Equator).'
        coordinate.y = 'Not Applicable (is Equator).'
        return coordinate
    }
    else if(latitude == 90){
        coordinate.x = 0
        coordinate.y = 0
        return coordinate
    }

    var angle = (/\d+/.exec(longitude))[0]

    if(angle>0 && angle<180 && angle!==90){
        coordinate.x = r*(math.abs(math.sin((math.pi/2)*(angle/90))))
        coordinate.y = r*(math.abs(math.cos((math.pi/2)*(angle/90))))
        var hemisphere = (/\D/.exec(longitude))[0]
        if(hemisphere == 'W'){
            coordinate.x=-coordinate.x
        }
        if(angle<90){
            coordinate.y=-coordinate.y
        }
        return coordinate
    }
    else if(angle == 0){
        coordinate.x = 0
        coordinate.y = -r
        return coordinate
    }
    else if(angle == 180){
        coordinate.x = 0
        coordinate.y = r
        return coordinate
    }

}