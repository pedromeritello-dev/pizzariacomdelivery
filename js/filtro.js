const botaoFiltro = document.querySelectorAll(".filtro-btn");
const pizzas = document.querySelectorAll(".card");

botaoFiltro.forEach(btn => {
    btn.addEventListener("click", () => {
        const categoria = btn.getAttribute("data-categoria");

        pizzas.forEach(pizza => {
            const tipo = pizza.getAttribute("data-tipo");

            if (categoria === "todas" || tipo === categoria) {
                pizza.style.display = "block";
            } else {
                pizza.style.display = "none";
            }
        });

        // Atualiza botão ativo
        botaoFiltro.forEach(b => b.classList.remove("ativo"));
        btn.classList.add("ativo");
    });
});
