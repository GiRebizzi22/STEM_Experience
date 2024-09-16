import { useEffect, useState } from 'react';
import './projeto1.scss';
import axios from 'axios';

const Projeto1 = () => {
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
      Projeto1
      {comentarios.map((comentario) => (
        <div key={comentario.id}>
          <div style={{ display: 'flex' }}>
            <p>Nome:</p>
            <p>{comentario.nome}</p>
          </div>
          <p>Comentario:</p>
          <p>{comentario.comentario}</p>
        </div>
      ))}
    </div>
  );
};

export default Projeto1;
