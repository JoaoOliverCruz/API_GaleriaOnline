
import "./Galeria.css";
import icon from "../../assets/img/upload.svg";
import { Botao } from "../../components/botao/Botao";
import { Card } from "../../components/card/Card";
import { useEffect, useState } from "react";
import api from "../../Services/services";

export const Galeria = () => {

  const [cards, setCards] = useState([]);
  const [imagem, setImagem] = useState(null);
  const [nomeImagem, setNomeImagem] = useState("");

  async function listarCards() {
    try {
      //me manda informacoes
      const resposta = await api.get("Imagem");
      // console.log(resposta);
      setCards(resposta.data);


    } catch (error) {
      console.error("Erro ao listar", error);
      alert("Erro ao listar!!!!")
    }
  }

  async function cadastrarCard(e) {
    e.preventDefault();

    if (imagem && nomeImagem) {
      try {
        // FormData fornece uma maneira fácil de construir um conjunto de pares chave/valor representando campos de um elemento form e seus valores, os quais podem ser facilmente.
        const formData = new FormData();
        //append: anexar/acrescentar/adicionar
        formData.append("Nome", nomeImagem);
        formData.append("Arquivo", imagem);


        await api.post("Imagem/upload", formData, {

          headers: {
            "Content-Type": "multipart/form-data"
          }


        });


        alert("Eba Cadastrouuuuu!!!!");

      } catch (error) {
        alert("Nao foi possivel realizar o cadastro!!");
        console.error(error);

      }
    } else {
      alert("Preencha os campos de Nome e imagem!!");
    }

  }

  function editarCards(id, nomeAntigo) {
    
      const novoNome = prompt("Digite o novo nome da imagem", nomeAntigo);
      
      const inputArquivo = document.createElement("input");
      inputArquivo.type = "file";
      //aceita imagens indenpendentes da extensoes
      inputArquivo.accept = "image/*";
      
      //fazermos do jeito que esta ai em cima e a mesma coisa que fazer desse jeito aqui em baixo, segue o exemplo:
      //<input type="file" accept="image/*"></input>
      
      inputArquivo.onchange = async (e) => {
        const novoArquivo = e.target.files[0];
        
        const formData = new FormData();
        
        //adicioan o novo nome no formdata:
        formData.append("Nome", novoNome);
        formData.append("Arquivo", novoArquivo);
        
        if (formData) {
          try {
            await api.put(`Imagem/${id}`, formData, {
              headers:{
                "Content-Type": "multipart/form-data"
              }
            })
            
            alert("Ebaaaa deu certo!!!!!!");
            listarCards();
            
          } catch (error) {
            alert("nao foi possivel alterar o card!!");
            console.error(error);
            
          }
        }
      };
      
      
    // } catch (error) {
    //   alert("Nao foi possivel editar o card!!!");
    //   console.error(error); 
    // }
    
    inputArquivo.click();
      
      
      
  }

  async function excluirCards(id) {

    try {

      await api.delete(`Imagem/${id}`);
      alert("excluido com sucesso!!!!")

    } catch (error) {
      alert("Erro ao excluir o card!!");
      console.error(error)

    }

  }



  useEffect(() => {

    listarCards();
  });




  return (
    <>
      <h1 className='tituloGaleria'>Galeria Online</h1>

      <form className='formulario' onSubmit={cadastrarCard}>
        <div className="campoNome">
          <label className=''>Nome</label>
          <input type="text" className='inputNome' onChange={(e) => setNomeImagem(e.target.value)}
            value={nomeImagem}
          />
        </div>

        <div className="campoImagem">
          <label className="arquivoLabel">
            <i>
              <img src={icon} alt="Icone de upload de imagem" />
            </i>
            <input type="file" className="arquivoInput" onChange={(e) => setImagem(e.target.files[0])}
            />

          </label>
        </div>
        <Botao nomeBotao="Cadastrar" />
      </form>

      <div className="campoCards">
        {cards.length > 0 ? (
          cards.map((e) => (
            <Card
              key={e.id}
              tituloCard={e.nome}
              imgCard={`https://localhost:7100/${e.caminho.replace("wwwroot/", "")}`}
              funcEditar={() => editarCards(e.id, e.nome)}
              funcExcluir={() => excluirCards(e.id)}

            />

          ))
        ) : <p>Nenhum card cadastrado</p>}

      </div>

    </>


  )
}


