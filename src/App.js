import logo from './logo.svg';
import './App.css';

function App() {

const produtos=['Caneta','Computador','Mesa','Cadeira','Mouse','Teclado']
const produtosJson=[
  {descricao: "Caneta", preco: "10,00", finalidade: "escritorio"},
  {descricao: "Computador", preco: "3.000,00", finalidade: "escritorio"},
  {descricao: "Mesa", preco: "500,00", finalidade: "escritorio"},
  {descricao: "Cadeira", preco: "300,00", finalidade: "escritorio"},
  {descricao: "Mouse", preco: "30,00", finalidade: "escritorio"},
  {descricao: "Teclado", preco: "30,00", finalidade: "escritorio"}
]
const listaProdutos=produtos.map(
  (p,i)=>
  <li key={i}>{p}</li>
)

const produtosJson=produtosjson.map(
  (pj,i)=>
  <li key={i}>{pj.descricao} - R${pj.preco} - {pj.finalidade}</li>
)
  return (
    <div className="App">
      <ul>{listaProdutos}</ul>
    </div>
  );
}

export default App;
