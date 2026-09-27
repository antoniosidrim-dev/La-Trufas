function abrirWhatsApp() {
    const mensagem = "Olá! Gostaria de saber mais sobre as trufas.";
    const mensagemCodificada = encodeURIComponent(mensagem);
    window.location.href = `https://wa.me/553184345077?text=${mensagemCodificada}`;
}

function abrirInstagram() {
    window.location.href = "https://www.instagram.com/la.trufa_art?stkn=Nzl0emc1eDFs";
}

function abrirYouTube() {
    window.location.href = "https://www.youtube.com/@la.trufa_art?si=UsbWeE6HC5-w5hWo";
}

const meuSwitch = document.getElementById("meuSwitch");
let escuro = document.getElementById("escuro-claro");
let imagemc = document.getElementById("chefee");
meuSwitch.addEventListener("change", function () {
    document.body.classList.toggle("modo-escuro", meuSwitch.checked);
    escuro.innerHTML = meuSwitch.checked ? "Modo escuro ativado!" : "Modo claro ativado!";
if (meuSwitch.checked) {
        imagemc.setAttribute("src", "fotos/icone_trufas_modo_escuro_FINAL.svg");
    } else {
        imagemc.setAttribute("src", "fotos/icone_trufas.svg");
    }
});

function mostrarValores() {
    alert("Os valores vão entre R$ 5,00 e R$ 15,00 dependendo do tamanho e da quantidade de trufas. Para mais informações, clique em OK.");
    window.location.href = "valores.html";
}
function mostrarPersonalizados() {
    alert("Para pedidos personalizados, entre em contato conosco pelo WhatsApp.");
    const mensagem = "Olá! Gostaria de saber mais sobre as trufas.";
    const mensagemCodificada = encodeURIComponent(mensagem);
    window.location.href = `https://wa.me/553184345077?text=${mensagemCodificada}`;
}
function mostrarPromocoes() {
    window.location.href = "promocoes.html";
}
function mostrarContato() {
    const mensagem = "Olá! Gostaria de saber mais sobre as trufas de vocês e tirar dúvidas.";
    const mensagemCodificada = encodeURIComponent(mensagem);
    window.location.href = `https://wa.me/553184345077?text=${mensagemCodificada}`;
}