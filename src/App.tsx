import './styles/app.css';

import { members } from './mural';
import { Card } from './components/card/Card';

type memberType = {
  nome: string,
  diretoria: string,
  tecnologias: string,
  sobreMim: string,
}

const middleIndex = Math.ceil(members.length / 2);

const firstHalf = members.splice(0, middleIndex);
const secondHalf = members.splice(-middleIndex);

function App() {
  return (
    <div className='container'>
      <div className='cover'>
        <div className='logo-ej'>
          <img id='logo-ejcomp' src="/images/EJBRANCO.png" alt="Logo EJComp" />
          <img id='ejcomp' src="/images/ejcomp.png" alt="Logo EJComp" />
        </div>
        <img id='hacktober' src="/images/hacktober.png" alt="Logo Hacktoberfest" />
      </div>
      <div className='mural'>
        <div className='title-container'><h1>Mural dos membros :)</h1></div>
        <div className='cards-container'>
          <div className='cards-container-left'>
            {
              firstHalf.map((member: memberType, index) =>
                Card(member, index))
            }
          </div>
          <div className='cards-container-left'>
            {
              secondHalf.map((member: memberType, index) =>
                Card(member, index))
            }
          </div>
        </div>
      </div>
      <div className='footer'>
        Desenvolvido por EJComp &#129293;
      </div>
    </div >
  );
}

export default App;
