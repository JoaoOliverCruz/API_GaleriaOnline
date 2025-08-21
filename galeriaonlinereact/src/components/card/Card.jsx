import React from 'react'
import "./Card.css";

import imgCard from '../../assets/img/Foto1.svg';
import imgPen from '../../assets/img/pen.svg';
import imgTrash from '../../assets/img/trash.svg';

export const Card = ({tituloCard}) => {
    return (
        <>
            <div className='cardDaImagem'>
                <p>
                    {tituloCard}
                </p>
                <img className='imgDoCard' src={imgCard} alt="Uma criança fazendo uma cara de tipo, mano fique quieto" />

                <div className='icons'>
                    <img src={imgPen} alt="ícone de caneta para realizar uma alterção" />
                    <img src={imgTrash} alt="ícone de uma lixeira para deletar um card" />
                </div>
            </div>
        </>
    )

}


