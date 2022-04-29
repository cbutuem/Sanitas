import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

export function FichaUser(){
    const params = useParams();
    const [user, setUser] = useState([]);
    
    
    useEffect(() => {
      async function fetchUser() {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/camila-dante-paciente/${params.userId}`
        );
        setUser(response.data);
      }
      fetchUser();
    }, [params.userId]);
  
    const find = user.ficha;

    //console.log(user.ficha.at(-1).Sexo); 
  
    return (
      <>
        <h1>OIIII</h1>
        <h1>{user.Nome}</h1>
        <p>{user.Idade}</p>
        {/*<p>{find.at(-1).Nome}</p>
        <p>{find.at(-1).Idade}</p>
        <p>{find.at(-1).Sexo}</p>
        <p>{find.at(-1).Peso}</p>
        <p>{find.at(-1).Altura}</p>
        <p>{find.at(-1).Doencas}</p>
        <p>{find.at(-1).Alergias}</p>
        <p>{find.at(-1).Vacinas}</p>
        <p>{find.at(-1).HistoricoFamiliar}</p>
        <p>{find.at(-1).HistoricoVida}</p>
        <p>{find.at(-1).Medicamentos}</p>*/}

        
      </>
    );
}