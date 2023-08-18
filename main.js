// Seleção de elementos
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const fortuneCookie = document.querySelector("#fortuneCookie");
const button = document.querySelector("button");

// Event listener para o clique no fortuneCookie
fortuneCookie.addEventListener("click", () => {
  toggleVisibility(container, container2);
});

// Event listener para o clique no botão
button.addEventListener("click", () => {
  toggleVisibility(container2, container);
});

// Função para alternar visibilidade de elementos
function toggleVisibility(hideElement, showElement) {
  hideElement.classList.add("hide");
  showElement.classList.remove("hide");
}
