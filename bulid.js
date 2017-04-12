const fs = require('fs') // flie system
const path = require('path')

fs.readdir('./markdown',function(error,files){
	var p = path.join('./markdown',files[0])
	var markdown = fs.readFileSync(p).toString()
	var template = fs.readFileSync('./template.html').toString()
	var result = template.replace('%content%',markdown)
	// console.log(markdown)
	fs.writeFileSync(file[0]+'.html',result )
})
