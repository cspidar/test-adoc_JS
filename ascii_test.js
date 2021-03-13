var asciidoctor = Asciidoctor()

var doc = asciidoctor.convertFile('./Asciidoctor_test/03_body.adoc', { to_file: false, standalone: true })

document.getElementById("target").innerHTML=doc;
