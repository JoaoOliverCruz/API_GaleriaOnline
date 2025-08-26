import React from 'react'
import "./Botao.css";

export const Botao = ({nomeBotao, funcBotao}) => {
  return (
    <button className="botao" onClick={funcBotao} type='submit'>
        {nomeBotao}
    </button>
  )
}


