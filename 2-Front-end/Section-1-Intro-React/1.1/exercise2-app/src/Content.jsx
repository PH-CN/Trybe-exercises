import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const Task = (value) => {
  return (
    <li key={value.conteudo}>
    O Conteúdo é: {value.conteudo} <br/>
    Status: {value.status} <br />
    Bloco: {value.bloco} <br />
    <br />
    </li>
  );
}

class Content extends React.Component {
  render() {
    return (
      <ul key='Parent'>{conteudos.map(conteudo => Task(conteudo))}</ul>
    );
  }
}

export default Content;