import styles from "./consultas.module.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

export function Consultas(){
  const params = useParams();
    const [user, setUser] = useState({ficha:[]});
    
    
    useEffect(() => {
      async function fetchUser() {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/camila-dante-paciente/${params.userId}`
        );
        setUser(response.data);
      }
      fetchUser();
    }, [params.userId]);

    const consu = user.ficha;
    const cont = consu.filter(sem => sem !== "");
    return (
    <div>
      <ul>
        {
          cont.map((icons) =>{
            console.log(icons.Pedido);
            return(
              <>
                <li>{icons.Queixa}</li>
                <li>{icons.Hipotese}</li>
                <li>{icons.Conduta}</li>
                <li>{icons.Diagnostico}</li>
                <li>{icons.Alteracoes}</li>
                <li>{icons.Data}</li>
              </>
              );
          })
        }
      </ul>
    </div>
    )
}