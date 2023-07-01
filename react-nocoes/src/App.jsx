import React from "react";

/*const titulo = (text) => {return  <h1>{text}</h1>}
const App = () => {
  const random = Math.random() * 10;
  if(random > 5){

    return (
      <React.Fragment>
        <label htmlFor="Nome">Nome</label>
        <input type="text" id="nome" />
        {titulo}
        <p>
          {random}
        </p>
      </React.Fragment> 
    )
  }
  else{
    return (
      <>
        <p>
          {titulo("Valor sorteado é menor que 5")}
        </p>
      </>
    )
  }


}*/


/*const Estefania = {
  nome: 'Estefánia', 
  idade: 19,
  compras: [

    {nome: 'NoteBook', preco: 'KZ 240000'},
    {nome: 'iPhone', preco: 'KZ 105000'},
    {nome: 'Vestido', preco: 'KZ 24000'},

  ],
  status: true
}

const Osvaldo = {
  nome: 'Osvaldo', 
  idade: 19,
  compras: [
    
    {nome: 'NoteBook', preco: 'KZ 180000'},
    {nome: 'iPhone', preco: 'KZ 90000'},
    {nome: 'Tenis', preco: 'KZ 6000'},

  ],
  status: false
}


const App = () => {

    const client = Estefania;

    const total = client.compras
    .map(el => Number(el.preco.split(' ')[1]))
    .reduce( (a, b) => a + b)

    return (
      <React.Fragment>

        <div>
          <p><span>Nome: {client.nome}</span></p>
          <p><span>Idade: {client.idade}</span></p>
          <p>Status: 
            <span style={
            ( 
              client.status ? {color: 'green'} : {color: 'red'}
            )
            }>{
            (
              client.status? "Activa": "Inativa"
            )
              }</span>
          </p>
          <p><span>Total gasto: {total}</span></p>
          <p>
            <h3>
              {(total > 280000)? "Voce Gastou muito": ""}

            </h3>
          </p>

        </div>

      </React.Fragment>
    )
}
*/

const produtos = [

  {
    
    id: 1,
    nome: 'Smartphone',
    preco: "Kz 70000",
    cores: ['#29d8d5', '#234d23', '#fc53644']
  },
  {
    id: 2,
    nome: 'NoteBook',
    preco: "Kz 150000",
    cores: ['#29d855', '#d74263', '#fc97344']
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: "Kz 50000",
    cores: ['#53648', '#dfd5368', '#63fd232']
  },


];




const App =  () => {
  const dados = produtos
  .filter(({preco}) => Number(preco.split(' ')[1]) > 50000)

  return (
    <>
      {
        dados.map(({nome, preco, cores}) => 
          <div>
            <h2>{nome}</h2>
            <h3>{preco}</h3>
            <ul>
              {cores.map(el => 
                <li style={{backgroundColor: el, color: 'white'}} key={el}>
                  {el}
                </li>
              )}

            </ul>
        </div>
       )  
      }
    </>
  )

}




export default App