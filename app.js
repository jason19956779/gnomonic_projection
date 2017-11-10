var GnoProj = require('./src/gnomonic')
var readlineSync = require('readline-sync')

console.log('A Gnomonic Projection Application.')
console.log('Please Enter Latitude and Longitude.\n')
console.log('Range:\nLatitude between 0° and 90°N\nLongitude between 0° and 180°')
console.log('eg. Latitude: 60\n    Longitude: 120E\n')

var latitude = readlineSync.question('Latitude: ')
if(latitude>=0 && latitude <=90){
    console.log(`${latitude}, checked.`)
}
else{
    console.log(`${latitude}, out of scope.`)
    process.exit()
}

var longitude = readlineSync.question('Longitude: ')
if( ((/\d+/.exec(longitude))[0])>=0 && ((/\d+/.exec(longitude))[0])<=180 ){
    if( (((/\d+/.exec(longitude))[0])>0 && ((/\d+/.exec(longitude))[0])<180) && ((/\D/.test(longitude)))==false ){
        console.log(`${longitude}, out of scope.`)
        process.exit()
    }
    console.log(`${longitude}, checked.`)
}
else{
    console.log(`${longitude}, out of scope.`)
    process.exit()
}

var coordinate = GnoProj.project(latitude, longitude)
console.log(`Cartesian Coordinate:\nx:${coordinate.x}\ny:${coordinate.y}`)