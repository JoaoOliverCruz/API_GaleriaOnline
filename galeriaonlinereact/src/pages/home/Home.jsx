import './Home.css';
import { Botao } from '../../components/botao/Botao';
import { Navigate, useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate()

  function navegarGaleria() {
    navigate('/galeria')
  }


  return (
    <div className="telaHome">
          <div className="titulos">
          <h2>Bem-vindo </h2>
          <h1>Galeria Online</h1>
          <Botao nomeBotao="Entrar" funcBotao={navegarGaleria}/>
          </div>
    </div>

  )

}


