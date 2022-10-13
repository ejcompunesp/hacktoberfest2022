import React from 'react';
import { members } from '../../mural';

import './style.css';

type memberType = {
  nome: string,
  diretoria: string,
  tecnologias: string,
  sobreMim: string,
}

export const Card: React.FC<memberType> = ({ nome, diretoria, tecnologias, sobreMim }: memberType, index: number) => {

  let color: any = Math.floor(Math.random() * (5 - 1 + 1) + 1);

  switch (color) {
    case 1:
      color = '#0D0B53';
      break;
    case 2:
      color = '#372B85';
      break;
    case 3:
      color = '#6D00B0';
      break;
    case 4:
      color = '#D83DFF';
      break;
    case 5:
      color = '#170F1E';
      break;
    default:
      color = '#0D0B53';
  }

  return (
    <div className='card' key={index} style={{ backgroundColor: color }}>
      <div>
        <b>Nome: </b>
        {nome}
      </div>
      <div>
        <b>Diretoria: </b>
        {diretoria}
      </div>
      <div>
        <b>Tecnologias: </b>
        {tecnologias}
      </div>
      <div>
        <b>Sobre mim: </b>
        {sobreMim}
      </div>
      <div id='image-container'>
        <img src="images/EJBRANCO.png" alt="Logo EJComp" />
      </div>
    </div>
  )
}