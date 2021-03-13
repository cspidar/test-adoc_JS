var asciidoctor = Asciidoctor()

var doc = asciidoctor.convertFile('./Asciidoctor_test/03_body.adoc', { to_file: false, standalone: true })

document.getElementById("target_ascii").innerHTML='바뀐 메세지 입니다.';

window.alert("출력");