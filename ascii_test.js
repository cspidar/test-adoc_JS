
// var asciidoctor = Asciidoctor()


var loaddoc = asciidoctor.loadFile('./Asciidoctor_test/03_body.adoc')

var html = asciidoctor.convert(loaddoc)


// var html = asciidoctor.convertFile('./Asciidoctor_test/03_body.adoc', { to_file: false, standalone: true })

// var html = asciidoctor.convert('Hello, _Asciidoctor_')
console.log(html)

document.getElementById("target_ascii").innerHTML=html;