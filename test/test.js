var GnoProj = require('../src/gnomonic')

console.log(GnoProj.project(90,0))
console.log(GnoProj.project(90,'60W'))
console.log(GnoProj.project(90,'120E'))
console.log(GnoProj.project(90,180))