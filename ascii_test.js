
var asciidoctor = Asciidoctor()

// var url = './Asciidoctor_test/03_body.adoc'

// var loaddoc = asciidoctor.loadFile(url)

// var html = asciidoctor.convert(loaddoc)


var html = asciidoctor.convert('*아스키닥터셈*')

// var html = asciidoctor.convert('Hello, _Asciidoctor_')
console.log(html)

document.getElementById("target_ascii").innerHTML=html;