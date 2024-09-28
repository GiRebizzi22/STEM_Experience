/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import './projeto1.scss';
import axios from 'axios';
import Suco from './../../assets/suco1.jpg';

const Projeto4 = () => {
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
      <h1>Suco Automático</h1>
      <p className='desc'>
        O funcionamento é o seguinte: quando você coloca o copo embaixo da
        torneira, o sensor ultrassônico detecta a distância e percebe que tem um
        copo ali. Ele então envia essa informação para o Arduino, que comanda a
        bomba d'água. A bomba ativa e começa a bombear o suco do reservatório
        para o copo. Quando o sensor detecta que o copo está cheio, a bomba
        desliga e o suco para de cair.
        <br />
        <br />
        <br />
        O shield é responsável por facilitar a conexão da bomba d'água e do
        sensor com o Arduino, além de deixar o código mais organizado e o
        circuito mais compacto. Isso é importante porque o shield permite que a
        gente conecte vários componentes ao mesmo tempo sem se preocupar tanto
        com a fiação.
        <br />
        <br />
        Além disso, o sensor ultrassônico é o que dá o toque especial no
        projeto, porque ele mede a distância entre o copo e a torneira. Se não
        tivesse o sensor, a gente teria que apertar um botão ou acionar a bomba
        de outra forma, mas com ele tudo fica automático!
        <br />
        <br />
        No final, o objetivo é criar uma solução prática e divertida que pode
        ser usada em festas ou eventos. E é isso que o nosso projeto de STEM
        faz: combina tecnologia e criatividade para resolver problemas de uma
        forma inovadora.
      </p>

      <div className='im'>
        <img src={Suco} alt='imagem do projeto1' />
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

export default Projeto4;
