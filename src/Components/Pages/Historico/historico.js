import styles from "./historico.module.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export function Historico(){
    const params = useParams();
    const [dados, setdados] = useState([]);
    
    useEffect(() => {
        async function posts() {
            const bloco = await axios.get(`https://ironrest.herokuapp.com/camila-dante-paciente/${params.userId}`);
            setdados(bloco.data);
        }
        posts();    
    },[params.userId]);
    
    return (
        <>
            <Link to="/box-post">
                <button>Criar</button>
            </Link>
            <ul class="box">
            {dados.map((info) => {
              return (
                <li id= "box" class= "boxPost color">
                    <h1 class="titulo">{info.instituicao}</h1>
                    <h2 className ="subTitulo">{info.descricao}</h2>
                    <p class= 'cat color'>{info.categoria}</p>
                  <Link to={`/detail/${info._id}`}>Saiba mais</Link>
                </li>
              );
                })}
            </ul>
      </>
    );
  }
