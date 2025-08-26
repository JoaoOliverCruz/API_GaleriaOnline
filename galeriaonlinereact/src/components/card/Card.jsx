import React from 'react'
import "./Card.css";


import imgPen from '../../assets/img/pen.svg';
import imgTrash from '../../assets/img/trash.svg';

export const Card = ({tituloCard, imgCard, funcEditar, funcExcluir }) => {
    return (
        <>
            <div className='cardDaImagem'>
                <p>
                    {tituloCard}
                </p>
                <img className='imgDoCard' src={imgCard} alt="Uma criança fazendo uma cara de tipo, mano fique quieto" />

                <div className='icons'>
                    <img src={imgPen} onClick={funcEditar} alt="ícone de caneta para realizar uma alterção" />
                    <img src={imgTrash}  onClick={funcExcluir} alt="ícone de uma lixeira para deletar um card" />
                </div>
            </div>
        </>
    )

}


