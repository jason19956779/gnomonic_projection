var GnoProj = module.exports = {}
var math = require('mathjs')
var R = 15
var r = 0
var prcin = 4

GnoProj.project = function(latitude, longitude) {
    var coordinate = {x:0, y:0}

    if(latitude>0 && latitude<90){
        r = R*(math.cot((math.pi)*(latitude/180)))
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
    var hemisphere = ''

    if(angle>0 && angle<180 && angle!=90){
        hemisphere = (/\D/.exec(longitude))[0]
        if(hemisphere == 'W' || hemisphere == 'E')
        {
            coordinate.x = r*(math.abs(math.sin((math.pi)*(angle/180))))
            coordinate.y = r*(math.abs(math.cos((math.pi)*(angle/180))))
            if(hemisphere == 'W'){
                coordinate.x=-coordinate.x
            }
            if(angle<90){
                coordinate.y=-coordinate.y
            }
        }
        else{
            console.log('Something went wrong.')
            process.exit()
        }
    }
    else if(angle == 0 || angle == 180){
        coordinate.x = 0
        coordinate.y = (angle == 0)?-r:r
    }
    else if(angle == 90){
        hemisphere = (/\D/.exec(longitude))[0]
        coordinate.x = (hemisphere == 'W')?-r:r
        coordinate.y = 0
    }
    else{
        console.log('Something went wrong.')
        process.exit()
    }
    coordinate.x = Number( (coordinate.x == 0)?0:((coordinate.x).toPrecision(prcin)) )
    coordinate.y = Number( (coordinate.y == 0)?0:((coordinate.y).toPrecision(prcin)) )
    return coordinate
}