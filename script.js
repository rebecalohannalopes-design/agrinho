let producao = 50;
let lucro = 50;
let sustentabilidade = 50;

function atualizarStatus() {
    document.getElementById("producao").innerText = producao;
    document.getElementById("lucro").innerText = lucro;
    document.getElementById("sustentabilidade").innerText = sustentabilidade;

    if (sustentabilidade <= 0) {
        alert("Você perdeu! O meio ambiente foi degradado.");
        location.reload();
    }

    if (lucro <= 0) {
        alert("Você perdeu! Sua fazenda faliu.");
        location.reload();
    }

    if (producao >= 100 && sustentabilidade >= 50) {
        alert("Parabéns! Você venceu com produção sustentável!");
        location.reload();
    }
}

function escolha(opcao) {
    let resultado = document.getElementById("resultado");

    if (opcao === 1) {
        producao += 20;
        lucro += 20;
        sustentabilidade -= 30;
        resultado.innerText = "Você aumentou a produção, mas prejudicou o meio ambiente.";
    } else {
        producao += 10;
        lucro += 10;
        sustentabilidade += 20;
        resultado.innerText = "Boa escolha! Crescimento com responsabilidade ambiental.";
    }

    atualizarStatus();
}