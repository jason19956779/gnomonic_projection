var GnoProj = require('./src/gnomonic')
var readlineSync = require('readline-sync')
var prcin = 4 //customisable digit precision, GnoProj.project's default precision is 4.
prcin.toPrecision
console.log('A Gnomonic Projection Application.')
console.log('Please Enter Latitude and Longitude.\n')
console.log('Range:\nLatitude between 0° and 90°N\nLongitude between 0° and 180°')
console.log('ex. Latitude: 23.5\n    Longitude: 121E\n')

console.log('Input:')
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

console.log('\nOutput:')
var coordinate = GnoProj.project(latitude, longitude)
console.log(`Cartesian Coordinate:\nx:${coordinate.x}\ny:${coordinate.y}`)