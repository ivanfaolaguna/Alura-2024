function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  // Obtém o valor do campo de pesquisa e o converte para minúsculas para uma comparação case-insensitive
  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // Se não tem nada no campo de pesquisa
  if (campoPesquisa === "") {
    section.innerHTML = "<p>Nada foi encontrado</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    // Converte o título para minúsculas para uma comparação case-insensitive
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    // Verifica se o título contém a palavra-chave
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <img src="${dado.imagem}" alt="" style="border: 2px solid #ccc; width: 300px;">
        </div>
      `;
    }
  }

  // Atribui o HTML construído à seção de resultados
  section.innerHTML = resultados;
}