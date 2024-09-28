import { useEffect, useState } from 'react';
import './projeto1.scss';
import axios from 'axios';
import Piano1 from './../../assets/piano1.jpg';
import Piano2 from './../../assets/piano2.jpg';

const Projeto3 = () => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const getComentarios = async () => {
      try {
        const response = await axios.get(
          'http://82.112.244.100:8070/comentarios'
        );
        console.log(response.data);
        setComentarios(
          response.data.filter((item) => item.projeto === 'projeto1')
        );
      } catch (error) {
        console.log(error);
      }
    };
    getComentarios();
  }, []);
  return (
    <div className='projeto1'>
      <h1>Teclarduino</h1>
      <p className='desc'>
        Primeiro, eu usei o Arduino Uno como o cérebro do projeto, que é onde
        todo o código que controla os sons fica armazenado. Conectei quatro
        botões à placa do Arduino, cada um para representar uma nota musical
        diferente. Além disso, eu usei um buzzer, que é tipo um pequeno
        alto-falante, para reproduzir os sons.
        <br />
        <br />
        <br />
        O funcionamento é bem simples: quando apertamos um botão, ele envia um
        sinal para o Arduino, e o código dentro do Arduino faz o buzzer tocar
        uma frequência específica, que corresponde a uma nota musical. Para
        isso, eu programei o Arduino com o IDE do Arduino, e cada botão está
        ligado a uma frequência diferente, como as notas Dó, Ré, Mi e Fá.
        <br />
        <br />
        Então, quando você pressiona o primeiro botão, ele toca o Dó, o segundo
        botão toca o Ré, e assim por diante. Você pode até criar pequenas
        músicas tocando os botões na ordem certa!
        <br />
        <br />
        Esse projeto é bem legal porque combina programação, eletrônica e
        música. Além disso, ele ajuda a entender como o som funciona, já que a
        frequência controlada pelo código é o que define a altura da nota.
      </p>

      <div className='im'>
        <img src={Piano1} alt='imagem do projeto1' />
        <img src={Piano2} alt='imagem do projeto1' />
      </div>
      {/* <h1 className="fb">Feedbacks:</h1>

      {comentarios.map((comentario) => (
        <div className="comnts" key={comentario.id}>
          <div>
            <h2 className="tl">Nome:</h2>
            <p className="tx">{comentario.nome}</p>
            <h2 className="tl">Comentário:</h2>
          </div>
          <p className="tx">{comentario.comentario}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Projeto3;
