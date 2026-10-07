console.log("Minha Trilha de Aprendizagem carregada!");

// Destaca o link da navegação conforme a seção visível (opcional)
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            // Remove destaque anterior
            links.forEach(l => l.classList.remove("ativo"));
            // Adiciona no clicado
            e.target.classList.add("ativo");
        });
    });
});