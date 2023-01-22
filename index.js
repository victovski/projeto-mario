const video = document.getElementById("video"); 
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botão veja o trailer");
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "")
});