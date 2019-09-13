function folga() {
    var n0 = document.getElementById("nome1").value
    var n2 = document.getElementById("nome2").value
    var n3 = document.getElementById("nome3").value
    var n4 = document.getElementById("nome4").value
    var n5 = document.getElementById("nome5").value
    var result = document.getElementById("result")
    const list = [
        { nome: n0, semana: Math.floor(Math.random() * 4) },
        { nome: n2, semana: Math.floor(Math.random() * 4) },
        { nome: n3, semana: Math.floor(Math.random() * 4) },
        { nome: n4, semana: Math.floor(Math.random() * 4) },
        { nome: n5, semana: Math.floor(Math.random() * 4) }
    ]
    var rs = list.find(obj => obj.semana === 1);
    var sm = rs.semana
    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var d = new Date();
    document.getElementById("result").innerText = "O " + rs.nome + " irá folgar hoje (" + semana[d.getDay()] + ")"
}