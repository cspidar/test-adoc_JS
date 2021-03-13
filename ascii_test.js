var asciidoctor = Asciidoctor()

var html = asciidoctor.convertFile('Asciidoctor_test\03_body.adoc', { to_file: false, standalone: true })

