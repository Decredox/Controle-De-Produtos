var arr = []
var numero_gerado;
function GerarId() {
  numero_gerado = Math.max(0, Math.floor(Math.random() * 1000))
  return numero_gerado
}



// Classe De Produtos
class Product {
  constructor(nome, id, valor, estado) {
    this.nome = nome;
    this.id = Number(id);
    this.valor = valor;
    this.estado = estado;
  }
}




// Buttons Var
var add = document.getElementById("add");
var del = document.getElementById("del");
var res = document.getElementById("res");

// Input Var
var addName = document.getElementById("addName");
var addId = document.getElementById("addId");
var addValor = document.getElementById("addValor");
var delId = document.getElementById("delId");

// Var uteis

var listaProdutos = document.getElementById("listaProdutos");
var estado = "Disponivel";
var cond = true;
var produto;
var num;




// Adicionar Produto
add.addEventListener("click", () => {
  if (cond == true) {
    cond = false;

    num = GerarId();
    if (arr.includes(numero_gerado)) {
      num = GerarId();
    }
    arr.push(num)



    produto = new Product(addName.value, num, addValor.value, estado)


    let str = `
    <tr>
    <td>${produto.id}</td>
    <td>${produto.nome}</td>
    <td>${produto.valor}R$</td>
    <td>${produto.estado}</td>
  </tr>`

    listaProdutos.innerHTML += str
    }
    addName.value = "";
    addValor.value = ""
    setTimeout(() => { cond = true; }, 2000)
  
})




del.addEventListener("click", () => {
  let PegarId = document.querySelectorAll("#listaProdutos > tbody > tr > td:nth-child(1)")
  let tabela = document.querySelectorAll("#listaProdutos > tbody")
  PegarId.forEach((result, i) => {
    if (Number(delId.value) === Number(result.innerHTML)) {
      let ultimoElem = tabela[i + 1].lastElementChild.lastElementChild
      ultimoElem.innerHTML = "Indisponivel"
    };

  });
});

res.addEventListener("click", () => {
  let PegarId = document.querySelectorAll("#listaProdutos > tbody > tr > td:nth-child(1)")
  let tabela = document.querySelectorAll("#listaProdutos > tbody")
  PegarId.forEach((result, i) => {
    if (Number(delId.value) === Number(result.innerHTML)) {
      tabela[i + 1].style.display = "table-row-group"
      let ultimoElem = tabela[i + 1].lastElementChild.lastElementChild
      ultimoElem.innerHTML = "Disponivel"
    };

  });
});
