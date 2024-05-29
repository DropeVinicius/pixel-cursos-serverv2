const fs = require("fs")

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritoPorId(id) {
    const cursos = JSON.parse(fs.readFileSync("favoritos.json"))

    const cursosFiltrados = cursos.filter( curso => curso.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(cursosFiltrados))
}

function insereFavorito(id) {
    const cursos = JSON.parse(fs.readFileSync("cursos.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const cursoInserido = cursos.find(curso => curso.id === id)

    // Verifica se o curso já está na lista de favoritos
    const jaEhFavorito = favoritos.some(favorito => favorito.id === cursoInserido.id);

    // Se não estiver na lista, adiciona o curso aos favoritos
    if (!jaEhFavorito) {
        const novaListaDeCursosFavoritos = [...favoritos, cursoInserido]
        fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeCursosFavoritos))
    }    
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
}